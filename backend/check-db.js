const prisma = require('./src/lib/prisma');
async function main() {
  try {
    const users = await prisma.user.findMany({ select: { id: true, email: true, name: true, role: true } });
    console.log('Database users count:', users.length);
    console.log('Users:', users);
    const profiles = await prisma.businessProfile.findMany();
    console.log('Database business profiles count:', profiles.length);
    console.log('Profiles:', profiles);
  } catch (err) {
    console.log('DB error:', err.message);
  } finally {
    try { await prisma.$disconnect(); } catch (_) {}
  }
}
main();
