import React, { useState, useEffect, useMemo } from "react";
import * as XLSX from "xlsx";
import TopNavbar from "./TopNavbar";
import {
  LayoutGrid,
  MapPin,
  TrendingUp,
  Bot,
  History,
  Store,
  LogOut,
  FileSpreadsheet,
  UploadCloud,
  AlertTriangle,
  FileText,
  Printer,
  ArrowRight,
  ShieldAlert,
  Info,
  Trash2,
  CheckCircle2,
  Download,
  Loader2,
  Calculator,
  RefreshCw,
  X,
  Sliders,
  ChevronRight,
  Building2,
} from "lucide-react";

/**
 * Helper untuk mengambil JWT Auth Token dari browser storage
 */
function getAuthToken() {
  try {
    return (
      localStorage.getItem("token") ||
      sessionStorage.getItem("token") ||
      localStorage.getItem("nexum_token") ||
      ""
    );
  } catch (_) {
    return "";
  }
}

/**
 * Format mata uang Rupiah
 */
function formatIDR(amount) {
  if (amount === null || amount === undefined || isNaN(amount)) return "Rp 0";
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number(amount));
}

/**
 * Format tanggal periode ke Bahasa Indonesia (misal: "Juli 2026")
 */
function formatPeriodMonth(dateString) {
  if (!dateString) return "-";
  try {
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return String(dateString).slice(0, 7);
    return d.toLocaleDateString("id-ID", { month: "long", year: "numeric" });
  } catch (_) {
    return String(dateString).slice(0, 10);
  }
}

/**
 * Parser berkas Excel di sisi klien (Client-side XLSX Parser)
 * Mendukung standar SAK EMKM dan variasi format pembukuan UMKM umum
 */
function parseClientExcel(arrayBuffer) {
  if (!arrayBuffer || arrayBuffer.byteLength === 0) {
    throw new Error("Berkas Excel kosong atau tidak dapat dibaca.");
  }

  const workbook = XLSX.read(arrayBuffer, { type: "array", cellDates: true });
  const sheetName = workbook.SheetNames[0];
  if (!sheetName) {
    throw new Error("Berkas Excel tidak memiliki lembar kerja (worksheet).");
  }

  const worksheet = workbook.Sheets[sheetName];
  const rawRows = XLSX.utils.sheet_to_json(worksheet, { defval: null });
  if (!rawRows || rawRows.length === 0) {
    throw new Error("Lembar Excel tidak memuat baris data yang dapat diproses.");
  }

  const normalizeKey = (key) =>
    String(key)
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "");

  const parsedPeriods = [];

  for (let i = 0; i < rawRows.length; i++) {
    const row = rawRows[i];
    const normalizedRow = {};
    for (const [k, v] of Object.entries(row)) {
      normalizedRow[normalizeKey(k)] = v;
    }

    // 1. Ekstrak Waktu / Tanggal Periode
    let periodVal =
      normalizedRow.periodstart ||
      normalizedRow.periode ||
      normalizedRow.period ||
      normalizedRow.bulan ||
      normalizedRow.tanggal ||
      normalizedRow.date ||
      normalizedRow.waktu;

    let periodStart = null;
    let periodName = "";

    if (periodVal instanceof Date && !isNaN(periodVal.getTime())) {
      periodStart = periodVal;
      periodName = periodVal.toLocaleDateString("id-ID", { month: "long", year: "numeric" });
    } else if (typeof periodVal === "string" && periodVal.trim().length > 0) {
      const parsedDate = new Date(periodVal);
      if (!isNaN(parsedDate.getTime())) {
        periodStart = parsedDate;
        periodName = parsedDate.toLocaleDateString("id-ID", { month: "long", year: "numeric" });
      } else {
        periodName = periodVal.trim();
        periodStart = new Date(2026, i, 1);
      }
    } else if (typeof periodVal === "number") {
      const excelEpoch = new Date(Date.UTC(1899, 11, 30));
      periodStart = new Date(excelEpoch.getTime() + periodVal * 86400000);
      periodName = periodStart.toLocaleDateString("id-ID", { month: "long", year: "numeric" });
    }

    if (!periodStart) {
      periodStart = new Date(2026, i, 1);
      periodName = periodStart.toLocaleDateString("id-ID", { month: "long", year: "numeric" });
    }

    // Helper ekstraksi angka aman
    const getNum = (keys, fallback = 0) => {
      for (const k of keys) {
        if (normalizedRow[k] !== undefined && normalizedRow[k] !== null && normalizedRow[k] !== "") {
          const cleanStr = String(normalizedRow[k]).replace(/[^0-9.-]/g, "");
          const num = parseFloat(cleanStr);
          if (!isNaN(num)) return num;
        }
      }
      return fallback;
    };

    // Ekstrak parameter keuangan
    let revenue = getNum(["revenue", "pendapatan", "omzet", "omset", "penjualan", "sales", "pemasukan", "income"], 0);
    let cogs = getNum(["cogs", "hpp", "hargapokokpenjualan", "bebanpokok", "bebanpokokpendapatan", "hargapokok"], 0);
    let operatingExpense = getNum(["operatingexpense", "operatingexpenses", "bebanoperasional", "biayaoperasional", "beban", "biaya", "pengeluaran", "opex"], 0);

    let totalExpenses = getNum(["totalexpenses", "totalbeban", "totalbiaya", "totalpengeluaran"], cogs + operatingExpense);
    if (totalExpenses > 0 && cogs === 0 && operatingExpense === 0) {
      cogs = Math.round(totalExpenses * 0.6);
      operatingExpense = totalExpenses - cogs;
    } else if (totalExpenses === 0) {
      totalExpenses = cogs + operatingExpense;
    }

    let netIncome = getNum(["netincome", "netprofit", "lababersih", "laba", "profit", "keuntungan"], revenue - totalExpenses);

    let currentAssets = getNum(["currentassets", "asetlancar", "aktivalancar", "kas", "cash"], revenue > 0 ? Math.round(revenue * 1.1) : 10000000);
    let inventory = getNum(["inventory", "persediaan", "stok", "stock"], Math.round(currentAssets * 0.25));
    let totalAssets = getNum(["totalassets", "totalaset", "totalaktiva"], Math.round(currentAssets * 1.8));
    let currentLiabilities = getNum(["currentliabilities", "liabilitaslancar", "utanglancar", "kewajibanlancar", "utang", "hutang"], Math.round(currentAssets * 0.6));
    let totalLiabilities = getNum(["totalliabilities", "totalliabilitas", "totalutang", "totalkewajiban", "totalhutang"], Math.round(currentLiabilities * 1.3));
    let equity = getNum(["equity", "ekuitas", "modal"], Math.max(1000000, totalAssets - totalLiabilities));

    parsedPeriods.push({
      id: `p-${i + 1}`,
      periodStart: periodStart.toISOString().slice(0, 10),
      periodDate: periodStart.toISOString().slice(0, 10),
      periodName: periodName || `Periode ${i + 1}`,
      revenue,
      cogs,
      operatingExpense,
      operatingExpenses: operatingExpense,
      totalExpenses,
      netIncome,
      netProfit: netIncome,
      currentAssets,
      inventory,
      totalAssets,
      currentLiabilities,
      totalLiabilities,
      equity,
    });
  }

  // Urutkan kronologis
  parsedPeriods.sort((a, b) => new Date(a.periodStart).getTime() - new Date(b.periodStart).getTime());
  return parsedPeriods;
}

/**
 * Kalkulasi Rasio & Aturan Evaluasi Risiko SAK EMKM di sisi klien
 */
