const { describe, it, before, after } = require("node:test");
const assert = require("node:assert/strict");
const path = require("path");

require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const prisma = require("../src/lib/prisma");

const {
  userRepository,
  businessProfileRepository,
  analysisConfigRepository,
  locationAnalysisRepository,
  financialAnalysisRepository,
  financialPeriodRepository,
  aiConsentRepository,
  chatMessageRepository,
  aiUsageRepository,
  activityLogRepository,
} = require("../src/repositories");

describe("Repository Layer Integration Tests (NEXUM Backend)", () => {
  const timestamp = Date.now();
  const testEmail = `tester_${timestamp}@nexum.test`;
  let testUser = null;
  let testProfile = null;
  let testConfig = null;
  let testLocAnalysis = null;
  let testFinAnalysis = null;

  before(async () => {
    // Bersihkan data sampah pengujian sebelumnya jika ada
    const staleUsers = await prisma.user.findMany({
      where: { email: { endsWith: "@nexum.test" } },
      select: { id: true },
    });
    for (const u of staleUsers) {
      await userRepository.deleteWithRelations(u.id);
    }
  });

  after(async () => {
    // Pembersihan data uji secara menyeluruh (Cleanup)
    if (testUser?.id) {
      await userRepository.deleteWithRelations(testUser.id);
    }
    if (testConfig?.id) {
      await prisma.analysisConfig.delete({ where: { id: testConfig.id } }).catch(() => {});
    }
    await prisma.$disconnect();
  });

  // --------------------------------------------------------------------------
  // 1. Uji UserRepository
  // --------------------------------------------------------------------------
  describe("1. UserRepository", () => {
    it("harus berhasil membuat user baru (create)", async () => {
      testUser = await userRepository.create({
        name: "Penguji Repository",
        email: testEmail,
        passwordHash: "$2a$10$dummyHashPasswordForTestingPurposes1234567890",
        role: "UMKM",
        isActive: true,
      });

      assert.ok(testUser.id, "User ID harus terbuat");
      assert.equal(testUser.email, testEmail);
      assert.equal(testUser.role, "UMKM");
      assert.equal(testUser.isActive, true);
    });

    it("harus dapat menemukan user berdasarkan email (findByEmail)", async () => {
      const found = await userRepository.findByEmail(testEmail);
      assert.ok(found);
      assert.equal(found.id, testUser.id);
    });

    it("harus dapat menemukan user berdasarkan ID (findById)", async () => {
      const found = await userRepository.findById(testUser.id, true);
      assert.ok(found);
      assert.equal(found.id, testUser.id);
    });

    it("harus dapat memperbarui status aktif user (updateStatus)", async () => {
      const updated = await userRepository.updateStatus(testUser.id, false);
      assert.equal(updated.isActive, false);

      // Kembalikan ke true
      const reverted = await userRepository.updateStatus(testUser.id, true);
      assert.equal(reverted.isActive, true);
    });

    it("harus mendukung query paginasi dan filter pencarian (findManyWithPagination)", async () => {
      const result = await userRepository.findManyWithPagination({
        page: 1,
        limit: 5,
        search: "Penguji",
      });

      assert.ok(Array.isArray(result.users));
      assert.ok(result.pagination.total >= 1);
      assert.equal(result.pagination.page, 1);
      assert.equal(result.pagination.limit, 5);
    });
  });

  // --------------------------------------------------------------------------
  // 2. Uji BusinessProfileRepository
  // --------------------------------------------------------------------------
  describe("2. BusinessProfileRepository", () => {
    it("harus dapat membuat profil usaha baru untuk user (create)", async () => {
      testProfile = await businessProfileRepository.create({
        userId: testUser.id,
        name: "Kopi Maju Jaya",
        sector: "F&B",
        address: "Jl. Pemuda No. 45, Semarang",
        quarterlyRevenueTarget: 150000000.0,
      });

      assert.ok(testProfile.id);
      assert.equal(testProfile.userId, testUser.id);
      assert.equal(testProfile.name, "Kopi Maju Jaya");
    });

    it("harus dapat menemukan profil usaha berdasarkan userId (findByUserId)", async () => {
      const found = await businessProfileRepository.findByUserId(testUser.id);
      assert.ok(found);
      assert.equal(found.id, testProfile.id);
      assert.equal(found.sector, "F&B");
    });

    it("harus dapat memperbarui profil usaha (updateByUserId)", async () => {
      const updated = await businessProfileRepository.updateByUserId(testUser.id, {
        name: "Kopi Maju Jaya Ekspres",
      });
      assert.equal(updated.name, "Kopi Maju Jaya Ekspres");
    });

    it("harus dapat melakukan upsert profil usaha (upsertByUserId)", async () => {
      const upserted = await businessProfileRepository.upsertByUserId(
        testUser.id,
        {
          name: "Kopi Maju Jaya",
          sector: "F&B",
          address: "Jl. Pemuda No. 45",
        },
        {
          address: "Jl. Pemuda No. 99, Semarang",
        }
      );
      assert.equal(upserted.address, "Jl. Pemuda No. 99, Semarang");
    });
  });

  // --------------------------------------------------------------------------
  // 3. Uji AnalysisConfigRepository
  // --------------------------------------------------------------------------
  describe("3. AnalysisConfigRepository", () => {
    it("harus dapat membuat konfigurasi analisis baru (create)", async () => {
      testConfig = await analysisConfigRepository.create({
        module: "LOCATION",
        versionNumber: Math.floor(timestamp / 1000) % 1000000,
        isActive: false,
        parameters: {
          weights: { rent: 0.3, competitors: 0.25, accessibility: 0.2, market: 0.25 },
        },
        note: "Konfigurasi uji otomatis",
        createdById: testUser.id,
      });

      assert.ok(testConfig.id);
      assert.equal(testConfig.module, "LOCATION");
    });

    it("harus dapat mengaktifkan konfigurasi secara atomik (activateConfig)", async () => {
      const activated = await analysisConfigRepository.activateConfig(
        testConfig.id,
        "LOCATION"
      );
      assert.equal(activated.isActive, true);
      assert.ok(activated.activatedAt);

      const activeFound = await analysisConfigRepository.findActiveByModule("LOCATION");
      assert.ok(activeFound);
      assert.equal(activeFound.id, testConfig.id);
    });
  });

  // --------------------------------------------------------------------------
  // 4. Uji LocationAnalysisRepository
  // --------------------------------------------------------------------------
  describe("4. LocationAnalysisRepository", () => {
    it("harus dapat menyimpan hasil evaluasi lokasi baru (create)", async () => {
      testLocAnalysis = await locationAnalysisRepository.create({
        code: `LOC-TEST-${timestamp.toString().slice(-6)}`,
        userId: testUser.id,
        businessProfileId: testProfile.id,
        configId: testConfig.id,
        locationName: "Cabang Simpang Lima",
        district: "Semarang Tengah",
        latitude: -6.990399,
        longitude: 110.42291,
        rentCost: 25000000.0,
        competitorCount: 2,
        accessibility: 4,
        marketPotential: 5,
        score: 78.5,
        category: "LAYAK",
        details: { sawScore: 78.5 },
        strongestFactor: "Potensi Pasar",
        weakestFactor: "Biaya Sewa",
        warnings: [],
      });

      assert.ok(testLocAnalysis.id);
      assert.equal(testLocAnalysis.category, "LAYAK");
    });

    it("harus dapat mengambil analisis lokasi terbaru milik user (findLatestByUserId)", async () => {
      const latest = await locationAnalysisRepository.findLatestByUserId(testUser.id);
      assert.ok(latest);
      assert.equal(latest.id, testLocAnalysis.id);
    });

    it("harus dapat mengambil riwayat analisis dengan paginasi dan filter (findByUserIdWithPagination)", async () => {
      const res = await locationAnalysisRepository.findByUserIdWithPagination(
        testUser.id,
        { page: 1, limit: 10, category: "LAYAK" }
      );
      assert.ok(Array.isArray(res.records));
      assert.equal(res.records.length, 1);
      assert.equal(res.records[0].id, testLocAnalysis.id);
    });
  });

  // --------------------------------------------------------------------------
  // 5. Uji FinancialAnalysis & FinancialPeriod Repository
  // --------------------------------------------------------------------------
  describe("5. FinancialAnalysis & FinancialPeriod Repository", () => {
    it("harus dapat menyimpan analisis risiko keuangan (create)", async () => {
      testFinAnalysis = await financialAnalysisRepository.create({
        code: `FIN-TEST-${timestamp.toString().slice(-6)}`,
        userId: testUser.id,
        businessProfileId: testProfile.id,
        configId: testConfig.id,
        fileName: "laporan_keuangan_q3.xlsx",
        periodStart: new Date("2026-01-01"),
        periodEnd: new Date("2026-03-31"),
        periodsAnalyzed: 3,
        ratios: { currentRatio: 2.1, netProfitMargin: 18.5 },
        ruleResults: { liquidityScore: 10, profitabilityScore: 12 },
        riskIndex: 22.0,
        riskLevel: "SEHAT",
      });

      assert.ok(testFinAnalysis.id);
      assert.equal(testFinAnalysis.riskLevel, "SEHAT");
    });

    it("harus dapat menyimpan banyak periode keuangan secara transaksional (upsertMany)", async () => {
      const periods = [
        {
          userId: testUser.id,
          businessProfileId: testProfile.id,
          periodStart: new Date("2026-01-01"),
          revenue: 50000000.0,
          cogs: 25000000.0,
          operatingExpense: 10000000.0,
          netIncome: 15000000.0,
          currentAssets: 40000000.0,
          inventory: 15000000.0,
          totalAssets: 80000000.0,
          currentLiabilities: 20000000.0,
          totalLiabilities: 30000000.0,
          equity: 50000000.0,
          sourceAnalysisId: testFinAnalysis.id,
        },
        {
          userId: testUser.id,
          businessProfileId: testProfile.id,
          periodStart: new Date("2026-02-01"),
          revenue: 60000000.0,
          cogs: 30000000.0,
          operatingExpense: 12000000.0,
          netIncome: 18000000.0,
          currentAssets: 45000000.0,
          inventory: 18000000.0,
          totalAssets: 90000000.0,
          currentLiabilities: 22000000.0,
          totalLiabilities: 32000000.0,
          equity: 58000000.0,
          sourceAnalysisId: testFinAnalysis.id,
        },
      ];

      const inserted = await financialPeriodRepository.upsertMany(periods);
      assert.equal(inserted.length, 2);
    });

    it("harus dapat melakukan query agregasi keuangan (_sum revenue, cogs, profit) (getAggregatesByUserId)", async () => {
      const aggregates = await financialPeriodRepository.getAggregatesByUserId(testUser.id);
      assert.equal(aggregates._count.id, 2);
      // Revenue total: 50.000.000 + 60.000.000 = 110.000.000
      assert.equal(parseFloat(aggregates._sum.revenue), 110000000.0);
      // Net Income total: 15.000.000 + 18.000.000 = 33.000.000
      assert.equal(parseFloat(aggregates._sum.netIncome), 33000000.0);
    });
  });

  // --------------------------------------------------------------------------
  // 6. Uji Modul AI (Consent, ChatMessage, Usage)
  // --------------------------------------------------------------------------
  describe("6. AI Modules (Consent, ChatMessage, Usage)", () => {
    it("harus dapat mengatur izin privasi konteks AI (upsert)", async () => {
      const consent = await aiConsentRepository.upsert(testUser.id, true);
      assert.equal(consent.allowContext, true);

      const found = await aiConsentRepository.findByUserId(testUser.id);
      assert.equal(found.allowContext, true);
    });

    it("harus dapat menyimpan dan mengambil riwayat pesan konsultasi (chatMessage)", async () => {
      await chatMessageRepository.create({
        userId: testUser.id,
        role: "USER",
        content: "Bagaimana prospek cabang Simpang Lima?",
        contextUsed: true,
      });

      await chatMessageRepository.create({
        userId: testUser.id,
        role: "ASSISTANT",
        content: "Berdasarkan evaluasi SAW, cabang tersebut memiliki skor 78.5 (Layak).",
        contextUsed: true,
      });

      const messages = await chatMessageRepository.findByUserId(testUser.id);
      assert.equal(messages.length, 2);
      assert.equal(messages[0].role, "USER");
      assert.equal(messages[1].role, "ASSISTANT");
    });

    it("harus dapat mencatat dan menghitung agregasi token AI (aiUsage)", async () => {
      await aiUsageRepository.create({
        userId: testUser.id,
        status: "SUCCESS",
        contextUsed: true,
        inputTokens: 120,
        outputTokens: 85,
      });

      const stats = await aiUsageRepository.getAggregateStatsByUserId(testUser.id);
      assert.equal(stats._count.id, 1);
      assert.equal(stats._sum.inputTokens, 120);
      assert.equal(stats._sum.outputTokens, 85);
    });
  });

  // --------------------------------------------------------------------------
  // 7. Uji ActivityLogRepository
  // --------------------------------------------------------------------------
  describe("7. ActivityLogRepository", () => {
    it("harus dapat mencatat log aktivitas dengan serialisasi BigInt yang aman (create)", async () => {
      const log = await activityLogRepository.create({
        userId: testUser.id,
        eventType: "TEST_AUTOMATION",
        level: "INFO",
        component: "TEST_RUNNER",
        message: "Log pengujian repository otomatis dijalankan.",
      });

      assert.ok(log.id);
      assert.equal(typeof log.id, "string", "ID BigInt harus dikonversi ke string");
      assert.equal(log.eventType, "TEST_AUTOMATION");
    });

    it("harus dapat membaca log aktivitas dengan paginasi (findManyWithPagination)", async () => {
      const result = await activityLogRepository.findManyWithPagination({
        page: 1,
        limit: 5,
        eventType: "TEST_AUTOMATION",
      });

      assert.ok(Array.isArray(result.records));
      assert.ok(result.records.length >= 1);
      assert.equal(typeof result.records[0].id, "string");
    });
  });

  // --------------------------------------------------------------------------
  // 8. Uji Transaksi Pembersihan Relasi (deleteWithRelations)
  // --------------------------------------------------------------------------
  describe("8. Transactional User Deletion (deleteWithRelations)", () => {
    it("harus dapat menghapus user beserta seluruh data relasi anak secara atomik", async () => {
      const deletedUser = await userRepository.deleteWithRelations(testUser.id);
      assert.equal(deletedUser.id, testUser.id);

      // Pastikan user sudah tidak ada di database
      const checkUser = await userRepository.findById(testUser.id);
      assert.equal(checkUser, null);

      // Pastikan relasi anak (profil, analisis, chat) juga bersih
      const checkProfile = await businessProfileRepository.findByUserId(testUser.id);
      assert.equal(checkProfile, null);

      const checkChat = await chatMessageRepository.findByUserId(testUser.id);
      assert.equal(checkChat.length, 0);

      // Set null agar after() hook tidak perlu menghapus ulang
      testUser = null;
    });
  });
});
