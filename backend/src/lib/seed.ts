import 'dotenv/config';
import bcrypt from 'bcrypt';
import { Prisma } from './generated/prisma/client'; 
import { prisma } from './client';

// ----------------------------------------------------------------------------
// Konfigurasi awal
// ----------------------------------------------------------------------------

const locationParameters = {
  indicators: [
    { key: 'rentCost', label: 'Biaya sewa per bulan', type: 'cost', weight: 0.30, refMin: 1_000_000, refMax: 20_000_000, inputType: 'NUMBER' },
    { key: 'competitorCount', label: 'Jumlah kompetitor sejenis', type: 'cost', weight: 0.25, refMin: 0, refMax: 10, inputType: 'NUMBER' },
    {
      key: 'accessibility', label: 'Tingkat aksesibilitas', type: 'benefit', weight: 0.20, refMin: 1, refMax: 5, inputType: 'SCALE',
      options: [
        { value: 1, label: 'Akses sangat sulit' },
        { value: 2, label: 'Akses sulit' },
        { value: 3, label: 'Akses cukup' },
        { value: 4, label: 'Akses jalan utama (kendaraan umum dan parkir)' },
        { value: 5, label: 'Akses sangat mudah' },
      ],
    },
    {
      key: 'marketPotential', label: 'Potensi pasar lokal', type: 'benefit', weight: 0.25, refMin: 1, refMax: 5, inputType: 'SCALE',
      options: [
        { value: 1, label: 'Sepi' },
        { value: 2, label: 'Kurang ramai' },
        { value: 3, label: 'Ramai moderat (dekat kantor dan sekolah)' },
        { value: 4, label: 'Ramai' },
        { value: 5, label: 'Sangat ramai' },
      ],
    },
  ],
  // Skor >= ambang adalah LAYAK, di bawahnya TIDAK_LAYAK
  feasibilityThreshold: 65.0,
};

// Aturan penilaian:
//  HIGHER_BETTER      : 0 poin jika nilai >= warnThreshold; 50 jika highThreshold <= nilai < warnThreshold; 100 jika nilai < highThreshold
//  LOWER_BETTER       : 0 poin jika nilai <= warnThreshold; 50 jika warnThreshold < nilai <= highThreshold; 100 jika nilai > highThreshold
//  COUNT_HIGHER_WORSE : (aturan tren) 0 poin jika jumlah < warnThreshold; 50 jika warnThreshold <= jumlah < highThreshold; 100 jika jumlah >= highThreshold
const financialParameters = {
  rules: [
    { key: 'CR', group: 'LIQUIDITY', weight: 0.15, direction: 'HIGHER_BETTER', warnThreshold: 1.5, highThreshold: 1.0 },
    { key: 'QR', group: 'LIQUIDITY', weight: 0.15, direction: 'HIGHER_BETTER', warnThreshold: 1.0, highThreshold: 0.7 },
    { key: 'NPM', group: 'PROFITABILITY', weight: 0.20, direction: 'HIGHER_BETTER', warnThreshold: 0.05, highThreshold: 0.0 },
    { key: 'GPM', group: 'PROFITABILITY', weight: 0.10, direction: 'HIGHER_BETTER', warnThreshold: 0.30, highThreshold: 0.15 },
    { key: 'DAR', group: 'SOLVENCY', weight: 0.10, direction: 'LOWER_BETTER', warnThreshold: 0.5, highThreshold: 0.7 },
    { key: 'DER', group: 'SOLVENCY', weight: 0.15, direction: 'LOWER_BETTER', warnThreshold: 1.0, highThreshold: 2.0 },
    { key: 'REVENUE_TREND', group: 'TREND', weight: 0.05, direction: 'COUNT_HIGHER_WORSE', warnThreshold: 1, highThreshold: 2 },
    { key: 'LOSS_TREND', group: 'TREND', weight: 0.10, direction: 'COUNT_HIGHER_WORSE', warnThreshold: 1, highThreshold: 2 },
  ],
  // minIndex inklusif, maxIndex eksklusif (kecuali level terakhir: 100 inklusif)
  levels: [
    { label: 'SEHAT', minIndex: 0, maxIndex: 34 },
    { label: 'WASPADA', minIndex: 34, maxIndex: 67 },
    { label: 'RISIKO_TINGGI', minIndex: 67, maxIndex: 100 },
  ],
  minPeriodsForTrend: 3,
  minWeightCoverage: 0.5,
};

// ----------------------------------------------------------------------------
// Validasi konfigurasi
// ----------------------------------------------------------------------------

function assertWeightsSumToOne(name: string, weights: number[]): void {
  const sum = weights.reduce((a, b) => a + b, 0);
  if (Math.abs(sum - 1) > 0.001) {
    throw new Error(`Konfigurasi ${name} tidak valid: jumlah bobot = ${sum}, seharusnya 1`);
  }
}

function toJson(value: unknown): Prisma.InputJsonValue {
  return value as Prisma.InputJsonValue;
}

async function seedAdmin(): Promise<void> {
  const email = (process.env.SEED_ADMIN_EMAIL ?? '').toLowerCase().trim();
  const password = process.env.SEED_ADMIN_PASSWORD;
  const name = process.env.SEED_ADMIN_NAME ?? 'Admin NEXUM';
  if (!email || !password) {
    throw new Error('SEED_ADMIN_EMAIL dan SEED_ADMIN_PASSWORD wajib diisi di .env');
  }
  const passwordHash = await bcrypt.hash(password, 12);
  await prisma.user.upsert({
    where: { email },
    update: {}, // jangan menimpa akun Admin yang sudah ada
    create: { name, email, passwordHash, role: 'ADMIN', isActive: true },
  });
  console.log(`Admin siap: ${email}`);
}

async function seedConfig(module: 'LOCATION' | 'FINANCIAL', parameters: unknown, note: string): Promise<void> {
  await prisma.analysisConfig.upsert({
    where: { module_versionNumber: { module, versionNumber: 1 } },
    update: {},
    create: {
      module,
      versionNumber: 1,
      isActive: true,
      parameters: toJson(parameters),
      note,
      activatedAt: new Date(),
    },
  });
  console.log(`Konfigurasi ${module} v1 siap`);
}

async function main(): Promise<void> {
  assertWeightsSumToOne('LOCATION', locationParameters.indicators.map((i) => i.weight));
  assertWeightsSumToOne('FINANCIAL', financialParameters.rules.map((r) => r.weight));

  await seedAdmin();
  await seedConfig('LOCATION', locationParameters, 'Konfigurasi awal (seeder)');
  await seedConfig('FINANCIAL', financialParameters, 'Konfigurasi awal (seeder)');
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