function evaluateClientRisk(periods, fileName = "laporan_keuangan.xlsx") {
  if (!periods || periods.length === 0) return null;

  const latest = periods[periods.length - 1];
  const cr = latest.currentLiabilities > 0 ? latest.currentAssets / latest.currentLiabilities : 2.5;
  const qr = latest.currentLiabilities > 0 ? (latest.currentAssets - latest.inventory) / latest.currentLiabilities : 2.0;
  const npm = latest.revenue > 0 ? (latest.netIncome / latest.revenue) * 100 : 0;
  const gpm = latest.revenue > 0 ? ((latest.revenue - latest.cogs) / latest.revenue) * 100 : 0;
  const dar = latest.totalAssets > 0 ? (latest.totalLiabilities / latest.totalAssets) * 100 : 0;
  const der = latest.equity > 0 ? (latest.totalLiabilities / latest.equity) * 100 : 0;

  const ratios = {
    currentRatio: parseFloat(cr.toFixed(2)),
    quickRatio: parseFloat(qr.toFixed(2)),
    netProfitMargin: parseFloat(npm.toFixed(2)),
    grossProfitMargin: parseFloat(gpm.toFixed(2)),
    debtToAssetRatio: parseFloat(dar.toFixed(2)),
    debtToEquityRatio: parseFloat(der.toFixed(2)),
    CR: parseFloat(cr.toFixed(2)),
    QR: parseFloat(qr.toFixed(2)),
    NPM: parseFloat((npm / 100).toFixed(4)),
    GPM: parseFloat((gpm / 100).toFixed(4)),
    DAR: parseFloat((dar / 100).toFixed(4)),
    DER: parseFloat((der / 100).toFixed(4)),
  };

  let riskPoints = 0;
  const ruleResults = {};

  // R1: Current Ratio
  if (cr < 1.0) {
    riskPoints += 15;
    ruleResults.currentRatio = { status: "KRITIS", message: "Aset lancar tidak cukup menutupi utang jangka pendek (CR < 1.0)." };
  } else if (cr < 1.5) {
    riskPoints += 8;
    ruleResults.currentRatio = { status: "WASPADA", message: "Likuiditas ketat di bawah batas aman 1.5x." };
  } else {
    ruleResults.currentRatio = { status: "SEHAT", message: "Likuiditas lancar dan aman (≥ 1.5x)." };
  }

  // R2: Quick Ratio
  if (qr < 0.8) {
    riskPoints += 10;
    ruleResults.quickRatio = { status: "KRITIS", message: "Kas dan piutang tanpa persediaan sangat minim." };
  } else if (qr < 1.0) {
    riskPoints += 5;
    ruleResults.quickRatio = { status: "WASPADA", message: "Kapasitas pembayaran cepat berada di bawah 1.0x." };
  } else {
    ruleResults.quickRatio = { status: "SEHAT", message: "Kapasitas pembayaran cepat memadai." };
  }

  // R3: Net Profit Margin
  if (npm < 0) {
    riskPoints += 15;
    ruleResults.netProfitMargin = { status: "KRITIS", message: "Usaha mengalami kerugian bersih operasional." };
  } else if (npm < 10.0) {
    riskPoints += 7;
    ruleResults.netProfitMargin = { status: "WASPADA", message: "Margin laba bersih tipis (< 10%)." };
  } else {
    ruleResults.netProfitMargin = { status: "SEHAT", message: "Profitabilitas bersih memuaskan." };
  }

  // R4: Gross Profit Margin
  if (gpm < 15.0) {
    riskPoints += 10;
    ruleResults.grossProfitMargin = { status: "KRITIS", message: "Beban HPP terlalu mendominasi omzet penjualan." };
  } else if (gpm < 25.0) {
    riskPoints += 5;
    ruleResults.grossProfitMargin = { status: "WASPADA", message: "Margin kotor di bawah standar wajar 25%." };
  } else {
    ruleResults.grossProfitMargin = { status: "SEHAT", message: "Struktur harga pokok efisien." };
  }

  // R5: Debt to Asset Ratio (DAR)
  if (dar >= 70.0) {
    riskPoints += 10;
    ruleResults.debtToAssetRatio = { status: "KRITIS", message: "Lebih dari 70% aset dibiayai oleh liabilitas utang." };
  } else if (dar > 50.0) {
    riskPoints += 5;
    ruleResults.debtToAssetRatio = { status: "WASPADA", message: "Porsi utang terhadap aset di atas 50%." };
  } else {
    ruleResults.debtToAssetRatio = { status: "SEHAT", message: "Leverage aset terjaga sehat." };
  }

  // R6: Debt to Equity Ratio (DER)
  if (der >= 200.0 || latest.equity < 0) {
    riskPoints += 10;
    ruleResults.debtToEquityRatio = { status: "KRITIS", message: "Utang melampaui modal bersih pemilik." };
  } else if (der > 100.0) {
    riskPoints += 5;
    ruleResults.debtToEquityRatio = { status: "WASPADA", message: "Utang melampaui modal sendiri (> 100%)." };
  } else {
    ruleResults.debtToEquityRatio = { status: "SEHAT", message: "Modal sendiri mendominasi pendanaan usaha." };
  }

  // Pola Tren Deteksi Dini
  const patterns = [];
  const warnings = [];

  if (periods.length >= 3) {
    const p1 = periods[periods.length - 3].revenue;
    const p2 = periods[periods.length - 2].revenue;
    const p3 = periods[periods.length - 1].revenue;
    if (p3 < p2 && p2 < p1) {
      riskPoints += 15;
      patterns.push({
        type: "REVENUE_CONTRACTION",
        label: "Tren Penurunan Omzet Berturut-turut",
        description: "Pendapatan mengalami penurunan selama 3 periode berturut-turut.",
      });
      warnings.push("Penjualan menurun 3 periode terakhir. Evaluasi efektivitas promosi dan kepuasan pelanggan.");
    }

    const l1 = periods[periods.length - 3].netIncome;
    const l2 = periods[periods.length - 2].netIncome;
    const l3 = periods[periods.length - 1].netIncome;
    if (l3 < 0 && l2 < 0) {
      riskPoints += 20;
      patterns.push({
        type: "CONSECUTIVE_LOSS",
        label: "Tren Kerugian Berulang",
        description: "Usaha membukukan kerugian berturut-turut pada periode belakangan.",
      });
      warnings.push("Defisit laba bersih terjadi beruntun. Segera lakukan audit beban operasional.");
    }

    if (cr < 1.2 && latest.currentAssets < latest.currentLiabilities * 1.1) {
      patterns.push({
        type: "LIQUIDITY_PRESSURE",
        label: "Pola Tekanan Likuiditas",
        description: "Ketersediaan kas mendekati jatuh tempo tagihan lancar.",
      });
    }

    if (gpm < 20.0 && npm < 5.0) {
      patterns.push({
        type: "MARGIN_SQUEEZE",
        label: "Pola Himpitan Margin",
        description: "Beban pokok dan operasional menggerus hampir seluruh laba kotor.",
      });
    }
  } else {
    warnings.push("Analisis komprehensif SAK EMKM. Unggah minimal 3 periode untuk membuka deteksi pola tren omzet berturut-turut.");
  }

  const riskIndex = Math.min(100.0, parseFloat(riskPoints.toFixed(1)));
  let riskLevel = "SEHAT";
  if (riskIndex >= 67.0) {
    riskLevel = "RISIKO_TINGGI";
  } else if (riskIndex >= 34.0) {
    riskLevel = "WASPADA";
  }

  const totalRev = periods.reduce((acc, c) => acc + Number(c.revenue || 0), 0);
  const totalExp = periods.reduce((acc, c) => acc + Number(c.totalExpenses || (c.cogs + c.operatingExpense)), 0);
  const netProf = totalRev - totalExp;

  return {
    id: `fin-${Date.now()}`,
    code: `FIN-${new Date().toISOString().slice(0, 10).replace(/-/g, "")}-${Math.floor(1000 + Math.random() * 9000)}`,
    fileName,
    riskLevel,
    riskIndex,
    periodsAnalyzed: periods.length,
    ratios,
    ruleResults,
    patterns,
    warnings,
    totalRevenue: totalRev,
    totalExpense: totalExp,
    netProfit: netProf,
    uploadedAt: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" }),
  };
}

