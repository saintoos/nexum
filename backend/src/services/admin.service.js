const prisma = require("../lib/prisma");
const {
  userRepository,
  activityLogRepository,
  analysisConfigRepository,
} = require("../repositories");

/**
 * Service untuk logika bisnis Pengelolaan Sistem & Administrasi (Admin Role)
 */
const adminService = {
  /**
   * Mengambil daftar pengguna dengan filter, pencarian, dan paginasi
   * @param {Object} query
   * @param {number} [query.page=1]
   * @param {number} [query.limit=10]
   * @param {string} [query.search]
   * @param {string} [query.role]
   * @param {string|boolean} [query.isActive]
   */
  async getUsers(query = {}) {
    let isActiveFilter;
    if (query.isActive !== undefined) {
      if (typeof query.isActive === "boolean") {
        isActiveFilter = query.isActive;
      } else if (typeof query.isActive === "string") {
        if (query.isActive.toLowerCase() === "true") isActiveFilter = true;
        if (query.isActive.toLowerCase() === "false") isActiveFilter = false;
      }
    }

    return userRepository.findManyWithPagination({
      page: query.page,
      limit: query.limit,
      search: query.search || "",
      role: query.role,
      isActive: isActiveFilter,
    });
  },

  /**
   * Mengubah status aktif/nonaktif akun pengguna
   * @param {string} targetUserId
   * @param {boolean} isActive
   * @param {Object} adminUser - Data admin yang mengeksekusi aksi
   */
  async changeUserStatus(targetUserId, isActive, adminUser) {
    if (typeof isActive !== "boolean") {
      const error = new Error("Parameter isActive wajib bertipe boolean (true/false).");
      error.status = 400;
      error.code = "INVALID_STATUS_PARAM";
      throw error;
    }

    // 1. Verifikasi target user ada di database
    const targetUser = await userRepository.findById(targetUserId);
    if (!targetUser) {
      const error = new Error("Pengguna target tidak ditemukan.");
      error.status = 404;
      error.code = "USER_NOT_FOUND";
      throw error;
    }

    // 2. Proteksi pertahanan diri: Admin tidak boleh menonaktifkan akunnya sendiri
    if (targetUserId === adminUser.id && !isActive) {
      const error = new Error("Anda tidak dapat menonaktifkan akun administrator Anda sendiri demi keamanan sesi.");
      error.status = 400;
      error.code = "SELF_DEACTIVATION_PROHIBITED";
      throw error;
    }

    // 3. Perbarui status user
    const updatedUser = await userRepository.updateStatus(targetUserId, isActive);

    // 4. Catat aktivitas audit
    activityLogRepository
      .create({
        userId: adminUser.id,
        eventType: "ADMIN_UPDATE_USER_STATUS",
        level: "WARN",
        component: "ADMIN",
        message: `Admin ${adminUser.email} mengubah status pengguna ${targetUser.email} menjadi ${isActive ? "AKTIF" : "NONAKTIF"}`,
        metadata: {
          targetUserId,
          targetEmail: targetUser.email,
          newStatus: isActive,
        },
      })
      .catch(() => {});

    return updatedUser;
  },

  /**
   * Menghapus akun pengguna beserta seluruh data relasinya secara permanen
   * @param {string} targetUserId
   * @param {Object} adminUser
   */
  async deleteUser(targetUserId, adminUser) {
    // 1. Verifikasi target user ada di database
    const targetUser = await userRepository.findById(targetUserId);
    if (!targetUser) {
      const error = new Error("Pengguna target tidak ditemukan.");
      error.status = 404;
      error.code = "USER_NOT_FOUND";
      throw error;
    }

    // 2. Proteksi pertahanan diri: Admin tidak boleh menghapus akunnya sendiri
    if (targetUserId === adminUser.id) {
      const error = new Error("Anda tidak dapat menghapus akun administrator Anda sendiri.");
      error.status = 400;
      error.code = "SELF_DELETION_PROHIBITED";
      throw error;
    }

    // 3. Eksekusi penghapusan kaskade transaksional
    await userRepository.deleteWithRelations(targetUserId);

    // 4. Catat log audit aksi destruktif
    activityLogRepository
      .create({
        userId: adminUser.id,
        eventType: "ADMIN_DELETE_USER",
        level: "CRITICAL",
        component: "ADMIN",
        message: `Admin ${adminUser.email} menghapus pengguna ${targetUser.email} beserta seluruh data relasi`,
        metadata: {
          deletedUserId: targetUserId,
          deletedUserEmail: targetUser.email,
          deletedUserRole: targetUser.role,
        },
      })
      .catch(() => {});

    return {
      deletedUserId: targetUserId,
      email: targetUser.email,
    };
  },

  /**
   * Menghasilkan ringkasan metrik statistik platform NEXUM
   */
  async getStatistics() {
    const [
      totalUsers,
      activeUsers,
      totalBusinessProfiles,
      totalLocationAnalyses,
      totalFinancialAnalyses,
      totalChatMessages,
      recentLogsResult,
      rolesDistribution,
    ] = await Promise.all([
      prisma.user.count(),
      prisma.user.count({ where: { isActive: true } }),
      prisma.businessProfile.count(),
      prisma.locationAnalysis.count(),
      prisma.financialAnalysis.count(),
      prisma.chatMessage.count(),
      activityLogRepository.findManyWithPagination({ page: 1, limit: 5 }),
      prisma.user.groupBy({
        by: ["role"],
        _count: { id: true },
      }),
    ]);

    const roleBreakdown = rolesDistribution.reduce((acc, curr) => {
      acc[curr.role] = curr._count.id;
      return acc;
    }, {});

    return {
      overview: {
        totalUsers,
        activeUsers,
        inactiveUsers: Math.max(0, totalUsers - activeUsers),
        totalBusinessProfiles,
        totalLocationAnalyses,
        totalFinancialAnalyses,
        totalChatMessages,
      },
      roles: {
        admin: roleBreakdown["ADMIN"] || 0,
        umkm: roleBreakdown["UMKM"] || 0,
      },
      recentActivities: recentLogsResult.records || [],
    };
  },

  /**
   * Mengambil status operasional dan kesehatan sistem (Health Check)
   */
  async getSystemStatus() {
    // 1. Latensi Database
    const startDbPing = Date.now();
    await prisma.$queryRaw`SELECT 1`;
    const dbLatencyMs = Date.now() - startDbPing;

    // 2. Konfigurasi Aktif Sistem
    const [activeLocationConfig, activeFinancialConfig] = await Promise.all([
      analysisConfigRepository.findActiveByModule("LOCATION"),
      analysisConfigRepository.findActiveByModule("FINANCIAL"),
    ]);

    // 3. Status Memori & Uptime
    const memory = process.memoryUsage();

    return {
      status: "OPERATIONAL",
      environment: process.env.NODE_ENV || "development",
      uptimeSeconds: Math.floor(process.uptime()),
      timestamp: new Date().toISOString(),
      database: {
        status: "CONNECTED",
        latencyMs: dbLatencyMs,
      },
      activeConfigs: {
        location: activeLocationConfig
          ? {
              version: activeLocationConfig.versionNumber,
              threshold: activeLocationConfig.parameters?.threshold,
            }
          : null,
        financial: activeFinancialConfig
          ? {
              version: activeFinancialConfig.versionNumber,
              thresholds: activeFinancialConfig.parameters?.thresholds,
            }
          : null,
      },
      server: {
        nodeVersion: process.version,
        platform: process.platform,
        arch: process.arch,
        memoryUsage: {
          heapUsedMb: (memory.heapUsed / 1024 / 1024).toFixed(2),
          heapTotalMb: (memory.heapTotal / 1024 / 1024).toFixed(2),
          rssMb: (memory.rss / 1024 / 1024).toFixed(2),
        },
      },
    };
  },
};

module.exports = adminService;
