const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const prisma = require("../src/lib/prisma");

const JWT_SECRET =
  process.env.JWT_SECRET ||
  "nexum_jwt_secret_development_key_super_secure_32_chars_minimum_2026_unnes";

async function generateDevTokens() {
  console.log("\n=======================================================");
  console.log("       NEXUM DEVELOPMENT JWT TOKEN GENERATOR           ");
  console.log("=======================================================\n");

  const hashedPassword = await bcrypt.hash("Password123!", 10);

  // 1. Buat / Pastikan User UMKM tersedia
  const umkmEmail = "dev_umkm@nexum.id";
  let umkmUser = await prisma.user.findUnique({
    where: { email: umkmEmail },
    include: { businessProfile: true },
  });

  if (!umkmUser) {
    umkmUser = await prisma.user.create({
      data: {
        name: "Dev UMKM Tester",
        email: umkmEmail,
        passwordHash: hashedPassword,
        role: "UMKM",
        isActive: true,
        businessProfile: {
          create: {
            name: "Warung Kopi Jaya Dev",
            sector: "F&B",
            address: "Jl. Sekaran Raya No. 10, Gunungpati, Semarang",
            quarterlyRevenueTarget: 75000000.0,
          },
        },
      },
      include: { businessProfile: true },
    });
    console.log(`[+] Akun UMKM berhasil dibuat: ${umkmEmail}`);
  } else {
    // Pastikan aktif
    if (!umkmUser.isActive) {
      umkmUser = await prisma.user.update({
        where: { id: umkmUser.id },
        data: { isActive: true },
        include: { businessProfile: true },
      });
    }
    console.log(`[i] Akun UMKM sudah ada: ${umkmEmail}`);
  }

  // 2. Buat / Pastikan User Admin tersedia
  const adminEmail = "dev_admin@nexum.id";
  let adminUser = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (!adminUser) {
    adminUser = await prisma.user.create({
      data: {
        name: "Dev Administrator",
        email: adminEmail,
        passwordHash: hashedPassword,
        role: "ADMIN",
        isActive: true,
      },
    });
    console.log(`[+] Akun ADMIN berhasil dibuat: ${adminEmail}`);
  } else {
    if (!adminUser.isActive) {
      adminUser = await prisma.user.update({
        where: { id: adminUser.id },
        data: { isActive: true },
      });
    }
    console.log(`[i] Akun ADMIN sudah ada: ${adminEmail}`);
  }

  // 3. Terbitkan Token JWT (Berlaku 7 Hari)
  const umkmToken = jwt.sign(
    {
      id: umkmUser.id,
      email: umkmUser.email,
      role: umkmUser.role,
    },
    JWT_SECRET,
    { algorithm: "HS256", expiresIn: "7d" }
  );

  const adminToken = jwt.sign(
    {
      id: adminUser.id,
      email: adminUser.email,
      role: adminUser.role,
    },
    JWT_SECRET,
    { algorithm: "HS256", expiresIn: "7d" }
  );

  console.log("\n-------------------------------------------------------");
  console.log("1. TOKEN PENGGUNA UMKM (Role: UMKM)");
  console.log("   Gunakan token ini untuk menguji rute:");
  console.log("   - /api/business/*");
  console.log("   - /api/location/*");
  console.log("   - /api/financial/*");
  console.log("   - /api/dashboard");
  console.log("   - /api/ai/*");
  console.log("   - /api/auth/me");
  console.log("-------------------------------------------------------");
  console.log(umkmToken);

  console.log("\n-------------------------------------------------------");
  console.log("2. TOKEN KHUSUS ADMINISTRATOR (Role: ADMIN)");
  console.log("   Gunakan token ini untuk menguji rute khusus admin:");
  console.log("   - /api/admin/users");
  console.log("   - /api/admin/users/:id/status");
  console.log("   - /api/admin/statistics");
  console.log("   - /api/admin/system-status");
  console.log("-------------------------------------------------------");
  console.log(adminToken);
  
  console.log("\n-------------------------------------------------------");

  await prisma.$disconnect();
}

generateDevTokens().catch((err) => {
  console.error("Gagal men-generate dev token:", err);
  process.exit(1);
});