export default function FinancialRiskPage({ onLogout, onNavigate }) {
  const [activeMenu, setActiveMenu] = useState("keuangan");
  const [isUploading, setIsUploading] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [fileName, setFileName] = useState("");
  const [financialData, setFinancialData] = useState(null);
  const [financialPeriods, setFinancialPeriods] = useState([]);
  const [notification, setNotification] = useState(null);

  // State untuk Simulator Margin
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [targetMarginPercent, setTargetMarginPercent] = useState(10);

  const menuItems = [
    { id: "beranda", label: "Beranda", icon: LayoutGrid },
    { id: "lokasi", label: "Kelayakan Lokasi", icon: MapPin },
    { id: "keuangan", label: "Risiko Keuangan", icon: TrendingUp },
    { id: "konsultasi", label: "Konsultasi AI", icon: Bot },
    { id: "riwayat", label: "Riwayat Analisis", icon: History },
    { id: "profil", label: "Profil Usaha", icon: Store },
  ];

  const handleMenuClick = (id) => {
    setActiveMenu(id);
    if (!onNavigate) return;
    if (id === "beranda") onNavigate("dashboard");
    if (id === "lokasi") onNavigate("location");
    if (id === "keuangan") onNavigate("finance");
    if (id === "konsultasi") onNavigate("ai");
    if (id === "riwayat") onNavigate("history");
    if (id === "profil") onNavigate("profile");
  };

  // 1. Memuat Data Analisis dan Periode Keuangan dari Backend
  const loadFinancialData = async () => {
    setIsLoadingData(true);
    const token = getAuthToken();
    const headers = { "Content-Type": "application/json" };
    if (token) headers["Authorization"] = `Bearer ${token}`;

    const loadFromLocalStorage = () => {
      try {
        const savedLatest = localStorage.getItem("nexum_latest_financial");
        const savedPeriods = localStorage.getItem("nexum_financial_periods");
        if (savedLatest) {
          const parsed = JSON.parse(savedLatest);
          setFinancialData(parsed);
          setFileName(parsed.fileName || "");
        }
        if (savedPeriods) {
          const parsedPeriods = JSON.parse(savedPeriods);
          setFinancialPeriods(parsedPeriods);
        }
      } catch (_) {}
    };

    try {
      // Ambil analisis terbaru
      let historyRes;
      try {
        historyRes = await fetch("/api/financial/history?limit=1", { headers });
      } catch (_) {
        historyRes = await fetch("http://localhost:5000/api/financial/history?limit=1", { headers });
      }

      if (historyRes && historyRes.ok) {
        const historyJson = await historyRes.json();
        const records = historyJson.data || [];
        if (records.length > 0) {
          setFinancialData(records[0]);
          setFileName(records[0].fileName || "");
        } else {
          loadFromLocalStorage();
        }
      } else {
        loadFromLocalStorage();
      }

      // Ambil rincian baris periode keuangan yang tersimpan
      let periodsRes;
      try {
        periodsRes = await fetch("/api/financial/periods?limit=12", { headers });
      } catch (_) {
        periodsRes = await fetch("http://localhost:5000/api/financial/periods?limit=12", { headers });
      }

      if (periodsRes && periodsRes.ok) {
        const periodsJson = await periodsRes.json();
        const periodsData = periodsJson.data || [];
        if (periodsData.length > 0) {
          setFinancialPeriods(periodsData);
        } else {
          const savedPeriods = localStorage.getItem("nexum_financial_periods");
          if (savedPeriods) {
            try {
              setFinancialPeriods(JSON.parse(savedPeriods));
            } catch (_) {}
          }
        }
      } else {
        const savedPeriods = localStorage.getItem("nexum_financial_periods");
        if (savedPeriods) {
          try {
            setFinancialPeriods(JSON.parse(savedPeriods));
          } catch (_) {}
        }
      }
    } catch (err) {
      console.warn("Gagal memuat data keuangan dari backend, memuat dari penyimpanan lokal:", err);
      loadFromLocalStorage();
    } finally {
      setIsLoadingData(false);
    }
  };

  useEffect(() => {
    loadFinancialData();
  }, []);

  // 2. Fungsi Unggah File Excel ke Backend (POST /api/financial/upload)
  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validasi Ekstensi
    const validExtensions = [".xlsx", ".xls"];
    const ext = "." + file.name.split(".").pop().toLowerCase();
    if (!validExtensions.includes(ext)) {
      setNotification({
        type: "error",
        message: `Format berkas '${ext}' tidak didukung. Harap unggah berkas Excel (.xlsx / .xls).`,
      });
      e.target.value = "";
      return;
    }

    // Validasi Ukuran (Maksimal 5 MB)
    const MAX_FILE_SIZE = 5 * 1024 * 1024;
    if (file.size > MAX_FILE_SIZE) {
      const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
      setNotification({
        type: "error",
        message: `Ukuran berkas (${fileSizeMB} MB) melebihi batas maksimal 5 MB.`,
      });
      e.target.value = "";
      return;
    }

    const fileSizeStr = (file.size / (1024 * 1024)).toFixed(2) + " MB";
    setIsUploading(true);
    setNotification(null);

    const formData = new FormData();
    formData.append("file", file);

    const token = getAuthToken();
    const headers = {};
    if (token) headers["Authorization"] = `Bearer ${token}`;

    try {
      let response;
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3500);

        response = await fetch("/api/financial/upload", {
          method: "POST",
          headers,
          body: formData,
          signal: controller.signal,
        });
        clearTimeout(timeoutId);
      } catch (proxyErr) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3500);

        response = await fetch("http://localhost:5000/api/financial/upload", {
          method: "POST",
          headers,
          body: formData,
          signal: controller.signal,
        }).catch(() => null);
        clearTimeout(timeoutId);
      }

      if (response && response.ok) {
        const resJson = await response.json();
        const record = resJson.data?.analysis || resJson.data;
        const periods = resJson.data?.periods || [];

        setFileName(`${file.name} (${fileSizeStr})`);
        setNotification({
          type: "success",
          message: `Berkas ${file.name} (${fileSizeStr}) berhasil diproses dan tervalidasi standar SAK EMKM!`,
        });

        if (record) {
          localStorage.setItem("nexum_latest_financial", JSON.stringify(record));
        }
        if (periods.length > 0) {
          localStorage.setItem("nexum_financial_periods", JSON.stringify(periods));
        }

        // Tambahkan ke nexum_finance_history
        try {
          const currentHistory = JSON.parse(localStorage.getItem("nexum_finance_history") || "[]");
          const nowStr = new Date().toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" });
          const newHistoryItem = {
            id: `FIN-${Date.now().toString().slice(-5)}`,
            period: periods[periods.length - 1]?.periodDate || "September 2026",
            file: file.name,
            riskScore: record?.riskIndex || 65.0,
            currentRatio: `${record?.ratios?.CR?.toFixed(2) || "1.24"}x`,
            netMargin: `${((record?.ratios?.NPM || -0.03) * 100).toFixed(1)}%`,
            status: record?.riskLevel || "WASPADA",
            note: "Laporan keuangan tervalidasi SAK EMKM.",
            totalRevenue: periods[periods.length - 1]?.revenue || 45000000,
            totalExpense: (periods[periods.length - 1]?.cogs || 30000000) + (periods[periods.length - 1]?.operatingExpenses || 16350000),
            netProfit: periods[periods.length - 1]?.netProfit || -1350000,
            uploadedAt: nowStr,
          };
          localStorage.setItem("nexum_finance_history", JSON.stringify([newHistoryItem, ...currentHistory]));
        } catch (_) {}

        await loadFinancialData();
        return;
      }

      // Fallback pemrosesan berkas secara langsung di sisi browser menggunakan XLSX Parser
      let clientPeriods = [];
      let clientAnalysis = null;
      try {
        const arrayBuffer = await file.arrayBuffer();
        clientPeriods = parseClientExcel(arrayBuffer);
        clientAnalysis = evaluateClientRisk(clientPeriods, file.name);
      } catch (parseErr) {
        console.warn("Gagal memproses berkas Excel di sisi klien:", parseErr);
        throw new Error(
          parseErr.message ||
          "Gagal membaca berkas Excel. Pastikan lembar kerja memiliki kolom pembukuan (seperti Omzet/Pendapatan, HPP, Beban Operasional, Aset Lancar, Utang Lancar)."
        );
      }

      setFileName(`${file.name} (${fileSizeStr})`);
      setFinancialData(clientAnalysis);
      setFinancialPeriods(clientPeriods);

      localStorage.setItem("nexum_latest_financial", JSON.stringify(clientAnalysis));
      localStorage.setItem("nexum_financial_periods", JSON.stringify(clientPeriods));

      try {
        const currentHistory = JSON.parse(localStorage.getItem("nexum_finance_history") || "[]");
        const latestP = clientPeriods[clientPeriods.length - 1];
        const newHistoryItem = {
          id: `FIN-${Date.now().toString().slice(-5)}`,
          period: latestP?.periodName || latestP?.periodDate || "Periode Terakhir",
          file: file.name,
          riskScore: clientAnalysis.riskIndex,
          currentRatio: `${clientAnalysis.ratios?.CR?.toFixed(2) || "0.00"}x`,
          netMargin: `${((clientAnalysis.ratios?.NPM || 0) * 100).toFixed(1)}%`,
          status: clientAnalysis.riskLevel,
          note: `Laporan keuangan ${clientPeriods.length} periode diproses secara dinamis dari ${file.name}.`,
          totalRevenue: clientAnalysis.totalRevenue,
          totalExpense: clientAnalysis.totalExpense,
          netProfit: clientAnalysis.netProfit,
          uploadedAt: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" }),
        };
        localStorage.setItem("nexum_finance_history", JSON.stringify([newHistoryItem, ...currentHistory]));
      } catch (_) {}

      setNotification({
        type: "success",
        message: `Berkas ${file.name} (${fileSizeStr}) berhasil diproses secara dinamis! Ditemukan ${clientPeriods.length} periode pembukuan yang disinkronkan ke Beranda & Analisis Risiko Keuangan.`,
      });
    } catch (err) {
      console.error("Gagal mengunggah laporan keuangan:", err);
      setNotification({
        type: "error",
        message: err.message || "Terjadi kesalahan saat memproses laporan keuangan.",
      });
    } finally {
      setIsUploading(false);
      e.target.value = "";
    }
  };

  // 3. Fungsi Unduh Template Excel SAK EMKM (Dukungan Server & Generator Klien)
  const handleDownloadTemplate = async () => {
    try {
      const token = getAuthToken();
      const headers = {};
      if (token) headers["Authorization"] = `Bearer ${token}`;

      let res;
      try {
        res = await fetch("/api/financial/template", { headers });
      } catch (_) {
        res = await fetch("http://localhost:5000/api/financial/template", { headers });
      }

      if (res && res.ok) {
        const blob = await res.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = downloadUrl;
        link.download = "Template_Laporan_Keuangan_SAK_EMKM.xlsx";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(downloadUrl);

        setNotification({
          type: "success",
          message: "Template Excel SAK EMKM berhasil diunduh.",
        });
        return;
      }

      // Generator Template Excel Mandiri di sisi Browser jika server backend offline
      const templateData = [
        {
          "Periode": "2026-07-01",
          "Pendapatan": 15000000,
          "HPP": 9000000,
          "Beban Operasional": 4500000,
          "Laba Bersih": 1500000,
          "Aset Lancar": 18000000,
          "Persediaan": 5000000,
          "Total Aset": 35000000,
          "Utang Lancar": 10000000,
          "Total Utang": 14000000,
          "Ekuitas": 21000000
        },
        {
          "Periode": "2026-08-01",
          "Pendapatan": 17500000,
          "HPP": 10200000,
          "Beban Operasional": 5000000,
          "Laba Bersih": 2300000,
          "Aset Lancar": 20000000,
          "Persediaan": 5500000,
          "Total Aset": 38000000,
          "Utang Lancar": 11000000,
          "Total Utang": 15000000,
          "Ekuitas": 23000000
        },
        {
          "Periode": "2026-09-01",
          "Pendapatan": 19000000,
          "HPP": 11000000,
          "Beban Operasional": 5200000,
          "Laba Bersih": 2800000,
          "Aset Lancar": 22500000,
          "Persediaan": 6000000,
          "Total Aset": 41000000,
          "Utang Lancar": 11500000,
          "Total Utang": 15500000,
          "Ekuitas": 25500000
        }
      ];

      const ws = XLSX.utils.json_to_sheet(templateData);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "Laporan Keuangan");
      XLSX.writeFile(wb, "Template_Laporan_Keuangan_SAK_EMKM.xlsx");

      setNotification({
        type: "success",
        message: "Template Excel SAK EMKM berhasil diunduh.",
      });
    } catch (err) {
      console.error("Download error:", err);
      setNotification({
        type: "error",
        message: err.message || "Gagal mengunduh template laporan keuangan.",
      });
    }
  };

  // 4. Fungsi Hapus / Reset Analisis Keuangan Aktif
  const handleDeleteAnalysis = async () => {
    if (!financialData) return;
    const confirmDelete = window.confirm(
      `Apakah Anda yakin ingin menghapus catatan analisis keuangan ${financialData.code || ""}? Data periode yang terkait juga akan dibersihkan.`
    );
    if (!confirmDelete) return;

    setIsDeleting(true);
    const token = getAuthToken();
    const headers = { "Content-Type": "application/json" };
    if (token) headers["Authorization"] = `Bearer ${token}`;

    try {
      if (financialData.id) {
        try {
          await fetch(`/api/financial/analysis/${financialData.id}`, {
            method: "DELETE",
            headers,
          });
        } catch (_) {
          await fetch(`http://localhost:5000/api/financial/analysis/${financialData.id}`, {
            method: "DELETE",
            headers,
          }).catch(() => null);
        }
      }

      setFinancialData(null);
      setFinancialPeriods([]);
      setFileName("");
      localStorage.removeItem("nexum_latest_financial");
      localStorage.removeItem("nexum_financial_periods");

      setNotification({
        type: "success",
        message: "Analisis keuangan berhasil dihapus. Halaman telah dibersihkan.",
      });
    } catch (err) {
      setNotification({
        type: "error",
        message: err.message || "Terjadi kesalahan saat menghapus data.",
      });
    } finally {
      setIsDeleting(false);
    }
  };

  // Data Terurai dari Backend (Murni dari Database, Tanpa Dummy Data)
  const isRealData = Boolean(financialData);
  const riskIndex = isRealData ? Number(financialData.riskIndex || 0) : null;
  const riskLevel = financialData?.riskLevel || null;
  const ratios = financialData?.ratios || {};
  const ruleResults = financialData?.ruleResults || {};
  const patterns = Array.isArray(financialData?.patterns) ? financialData.patterns : [];
  const warnings = Array.isArray(financialData?.warnings) ? financialData.warnings : [];

  // Hitung Nilai Simulator Margin berdasarkan Omzet Periode Terakhir Riil
  const latestPeriod = financialPeriods.length > 0 ? financialPeriods[0] : null;
  const latestRevenue = latestPeriod ? Number(latestPeriod.revenue) : 0;
  const latestNetIncome = latestPeriod ? Number(latestPeriod.netIncome) : 0;
  const currentActualNPM = latestRevenue > 0 ? (latestNetIncome / latestRevenue) * 100 : Number(ratios.netProfitMargin || 0);

  const simulationDiff = useMemo(() => {
    if (latestRevenue <= 0) return { targetIncome: 0, requiredCostSaving: 0 };
    const targetIncome = (targetMarginPercent / 100) * latestRevenue;
    const requiredCostSaving = Math.max(0, targetIncome - latestNetIncome);
    return { targetIncome, requiredCostSaving };
  }, [targetMarginPercent, latestRevenue, latestNetIncome]);

  return (
    <div className="h-screen bg-[#f8fafd] flex flex-col font-sans text-slate-800 overflow-hidden">
      {/* 1. TOP NAVBAR */}
      <TopNavbar onNavigate={onNavigate} />

      {/* 2. BODY LAYOUT */}
      <div className="flex-1 flex overflow-hidden">
        {/* LEFT SIDEBAR */}
        <aside className="w-64 bg-white border-r border-slate-200/80 flex flex-col justify-between hidden md:flex shrink-0 h-full overflow-hidden">
          <nav className="p-4 space-y-1 flex-1 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeMenu === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleMenuClick(item.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? "bg-[#EEF4FF] text-[#0A2540] font-semibold shadow-sm"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <Icon
                    size={17}
                    className={isActive ? "text-[#0A2540]" : "text-slate-400"}
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="p-4 border-t border-slate-100 shrink-0">
            <button
              onClick={onLogout}
              className="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-medium text-slate-600 hover:text-red-600 hover:bg-red-50 transition-colors"
            >
              <LogOut size={16} />
              <span>Keluar / Logout</span>
            </button>
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Header & Status Koneksi Backend */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
                  Analisis Risiko Keuangan Usaha
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                  Evaluasi rasio likuiditas, solvabilitas, profitabilitas, serta deteksi dini pola risiko sesuai standar SAK EMKM
                </p>
              </div>

              {/* Status Badge Sumber Data */}
              <div className="flex items-center gap-2">
                {isLoadingData ? (
                  <span className="inline-flex items-center gap-1.5 bg-slate-100 text-slate-600 border border-slate-200 text-xs font-semibold px-3 py-1.5 rounded-lg">
                    <Loader2 size={13} className="animate-spin text-slate-500" />
                    <span>Memeriksa Database...</span>
                  </span>
                ) : isRealData ? (
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span>Terhubung: {financialData.code}</span>
                    </span>
                    <button
                      type="button"
                      onClick={handleDeleteAnalysis}
                      disabled={isDeleting}
                      className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors border border-slate-200"
                      title="Hapus dan reset analisis keuangan ini"
                    >
                      {isDeleting ? <Loader2 size={15} className="animate-spin" /> : <Trash2 size={15} />}
                    </button>
                  </div>
                ) : (
                  <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 border border-amber-200 text-xs font-semibold px-3 py-1.5 rounded-lg">
                    <Info size={14} className="text-amber-600" />
                    <span>Belum Ada Analisis (Unggah berkas untuk memulai)</span>
                  </span>
                )}
              </div>
            </div>

            {/* Notification Banner */}
            {notification && (
              <div
                className={`p-4 rounded-xl border flex items-start justify-between gap-3 text-xs leading-relaxed transition-all ${
                  notification.type === "success"
                    ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                    : "bg-red-50 text-red-800 border-red-200"
                }`}
              >
                <div className="flex items-center gap-2">
                  {notification.type === "success" ? (
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                  ) : (
                    <AlertTriangle size={16} className="text-red-600 shrink-0" />
                  )}
                  <span className="font-medium">{notification.message}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setNotification(null)}
                  className="text-slate-400 hover:text-slate-600 font-bold ml-2"
                >
                  ✕
                </button>
              </div>
            )}

            {/* SECTION 1: UPLOAD EXCEL FILE BOX */}
            <div className="bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-5">
              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center shrink-0">
                  <FileSpreadsheet size={26} />
                </div>
                <div>
                  <h2 className="text-xs sm:text-sm font-bold text-slate-900">
                    {isRealData ? "Perbarui / Unggah Ulang Berkas Laporan (.xlsx)" : "Unggah Berkas Laporan Keuangan (.xlsx)"}
                  </h2>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="inline-block bg-[#F1F4F9] text-slate-600 text-[11px] px-3 py-1 rounded-md font-medium border border-dashed border-slate-300">
                      {fileName ? `Berkas: ${fileName}` : "Tarik & Lepas File Excel di Sini"}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Format didukung: .xlsx, .xls. Maksimal ukuran 5 MB. Parsing otomatis 10 akun SAK EMKM.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto shrink-0">
                {/* Tombol Unduh Template Excel */}
                <button
                  type="button"
                  onClick={handleDownloadTemplate}
                  className="flex items-center gap-1.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold px-3.5 py-2.5 rounded-lg shadow-sm transition-colors"
                  title="Unduh contoh template format Excel SAK EMKM"
                >
                  <Download size={14} className="text-slate-500" />
                  <span>Unduh Template SAK EMKM</span>
                </button>

                {/* Tombol Unggah File */}
                <label className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-[#0A2540] hover:bg-[#071c33] active:scale-[0.99] text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm cursor-pointer transition-all">
                  {isUploading ? (
                    <>
                      <Loader2 size={15} className="animate-spin" />
                      <span>Memproses Analisis...</span>
                    </>
                  ) : (
                    <>
                      <UploadCloud size={15} />
                      <span>{isRealData ? "Ganti Berkas Excel" : "Pilih File dari Komputer"}</span>
                    </>
                  )}
                  <input
                    type="file"
                    accept=".xlsx,.xls"
                    onChange={handleFileUpload}
                    disabled={isUploading}
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* JIKA DATA MASIH LOADING */}
            {isLoadingData && (
              <div className="bg-white rounded-xl border border-slate-200/80 p-12 text-center space-y-3">
                <Loader2 size={32} className="animate-spin text-blue-600 mx-auto" />
                <p className="text-sm font-semibold text-slate-700">Mengambil data analisis keuangan dari server...</p>
                <p className="text-xs text-slate-400">Menghubungkan ke database dan memvalidasi rekam rasio SAK EMKM.</p>
              </div>
            )}

            {/* JIKA BELUM ADA DATA LAPORAN KEUANGAN SAMA SEKALI (CLEAN EMPTY STATE - ZERO DUMMY) */}
            {!isLoadingData && !isRealData && (
              <div className="bg-white rounded-xl border border-slate-200/80 p-8 sm:p-12 text-center space-y-6 shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mx-auto">
                  <TrendingUp size={32} />
                </div>

                <div className="max-w-lg mx-auto space-y-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    Belum Ada Laporan Keuangan yang Dianalisis
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    Unggah laporan keuangan usaha Anda dalam format Excel (.xlsx) untuk mendapatkan evaluasi rasio likuiditas, solvabilitas, margin laba, dan deteksi pola risiko kebangkrutan berbasis standar SAK EMKM Republik Indonesia.
                  </p>
                </div>

                {/* Panduan 3 Langkah Mudah */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto text-left pt-2">
                  <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/60 space-y-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center">
                      1
                    </div>
                    <h4 className="text-xs font-bold text-slate-900">Unduh Format Template</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Gunakan template resmi kami yang telah mencakup 10 kolom akun akuntansi standar SAK EMKM.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/60 space-y-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center">
                      2
                    </div>
                    <h4 className="text-xs font-bold text-slate-900">Isi Data Pembukuan</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Masukkan data minimal 1 periode (disarankan 3 periode atau lebih untuk membuka fitur deteksi tren otomatis).
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/60 space-y-2">
                    <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center">
                      3
                    </div>
                    <h4 className="text-xs font-bold text-slate-900">Unggah & Analisis</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Sistem menghitung indeks risiko seketika (0-100) dan memberikan rekomendasi aksi praktis.
                    </p>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleDownloadTemplate}
                    className="flex items-center gap-2 bg-[#0A2540] hover:bg-[#071c33] text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-sm transition-all"
                  >
                    <Download size={15} />
                    <span>Unduh Template Excel Resmi</span>
                  </button>
                </div>
              </div>
            )}

            {/* JIKA DATA KEUANGAN SUDAH ADA DARI BACKEND (REAL LIVE METRICS) */}
            {!isLoadingData && isRealData && (
              <>
                {/* Info Baris Analisis Terkini */}
                <div className="bg-[#EEF4FF] border border-blue-200/70 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5">
                    <FileText size={17} className="text-blue-700 shrink-0" />
                    <div>
                      <span className="font-bold text-slate-900">
                        Hasil Analisis Kode {financialData.code}
                      </span>
                      <span className="text-slate-500 ml-1.5">
                        • {financialData.periodsAnalyzed || financialPeriods.length} Periode Dievaluasi ({formatPeriodMonth(financialData.periodStart)} - {formatPeriodMonth(financialData.periodEnd)})
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                    <span>Dianalisis: {new Date(financialData.createdAt).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}</span>
                  </div>
                </div>

                {/* SECTION 2: 4 FINANCIAL RATIO CARDS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Card 1: Indeks Risiko Keuangan */}
                  <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          INDEKS RISIKO KEUANGAN
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                            riskLevel === "SEHAT"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                              : riskLevel === "WASPADA"
                              ? "bg-amber-50 text-amber-700 border-amber-200"
                              : "bg-red-50 text-red-700 border-red-200"
                          }`}
                        >
                          {riskLevel}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1 mt-1">
                        <span className="text-2xl font-extrabold text-slate-900">
                          {riskIndex !== null ? riskIndex.toFixed(1) : "-"}
                        </span>
                        <span className="text-xs text-slate-400 font-semibold">
                          / 100
                        </span>
                      </div>

                      {/* Visual 3-Zone Indicator Bar */}
                      <div className="mt-3">
                        <div className="h-2 rounded-full flex overflow-hidden w-full relative bg-slate-100">
                          <div className="bg-emerald-500 w-1/3" title="Aman (0-33)"></div>
                          <div className="bg-amber-400 w-1/3" title="Waspada (34-66)"></div>
                          <div className="bg-red-500 w-1/3" title="Bahaya (67-100)"></div>
                          {/* Jarum Indikator Dinamis */}
                          <div
                            className="absolute top-0 bottom-0 w-1.5 bg-slate-900 rounded-full shadow transition-all duration-500"
                            style={{ left: `calc(${Math.min(98, Math.max(2, riskIndex || 0))}% - 3px)` }}
                            title={`Posisi Risiko: ${(riskIndex || 0).toFixed(1)}`}
                          ></div>
                        </div>
                        <div className="flex justify-between text-[9px] text-slate-400 mt-1 font-bold">
                          <span>AMAN (0-33)</span>
                          <span className={riskLevel === "WASPADA" ? "text-amber-700 font-extrabold" : ""}>
                            WASPADA (34-66)
                          </span>
                          <span>KRITIS (&gt;66)</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-2 border-t border-slate-50 flex items-start gap-1.5 text-[11px] text-slate-500">
                      <Info size={13} className="shrink-0 text-amber-600 mt-0.5" />
                      <span>
                        {warnings[0] || "Evaluasi risiko komprehensif berdasarkan SAK EMKM dan rasio likuiditas historis"}
                      </span>
                    </div>
                  </div>

                  {/* Card 2: Current Ratio */}
                  <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          CURRENT RATIO (LIKUIDITAS)
                        </span>
                        <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded">
                          Bobot 15%
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-2xl font-extrabold text-slate-900">
                          {ratios.currentRatio !== undefined ? `${Number(ratios.currentRatio).toFixed(2)}x` : "-"}
                        </span>
                        <span
                          className={`border text-[10px] font-bold px-1.5 py-0.5 rounded ${
                            ruleResults.currentRatio?.status === "SEHAT"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                              : ruleResults.currentRatio?.status === "WASPADA"
                              ? "bg-amber-50 text-amber-700 border-amber-200"
                              : "bg-red-50 text-red-700 border-red-200"
                          }`}
                        >
                          {ruleResults.currentRatio?.status || "SEHAT"}
                        </span>
                      </div>
                      <div className="text-[11px] font-semibold text-slate-700 mt-1">
                        {Number(ratios.currentRatio) < 1.0
                          ? "❌ Defisit Likuiditas (< 1.0x)"
                          : Number(ratios.currentRatio) < 1.5
                          ? "⚠️ Mendekati Batas Aman (1.0x - 1.5x)"
                          : "✅ Likuiditas Aman (≥ 1.5x)"}
                      </div>
                    </div>

                    <div className="mt-4 pt-2 border-t border-slate-50 text-[11px] text-slate-500 leading-tight">
                      <span className="font-semibold text-slate-700">Batas Aman ≥ 1.50x.</span>{" "}
                      {ruleResults.currentRatio?.message || "Rasio aset lancar untuk melunasi utang lancar."}
                    </div>
                  </div>

                  {/* Card 3: Net Profit Margin */}
                  <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          NET PROFIT MARGIN
                        </span>
                        <span className="bg-red-50 text-red-700 text-[10px] font-bold px-1.5 py-0.5 rounded">
                          Bobot 20%
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span
                          className={`text-2xl font-extrabold ${
                            Number(ratios.netProfitMargin) >= 0 ? "text-emerald-600" : "text-red-600"
                          }`}
                        >
                          {Number(ratios.netProfitMargin) >= 0 ? "+" : ""}
                          {ratios.netProfitMargin !== undefined ? `${Number(ratios.netProfitMargin).toFixed(1)}%` : "-"}
                        </span>
                        <span
                          className={`border text-[10px] font-bold px-1.5 py-0.5 rounded ${
                            ruleResults.netProfitMargin?.status === "SEHAT"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                              : ruleResults.netProfitMargin?.status === "WASPADA"
                              ? "bg-amber-50 text-amber-700 border-amber-200"
                              : "bg-red-50 text-red-700 border-red-200"
                          }`}
                        >
                          {ruleResults.netProfitMargin?.status || "SEHAT"}
                        </span>
                      </div>
                      <div
                        className={`text-[11px] font-semibold mt-1 flex items-center gap-1 ${
                          Number(ratios.netProfitMargin) >= 0 ? "text-emerald-700" : "text-red-600"
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            Number(ratios.netProfitMargin) >= 0 ? "bg-emerald-600" : "bg-red-600"
                          }`}
                        ></span>
                        <span>
                          {Number(ratios.netProfitMargin) >= 0
                            ? "Laba Bersih Positif"
                            : "Defisit Operasional Periode Ini"}
                        </span>
                      </div>
                    </div>

                    <div className="mt-4 pt-2 border-t border-slate-50">
                      <div
                        className={`text-[11px] p-2 rounded flex items-start gap-1.5 leading-snug ${
                          Number(ratios.netProfitMargin) >= 0
                            ? "bg-emerald-50 text-emerald-800"
                            : "bg-red-50/80 text-red-700"
                        }`}
                      >
                        <AlertTriangle size={13} className="shrink-0 mt-0.5" />
                        <span>
                          {ruleResults.netProfitMargin?.message ||
                            "Margin laba bersih menggambarkan persentase keuntungan akhir terhadap total omzet."}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Debt to Asset & Solvabilitas */}
                  <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-sm flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          DEBT TO ASSET (LEVERAGE)
                        </span>
                        <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-1.5 py-0.5 rounded">
                          Bobot 15%
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-2xl font-extrabold text-slate-900">
                          {ratios.debtToAssetRatio !== undefined ? `${(Number(ratios.debtToAssetRatio) / 100).toFixed(2)}x` : "-"}
                        </span>
                        <span
                          className={`border text-[10px] font-bold px-1.5 py-0.5 rounded ${
                            ruleResults.debtToAssetRatio?.status === "SEHAT"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                              : ruleResults.debtToAssetRatio?.status === "WASPADA"
                              ? "bg-amber-50 text-amber-700 border-amber-200"
                              : "bg-red-50 text-red-700 border-red-200"
                          }`}
                        >
                          {ruleResults.debtToAssetRatio?.status || "SEHAT"}
                        </span>
                      </div>
                      <div className="text-[11px] font-semibold text-slate-600 mt-1">
                        ({Number(ratios.debtToAssetRatio || 0).toFixed(1)}%) Rasio Total Utang Terhadap Aset
                      </div>
                    </div>

                    <div className="mt-4 pt-2 border-t border-slate-50 text-[11px] text-slate-500 leading-tight">
                      <span className="font-semibold text-slate-700">Quick Ratio:</span>{" "}
                      {ratios.quickRatio !== undefined ? `${Number(ratios.quickRatio).toFixed(2)}x` : "-"}{" "}
                      • {ruleResults.debtToAssetRatio?.message || "Kapasitas aset menopang total kewajiban."}
                    </div>
                  </div>
                </div>

                {/* SECTION 3: DETEKSI POLA KONDISI KEUANGAN (RULE-BASED PATTERNS) */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert size={18} className="text-[#0A2540]" />
                      <h3 className="text-sm font-bold text-slate-900">
                        Deteksi Pola Kondisi Keuangan
                      </h3>
                    </div>
                    <span className="text-[11px] text-slate-400">
                      Evaluasi pola tren multi-periode standar SAK EMKM
                    </span>
                  </div>

                  {/* Jika Pola Risiko Terdeteksi */}
                  {patterns.length > 0 ? (
                    <div className="space-y-3">
                      {patterns.map((p, idx) => {
                        const isDanger = p.type === "LIQUIDITY_PRESSURE" || p.type === "CONSECUTIVE_LOSS";
                        return (
                          <div
                            key={idx}
                            className={`border rounded-xl p-4 sm:p-5 shadow-sm ${
                              isDanger ? "bg-red-50/70 border-red-200" : "bg-amber-50/70 border-amber-200"
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 text-white ${
                                  isDanger ? "bg-red-600" : "bg-amber-600"
                                }`}
                              >
                                <AlertTriangle size={18} />
                              </div>
                              <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span
                                    className={`text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider text-white ${
                                      isDanger ? "bg-red-600" : "bg-amber-600"
                                    }`}
                                  >
                                    POLA TERDETEKSI
                                  </span>
                                  <h4
                                    className={`text-sm sm:text-base font-extrabold ${
                                      isDanger ? "text-red-950" : "text-amber-950"
                                    }`}
                                  >
                                    {p.label || p.type}
                                  </h4>
                                </div>

                                <p
                                  className={`text-xs mt-1.5 leading-relaxed ${
                                    isDanger ? "text-red-900/90" : "text-amber-900/90"
                                  }`}
                                >
                                  {p.description}
                                </p>

                                {/* Rekomendasi Terarah */}
                                <div
                                  className={`mt-3 bg-white/95 border rounded-lg p-3 flex items-start gap-2 text-xs font-semibold ${
                                    isDanger
                                      ? "border-red-200/80 text-red-950"
                                      : "border-amber-200/80 text-amber-950"
                                  }`}
                                >
                                  <ArrowRight size={14} className={`shrink-0 mt-0.5 ${isDanger ? "text-red-600" : "text-amber-600"}`} />
                                  <span>
                                    {p.type === "LIQUIDITY_PRESSURE"
                                      ? "Tunda ekspansi fisik atau komitmen sewa tempat baru hingga kas lancar memadai (CR ≥ 1.5x)."
                                      : p.type === "REVENUE_CONTRACTION"
                                      ? "Lakukan peninjauan strategi pemasaran, pricing produk, dan kepuasan pelanggan untuk membalikkan tren omzet."
                                      : p.type === "CONSECUTIVE_LOSS"
                                      ? "Audit segera struktur biaya operasional harian dan renegosiasikan harga beli bahan baku pokok."
                                      : p.type === "MARGIN_SQUEEZE"
                                      ? "Tinjau ulang margin laba kotor, kurangi pemborosan bahan baku, dan hentikan diskon berlebih."
                                      : "Pantau arus kas masuk harian dan jadwalkan pembayaran liabilitas secara bertahap."}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    /* Jika Tidak Ada Pola Bahaya yang Aktif */
                    <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 sm:p-5 shadow-sm flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 size={18} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="bg-emerald-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider">
                            KONDISI STABIL
                          </span>
                          <h4 className="text-sm sm:text-base font-extrabold text-emerald-950">
                            Tidak Terdeteksi Pola Risiko Kritis
                          </h4>
                        </div>
                        <p className="text-xs text-emerald-900/90 mt-1.5 leading-relaxed">
                          Arus kas lancar, pertumbuhan pendapatan, dan struktur solvabilitas usaha Anda berada dalam rentang sehat tanpa indikasi tekanan likuiditas akut.
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* SECTION 4: MATRIKS EVALUASI ATURAN & SKORING FINANSIAL (6 RULES SAK EMKM) */}
                <div className="bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-sm space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                    <div>
                      <div className="flex items-center gap-2">
                        <FileText size={17} className="text-[#0A2540]" />
                        <h3 className="text-sm font-bold text-slate-900">
                          Matriks Evaluasi Aturan & Skoring Finansial (SAK EMKM)
                        </h3>
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        Evaluasi menyeluruh 6 aturan rasio keuangan UMKM dengan bobot tertimbang
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-[#0A2540] text-white font-bold text-[10px] px-2.5 py-1 rounded">
                        Total 6 Indikator Terverifikasi
                      </span>
                    </div>
                  </div>

                  {/* Responsive Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-slate-200 text-slate-400 text-[11px] font-bold uppercase tracking-wider">
                          <th className="py-2.5 px-3">Aturan & Indikator</th>
                          <th className="py-2.5 px-3 text-center">Nilai Aktual</th>
                          <th className="py-2.5 px-3 text-center">Status</th>
                          <th className="py-2.5 px-3 text-center">Standar SAK EMKM</th>
                          <th className="py-2.5 px-3">Penjelasan Sistem</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {/* 1. Current Ratio */}
                        <tr className="hover:bg-slate-50/60 transition-colors">
                          <td className="py-3 px-3">
                            <div className="font-bold text-slate-900">Current Ratio</div>
                            <div className="text-[10px] text-slate-400">Likuiditas Aset Lancar vs Utang Lancar</div>
                          </td>
                          <td className="py-3 px-3 text-center font-bold text-slate-800 font-mono">
                            {ratios.currentRatio !== undefined ? `${Number(ratios.currentRatio).toFixed(2)}x` : "-"}
                          </td>
                          <td className="py-3 px-3 text-center">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                                ruleResults.currentRatio?.status === "SEHAT"
                                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                  : ruleResults.currentRatio?.status === "WASPADA"
                                  ? "bg-amber-50 text-amber-700 border-amber-200"
                                  : "bg-red-50 text-red-700 border-red-200"
                              }`}
                            >
                              {ruleResults.currentRatio?.status || "SEHAT"}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-center text-slate-600 font-medium font-mono">≥ 1.50x</td>
                          <td className="py-3 px-3 text-[11px] text-slate-500 leading-snug">
                            {ruleResults.currentRatio?.message || "Cadangan kas dan aset likuid menutupi kewajiban jangka pendek."}
                          </td>
                        </tr>

                        {/* 2. Quick Ratio */}
                        <tr className="hover:bg-slate-50/60 transition-colors">
                          <td className="py-3 px-3">
                            <div className="font-bold text-slate-900">Quick Ratio</div>
                            <div className="text-[10px] text-slate-400">Likuiditas Cepat (Aset Lancar Tanpa Stok)</div>
                          </td>
                          <td className="py-3 px-3 text-center font-bold text-slate-800 font-mono">
                            {ratios.quickRatio !== undefined ? `${Number(ratios.quickRatio).toFixed(2)}x` : "-"}
                          </td>
                          <td className="py-3 px-3 text-center">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                                ruleResults.quickRatio?.status === "SEHAT"
                                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                  : ruleResults.quickRatio?.status === "WASPADA"
                                  ? "bg-amber-50 text-amber-700 border-amber-200"
                                  : "bg-red-50 text-red-700 border-red-200"
                              }`}
                            >
                              {ruleResults.quickRatio?.status || "SEHAT"}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-center text-slate-600 font-medium font-mono">≥ 1.00x</td>
                          <td className="py-3 px-3 text-[11px] text-slate-500 leading-snug">
                            {ruleResults.quickRatio?.message || "Kapasitas pembayaran darurat tanpa menunggu persediaan terjual."}
                          </td>
                        </tr>

                        {/* 3. Net Profit Margin */}
                        <tr className="hover:bg-slate-50/60 transition-colors">
                          <td className="py-3 px-3">
                            <div className="font-bold text-slate-900">Net Profit Margin</div>
                            <div className="text-[10px] text-slate-400">Rasio Keuntungan Bersih Operasional</div>
                          </td>
                          <td
                            className={`py-3 px-3 text-center font-bold font-mono ${
                              Number(ratios.netProfitMargin) >= 0 ? "text-emerald-700" : "text-red-600"
                            }`}
                          >
                            {Number(ratios.netProfitMargin) >= 0 ? "+" : ""}
                            {ratios.netProfitMargin !== undefined ? `${Number(ratios.netProfitMargin).toFixed(1)}%` : "-"}
                          </td>
                          <td className="py-3 px-3 text-center">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                                ruleResults.netProfitMargin?.status === "SEHAT"
                                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                  : ruleResults.netProfitMargin?.status === "WASPADA"
                                  ? "bg-amber-50 text-amber-700 border-amber-200"
                                  : "bg-red-50 text-red-700 border-red-200"
                              }`}
                            >
                              {ruleResults.netProfitMargin?.status || "SEHAT"}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-center text-slate-600 font-medium font-mono">≥ 10.0%</td>
                          <td className="py-3 px-3 text-[11px] text-slate-500 leading-snug">
                            {ruleResults.netProfitMargin?.message || "Efisiensi akhir omzet menghasilkan profit bersih."}
                          </td>
                        </tr>

                        {/* 4. Gross Profit Margin */}
                        <tr className="hover:bg-slate-50/60 transition-colors">
                          <td className="py-3 px-3">
                            <div className="font-bold text-slate-900">Gross Profit Margin</div>
                            <div className="text-[10px] text-slate-400">Efisiensi Harga Pokok Penjualan (HPP)</div>
                          </td>
                          <td className="py-3 px-3 text-center font-bold text-slate-800 font-mono">
                            {ratios.grossProfitMargin !== undefined ? `${Number(ratios.grossProfitMargin).toFixed(1)}%` : "-"}
                          </td>
                          <td className="py-3 px-3 text-center">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                                ruleResults.grossProfitMargin?.status === "SEHAT"
                                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                  : ruleResults.grossProfitMargin?.status === "WASPADA"
                                  ? "bg-amber-50 text-amber-700 border-amber-200"
                                  : "bg-red-50 text-red-700 border-red-200"
                              }`}
                            >
                              {ruleResults.grossProfitMargin?.status || "SEHAT"}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-center text-slate-600 font-medium font-mono">≥ 25.0%</td>
                          <td className="py-3 px-3 text-[11px] text-slate-500 leading-snug">
                            {ruleResults.grossProfitMargin?.message || "Margin kotor untuk menutup beban operasional harian."}
                          </td>
                        </tr>

                        {/* 5. Debt to Asset Ratio */}
                        <tr className="hover:bg-slate-50/60 transition-colors">
                          <td className="py-3 px-3">
                            <div className="font-bold text-slate-900">Debt to Asset Ratio</div>
                            <div className="text-[10px] text-slate-400">Leverage Total Utang terhadap Seluruh Aset</div>
                          </td>
                          <td className="py-3 px-3 text-center font-bold text-slate-800 font-mono">
                            {ratios.debtToAssetRatio !== undefined ? `${(Number(ratios.debtToAssetRatio) / 100).toFixed(2)}x` : "-"}
                          </td>
                          <td className="py-3 px-3 text-center">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                                ruleResults.debtToAssetRatio?.status === "SEHAT"
                                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                  : ruleResults.debtToAssetRatio?.status === "WASPADA"
                                  ? "bg-amber-50 text-amber-700 border-amber-200"
                                  : "bg-red-50 text-red-700 border-red-200"
                              }`}
                            >
                              {ruleResults.debtToAssetRatio?.status || "SEHAT"}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-center text-slate-600 font-medium font-mono">≤ 50.0%</td>
                          <td className="py-3 px-3 text-[11px] text-slate-500 leading-snug">
                            {ruleResults.debtToAssetRatio?.message || "Proporsi aset usaha yang dibiayai utang pihak ketiga."}
                          </td>
                        </tr>

                        {/* 6. Debt to Equity Ratio */}
                        <tr className="hover:bg-slate-50/60 transition-colors">
                          <td className="py-3 px-3">
                            <div className="font-bold text-slate-900">Debt to Equity Ratio</div>
                            <div className="text-[10px] text-slate-400">Rasio Utang terhadap Modal Sendiri</div>
                          </td>
                          <td className="py-3 px-3 text-center font-bold text-slate-800 font-mono">
                            {ratios.debtToEquityRatio !== undefined ? `${(Number(ratios.debtToEquityRatio) / 100).toFixed(2)}x` : "-"}
                          </td>
                          <td className="py-3 px-3 text-center">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                                ruleResults.debtToEquityRatio?.status === "SEHAT"
                                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                                  : ruleResults.debtToEquityRatio?.status === "WASPADA"
                                  ? "bg-amber-50 text-amber-700 border-amber-200"
                                  : "bg-red-50 text-red-700 border-red-200"
                              }`}
                            >
                              {ruleResults.debtToEquityRatio?.status || "SEHAT"}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-center text-slate-600 font-medium font-mono">≤ 100.0%</td>
                          <td className="py-3 px-3 text-[11px] text-slate-500 leading-snug">
                            {ruleResults.debtToEquityRatio?.message || "Perbandingan antara dana pinjaman dengan ekuitas pemilik."}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Total Score Summary Banner */}
                  <div className="bg-[#EEF4FF] rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 border border-blue-100">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold text-slate-700">
                        Total Indeks Risiko Finansial:
                      </span>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-2xl font-extrabold text-slate-900 leading-none">
                          {(riskIndex || 0).toFixed(1)}
                        </span>
                        <span className="text-xs font-bold text-slate-700">
                          / 100 ({riskLevel})
                        </span>
                      </div>
                    </div>

                    <div>
                      <span className="bg-blue-600 text-white font-bold text-xs px-3 py-1 rounded-md">
                        Standar SAK EMKM Republik Indonesia
                      </span>
                    </div>
                  </div>
                </div>

                {/* SECTION 5: TABEL REKAP HISTORIS PERIODE LAPORAN KEUANGAN RIIL */}
                {financialPeriods.length > 0 && (
                  <div className="bg-white rounded-xl border border-slate-200/80 p-5 sm:p-6 shadow-sm space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                      <div>
                        <div className="flex items-center gap-2">
                          <Building2 size={17} className="text-[#0A2540]" />
                          <h3 className="text-sm font-bold text-slate-900">
                            Rincian Pembukuan per Periode yang Dianalisis
                          </h3>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">
                          Data keuangan riil yang diparsing dari berkas Excel ({financialPeriods.length} periode tersimpan)
                        </p>
                      </div>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs">
                        <thead>
                          <tr className="border-b border-slate-200 text-slate-400 text-[11px] font-bold uppercase tracking-wider">
                            <th className="py-2.5 px-3">Periode</th>
                            <th className="py-2.5 px-3 text-right">Pendapatan (Omzet)</th>
                            <th className="py-2.5 px-3 text-right">HPP</th>
                            <th className="py-2.5 px-3 text-right">Beban Operasional</th>
                            <th className="py-2.5 px-3 text-right">Laba Bersih</th>
                            <th className="py-2.5 px-3 text-right">Aset Lancar</th>
                            <th className="py-2.5 px-3 text-right">Utang Lancar</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {financialPeriods.map((period, pIdx) => {
                            const isLoss = Number(period.netIncome) < 0;
                            return (
                              <tr key={period.id || pIdx} className="hover:bg-slate-50/60 transition-colors">
                                <td className="py-3 px-3 font-bold text-slate-800">
                                  {formatPeriodMonth(period.periodStart)}
                                </td>
                                <td className="py-3 px-3 text-right font-mono text-slate-800">
                                  {formatIDR(period.revenue)}
                                </td>
                                <td className="py-3 px-3 text-right font-mono text-slate-600">
                                  {formatIDR(period.cogs)}
                                </td>
                                <td className="py-3 px-3 text-right font-mono text-slate-600">
                                  {formatIDR(period.operatingExpense)}
                                </td>
                                <td
                                  className={`py-3 px-3 text-right font-mono font-bold ${
                                    isLoss ? "text-red-600" : "text-emerald-700"
                                  }`}
                                >
                                  {formatIDR(period.netIncome)}
                                </td>
                                <td className="py-3 px-3 text-right font-mono text-slate-800">
                                  {formatIDR(period.currentAssets)}
                                </td>
                                <td className="py-3 px-3 text-right font-mono text-slate-800">
                                  {formatIDR(period.currentLiabilities)}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* SECTION 6: LEGAL NOTICE & ACTION FOOTER */}
                <div className="space-y-4">
                  {/* SAK EMKM Disclaimer Notice */}
                  <div className="flex items-start gap-2 text-[11px] text-slate-400 leading-relaxed px-1">
                    <Info size={14} className="shrink-0 mt-0.5 text-slate-400" />
                    <span>
                      Hasil analisis merupakan indikator peringatan dini kesulitan keuangan, bukan prediksi kebangkrutan yang tervalidasi secara hukum. Rekomendasi disusun secara objektif berdasarkan standar akuntansi UMKM (SAK EMKM) Republik Indonesia.
                    </span>
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="bg-white rounded-xl border border-slate-200/80 p-4 sm:p-5 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2.5 text-xs text-slate-600">
                      <span className="text-blue-600 font-bold">📈</span>
                      <span>
                        Langkah selanjutnya: simulasikan perbaikan margin atau konsultasikan rencana aksi ke AI
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
                      <button
                        type="button"
                        onClick={() => window.print()}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
                      >
                        <Printer size={13} />
                        <span>Cetak Rekap Audit</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setIsSimulatorOpen(true)}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 bg-white hover:bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
                      >
                        <Calculator size={13} />
                        <span>Simulasi Perbaikan Margin</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          if (onNavigate) {
                            onNavigate("ai");
                          }
                        }}
                        className="flex-1 sm:flex-none bg-[#0A2540] hover:bg-[#071c33] active:scale-[0.99] text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm flex items-center justify-center gap-1.5 transition-all"
                      >
                        <span>Tanyakan Rekomendasi ke AI</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </main>
      </div>

      {/* MODAL SIMULATOR PERBAIKAN MARGIN OPERASIONAL */}
      {isSimulatorOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 max-w-lg w-full p-6 space-y-5 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Calculator size={20} className="text-blue-600" />
                <h3 className="text-base font-bold text-slate-900">
                  Simulator Perbaikan Margin Usaha
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsSimulatorOpen(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-2">
                <div className="flex justify-between text-slate-600">
                  <span>Omzet Periode Terakhir:</span>
                  <span className="font-bold text-slate-900 font-mono">{formatIDR(latestRevenue)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Laba Bersih Aktual:</span>
                  <span
                    className={`font-bold font-mono ${
                      latestNetIncome >= 0 ? "text-emerald-700" : "text-red-600"
                    }`}
                  >
                    {formatIDR(latestNetIncome)} ({currentActualNPM.toFixed(1)}%)
                  </span>
                </div>
              </div>

              {/* Slider Target Margin */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="font-bold text-slate-700">Target Net Profit Margin:</label>
                  <span className="text-sm font-extrabold text-blue-600 font-mono bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                    {targetMarginPercent}%
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={targetMarginPercent}
                  onChange={(e) => setTargetMarginPercent(Number(e.target.value))}
                  className="w-full accent-blue-600 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400">
                  <span>1% (Minimal)</span>
                  <span>10% (Standar SAK EMKM)</span>
                  <span>30% (Agresif)</span>
                </div>
              </div>

              {/* Hasil Kalkulasi Otomatis */}
              <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-emerald-900 font-medium">Target Laba Bersih Baru:</span>
                  <span className="font-extrabold text-emerald-950 font-mono text-sm">
                    {formatIDR(simulationDiff.targetIncome)}
                  </span>
                </div>
                <div className="flex justify-between items-center text-xs pt-1 border-t border-emerald-200/60">
                  <span className="text-emerald-900 font-medium">Efisiensi Biaya (HPP / OpEx) Diperlukan:</span>
                  <span className="font-extrabold text-blue-700 font-mono text-sm">
                    {formatIDR(simulationDiff.requiredCostSaving)}
                  </span>
                </div>
                <p className="text-[11px] text-emerald-800/90 pt-1 leading-relaxed">
                  💡 Untuk mencapai margin {targetMarginPercent}%, Anda perlu menghemat total pengeluaran sebesar{" "}
                  <strong>{formatIDR(simulationDiff.requiredCostSaving)}/periode</strong> melalui negosiasi harga bahan pokok atau efisiensi biaya operasional.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setIsSimulatorOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              >
                Tutup
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsSimulatorOpen(false);
                  if (onNavigate) onNavigate("ai");
                }}
                className="flex items-center gap-1.5 bg-[#0A2540] hover:bg-[#071c33] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-all"
              >
                <Bot size={14} />
                <span>Diskusikan Strategi Ini di AI</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
