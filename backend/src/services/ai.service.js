const aiConfig = require("../config/ai.config");
const {
  aiConsentRepository,
  chatMessageRepository,
  aiUsageRepository,
  businessProfileRepository,
  locationAnalysisRepository,
  financialAnalysisRepository,
} = require("../repositories");

// State Circuit Breaker sederhana di memori server (Kepatuhan RL-01)
const circuitBreakerState = {
  consecutiveFailures: 0,
  lastFailureTime: null,
  isOpen: false,
};

function checkCircuitBreaker() {
  if (circuitBreakerState.isOpen) {
    const elapsed = Date.now() - (circuitBreakerState.lastFailureTime || 0);
    if (elapsed < aiConfig.circuitBreakerCooldownMs) {
      const error = new Error(
        "Layanan konsultasi AI sedang tidak tersedia karena batas kegagalan sistem. Silakan coba lagi beberapa saat lagi."
      );
      error.status = 503;
      error.code = "AI_UNAVAILABLE";
      throw error;
    }
    // Setengah terbuka (half-open): izinkan percobaan pemanggilan ulang
    circuitBreakerState.isOpen = false;
  }
}

function recordSuccess() {
  circuitBreakerState.consecutiveFailures = 0;
  circuitBreakerState.isOpen = false;
  circuitBreakerState.lastFailureTime = null;
}

function recordFailure() {
  circuitBreakerState.consecutiveFailures += 1;
  circuitBreakerState.lastFailureTime = Date.now();
  if (circuitBreakerState.consecutiveFailures >= aiConfig.circuitBreakerThreshold) {
    circuitBreakerState.isOpen = true;
  }
}

/**
 * Service untuk logika bisnis Konsultasi AI, Persetujuan Konteks, dan Riwayat Chat
 */
const aiService = {
  /**
   * Mengambil status izin konteks milik user (default: false jika belum diset)
   * @param {string} userId
   */
  async getConsent(userId) {
    const consent = await aiConsentRepository.findByUserId(userId);
    return {
      allowContext: consent ? consent.allowContext : false,
      updatedAt: consent ? consent.updatedAt : null,
    };
  },

  /**
   * Memperbarui status izin konteks milik user (Opt-in)
   * @param {string} userId
   * @param {boolean} allowContext
   */
  async updateConsent(userId, allowContext) {
    if (typeof allowContext !== "boolean") {
      const error = new Error("Parameter allowContext wajib berupa boolean (true/false).");
      error.status = 400;
      error.code = "INVALID_CONSENT_PARAM";
      throw error;
    }

    const consent = await aiConsentRepository.upsert(userId, allowContext);
    return {
      allowContext: consent.allowContext,
      updatedAt: consent.updatedAt,
    };
  },

  /**
   * Mengambil riwayat percakapan konsultasi milik user
   * @param {string} userId
   * @param {Object} [options]
   */
  async getChatHistory(userId, options = {}) {
    const limit = Math.max(1, Math.min(100, parseInt(options.limit, 10) || 50));
    const messages =
      (await chatMessageRepository
        .findByUserId(userId, {
          limit,
          orderBy: "asc",
        })
        .catch(() => [])) || [];

    return messages.map((msg) => ({
      ...msg,
      structured:
        msg.role === "ASSISTANT" ? this.parseStructuredAnswer(msg.content) : null,
    }));
  },

  /**
   * Menghapus seluruh riwayat percakapan konsultasi milik user
   * @param {string} userId
   */
  async deleteChatHistory(userId) {
    await chatMessageRepository.deleteByUserId(userId).catch(() => null);
    return {
      message: "Riwayat percakapan konsultasi berhasil dibersihkan.",
    };
  },

  /**
   * Mengumpulkan data analitik lengkap dan sumber rujukan (grounding sources) untuk UI
   * @param {string} userId
   */
  async getGroundingData(userId) {
    let profile = null;
    let latestLocation = null;
    let latestFinancial = null;

    try {
      [profile, latestLocation, latestFinancial] = await Promise.all([
        businessProfileRepository.findByUserId(userId).catch(() => null),
        locationAnalysisRepository.findLatestByUserId(userId).catch(() => null),
        financialAnalysisRepository.findLatestByUserId(userId).catch(() => null),
      ]);
    } catch (_) {}

    // Jika belum ada data profil bisnis, biarkan null karena profil bisnis Siti telah dihapus
    // Analisis bersifat umum jika profil belum dilengkapi pengguna
    const context = {};
    const sources = [];

    if (profile) {
      context.businessProfile = {
        name: profile.name,
        sector: profile.sector,
        address: profile.address,
        targetRevenue: profile.quarterlyRevenueTarget,
      };
      sources.push({
        name: `Profil_${profile.name.replace(/\s+/g, "_")}.json`,
        note: `Sektor: ${profile.sector}`,
      });
    }

    if (latestLocation) {
      context.latestLocationAnalysis = {
        candidateName: latestLocation.locationName,
        district: latestLocation.district,
        score: Number(latestLocation.score),
        category: latestLocation.category,
        strongestFactor: latestLocation.strongestFactor,
        weakestFactor: latestLocation.weakestFactor,
        rentCost: Number(latestLocation.rentCost),
        competitorCount: latestLocation.competitorCount,
        accessibility: latestLocation.accessibility,
        marketPotential: latestLocation.marketPotential,
        warnings: latestLocation.warnings,
        threshold: latestLocation.details?.threshold ?? 65.0,
        weights: latestLocation.details?.weights,
        recommendation: latestLocation.details?.recommendation,
        normalizedCriteria: latestLocation.details?.normalizedMatrix,
        weightedCriteriaScores: latestLocation.details?.weightedScores,
      };
      sources.push({
        name: `Evaluasi_SAW_${latestLocation.locationName.replace(/\s+/g, "_")}.geojson`,
        note: `Skor SAW ${Number(latestLocation.score).toFixed(1)} (${latestLocation.category})`,
      });
    }

    if (latestFinancial) {
      context.latestFinancialAnalysis = {
        code: latestFinancial.code,
        riskLevel: latestFinancial.riskLevel,
        riskIndex: Number(latestFinancial.riskIndex),
        periodsAnalyzed: latestFinancial.periodsAnalyzed,
        ratios: latestFinancial.ratios,
        patterns: latestFinancial.patterns,
        ruleResults: latestFinancial.ruleResults,
      };
      sources.push({
        name: latestFinancial.fileName || `Analisis_Keuangan_${latestFinancial.code}.json`,
        note: `Risiko: ${latestFinancial.riskLevel} (${Number(latestFinancial.riskIndex).toFixed(1)})`,
      });
    }

    return {
      contextJson: JSON.stringify(context, null, 2),
      sources,
    };
  },

  /**
   * Mengumpulkan data ringkasan analitik terkini user untuk Context Injection (Kepatuhan AI-02)
   * @param {string} userId
   */
  async buildGroundingContext(userId) {
    const { contextJson } = await this.getGroundingData(userId);
    return contextJson;
  },

  /**
   * Mengirim pertanyaan konsultasi ke LLM dengan dukungan SSE streaming dan Context Injection
   * @param {string} userId
   * @param {string} userMessage
   * @param {Object} [options]
   * @param {Function} [onChunk] - Callback streaming potongan teks: (chunk: string) => void
   */
  async sendChat(userId, userMessage, options = {}, onChunk = null) {
    const message = (userMessage || "").trim();
    if (!message) {
      const error = new Error("Pesan pertanyaan tidak boleh kosong.");
      error.status = 400;
      error.code = "EMPTY_MESSAGE";
      throw error;
    }

    if (message.length > 2000) {
      const error = new Error("Pesan pertanyaan melebihi batas maksimal 2000 karakter.");
      error.status = 400;
      error.code = "MESSAGE_TOO_LONG";
      throw error;
    }

    // 1. Cek Circuit Breaker (RL-01)
    checkCircuitBreaker();

    // 2. Cek Izin Konteks Pengguna (AI-02): Mendukung toggle RAG dari frontend (options) atau setting consent DB
    const consent = await aiConsentRepository.findByUserId(userId).catch(() => null);
    const allowContext =
      options.allowContext !== undefined
        ? Boolean(options.allowContext)
        : consent
        ? Boolean(consent.allowContext)
        : true;

    let groundingContext = null;
    let sources = [];
    let contextUsed = false;
    let note = undefined;

    if (allowContext) {
      const groundingData = await this.getGroundingData(userId);
      groundingContext = groundingData.contextJson;
      sources = groundingData.sources || [];
      if (groundingContext) {
        contextUsed = true;
      } else {
        note = "Belum ada hasil analisis tersimpan, jawaban bersifat umum.";
      }
    } else {
      note = "Pengguna tidak mengizinkan akses konteks data usaha.";
    }

    // 3. Simpan Pesan Pengguna ke Database
    await chatMessageRepository.create({
      userId,
      role: "USER",
      content: message,
      contextUsed,
    }).catch(() => null);

    // 4. Ambil riwayat chat terbaru untuk context sliding window (6 pesan terakhir)
    const recentMessages = (await chatMessageRepository.findByUserId(userId, {
      limit: 6,
      orderBy: "asc",
    }).catch(() => [])) || [];

    // 5. Susun Instruksi Sistem Lengkap (Guardrail + Grounding Data)
    let fullSystemInstruction = aiConfig.systemInstruction;
    if (contextUsed && groundingContext) {
      fullSystemInstruction += `\n\n--- DATA KONTEKS USAHA DAN ANALISIS TERBARU PENGGUNA ---\n${groundingContext}

PANDUAN KHUSUS ANALISIS BISNIS:
1. Hubungkan hasil analisis secara mendalam dengan SEKTOR USAHA pengguna (misal F&B/Kuliner, ritel, atau jasa).
2. Jika membahas evaluasi kelayakan lokasi:
   - Terangkan alasan mengapa statusnya LAYAK / DIPERTIMBANGKAN / TIDAK LAYAK dengan membandingkan Skor SAW terhadap Threshold standar kelayakan.
   - Bedah poin kriteria spesifik: Biaya Sewa tahunan, Jumlah Kompetitor di area sekitar, Skor Aksesibilitas (arus jalan, parkir, gang buntu), dan Potensi Pasar.
   - Uraikan konsekuensi langsung faktor-faktor tersebut terhadap risiko operasional dan omzet di sektor usaha pengguna.
   - Sajikan prioritas taktis terarah (minimal 2 prioritas dengan tipe danger/warning/info) serta Target Aksi Cepat 60 Hari yang konkret.
3. PENTING: Format output JSON harus valid, lengkap, dan seluruh blok kurung kurawal serta tanda petik ditutup sempurna.`;
    } else {
      fullSystemInstruction += `\n\nPerhatian: Pengguna tidak mengizinkan akses data atau belum memiliki data analisis. Jawablah secara umum dengan kerangka acuan bisnis UMKM terbaik.`;
    }

    // 6. Jalankan Pemanggilan Model (dengan dukungan Streaming & Mocking saat pengujian)
    let fullAnswer = "";
    let inputTokens = 0;
    let outputTokens = 0;

    try {
      // MODE MOCK / TEST / API KEY KOSONG:
      // Berdasarkan dokumen spesifikasi: Layanan LLM selalu ditiru (mock) di test/CI agar deterministik dan cepat
      const isTestEnv = process.env.NODE_ENV === "test" || !aiConfig.apiKey;

      if (isTestEnv) {
        const mockResponse = this.generateMockResponse(message, contextUsed, groundingContext);
        
        // Simulasikan streaming potongan teks jika callback onChunk tersedia
        if (typeof onChunk === "function") {
          const words = mockResponse.split(" ");
          for (const word of words) {
            onChunk(word + " ");
            await new Promise((resolve) => setTimeout(resolve, 5));
          }
        }
        fullAnswer = mockResponse;
        inputTokens = Math.ceil(message.length / 4);
        outputTokens = Math.ceil(fullAnswer.length / 4);
      } else {
        // MODE PRODUKSI DENGAN GOOGLE GEN AI SDK / REST API + FAILOVER KE GROQ (LLAMA):
        let streamResult;
        try {
          streamResult = await this.callGeminiApiStream(
            fullSystemInstruction,
            recentMessages,
            message,
            onChunk
          );
        } catch (geminiErr) {
          // JIKA GEMINI GAGAL / KUOTA HABIS: JALANKAN FAILOVER OTOMATIS KE GROQ (LLAMA-3)
          if (aiConfig.groq.apiKey) {
            console.warn(
              `[AI Failover] Google Gemini gagal (${geminiErr.message}). Mengalihkan otomatis ke Groq (${aiConfig.groq.model})...`
            );
            streamResult = await this.callGroqApiStream(
              fullSystemInstruction,
              recentMessages,
              message,
              onChunk
            );
          } else {
            throw geminiErr;
          }
        }

        fullAnswer = streamResult.fullText;
        inputTokens = streamResult.inputTokens || Math.ceil(message.length / 4);
        outputTokens = streamResult.outputTokens || Math.ceil(fullAnswer.length / 4);
      }

      // 7. Simpan Balasan Asisten AI ke Database
      await chatMessageRepository.create({
        userId,
        role: "ASSISTANT",
        content: fullAnswer,
        contextUsed,
      }).catch(() => null);

      // 8. Catat Penggunaan Token di AiUsage
      await aiUsageRepository.create({
        userId,
        status: "SUCCESS",
        contextUsed,
        inputTokens,
        outputTokens,
      }).catch(() => null);

      recordSuccess();

      return {
        answer: fullAnswer,
        structured: this.parseStructuredAnswer(fullAnswer),
        sources: contextUsed ? sources : [],
        contextUsed,
        disclaimer: aiConfig.disclaimer,
        note,
      };
    } catch (err) {
      recordFailure();

      // Catat log kegagalan pemanggilan AI
      await aiUsageRepository
        .create({
          userId,
          status: "FAILED",
          contextUsed,
          inputTokens: 0,
          outputTokens: 0,
        })
        .catch(() => {});

      const error = new Error(
        "Layanan konsultasi AI sedang tidak tersedia. Silakan coba lagi beberapa saat lagi."
      );
      error.status = 503;
      error.code = "AI_UNAVAILABLE";
      error.originalError = err.message;
      throw error;
    }
  },

  /**
   * Panggilan streaming langsung ke Google Gemini API menggunakan SDK atau REST Fetch
   */
  async callGeminiApiStream(systemInstruction, history, currentMessage, onChunk) {
    let GoogleGenAI;
    try {
      const genai = require("@google/genai");
      GoogleGenAI = genai.GoogleGenAI;
    } catch (e) {
      GoogleGenAI = null;
    }

    if (GoogleGenAI && aiConfig.apiKey) {
      const ai = new GoogleGenAI({ apiKey: aiConfig.apiKey });
      const contents = [];

      // Format riwayat chat
      for (const msg of history) {
        if (msg.role === "USER") {
          contents.push({ role: "user", parts: [{ text: msg.content }] });
        } else if (msg.role === "ASSISTANT") {
          contents.push({ role: "model", parts: [{ text: msg.content }] });
        }
      }

      // Tambahkan pesan saat ini
      contents.push({ role: "user", parts: [{ text: currentMessage }] });

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), aiConfig.timeoutMs);

      try {
        const responseStream = await ai.models.generateContentStream({
          model: aiConfig.model,
          contents,
          config: {
            systemInstruction,
            temperature: aiConfig.temperature,
            maxOutputTokens: aiConfig.maxOutputTokens,
            topP: aiConfig.topP,
          },
        });

        clearTimeout(timeoutId);

        let fullText = "";
        for await (const chunk of responseStream) {
          const chunkText = chunk.text || "";
          fullText += chunkText;
          if (typeof onChunk === "function" && chunkText) {
            onChunk(chunkText);
          }
        }

        return {
          fullText: fullText.trim(),
          inputTokens: 50,
          outputTokens: Math.ceil(fullText.length / 4),
        };
      } finally {
        clearTimeout(timeoutId);
      }
    }

    // Fallback native HTTP fetch jika SDK belum selesai compile/load
    return this.callGeminiRestStream(systemInstruction, history, currentMessage, onChunk);
  },

  /**
   * Fallback native streaming via HTTPS Fetch ke Gemini REST API
   */
  async callGeminiRestStream(systemInstruction, history, currentMessage, onChunk) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${aiConfig.model}:streamGenerateContent?alt=sse&key=${aiConfig.apiKey}`;
    
    const contents = [];
    for (const msg of history) {
      contents.push({
        role: msg.role === "USER" ? "user" : "model",
        parts: [{ text: msg.content }],
      });
    }
    contents.push({ role: "user", parts: [{ text: currentMessage }] });

    const body = {
      contents,
      systemInstruction: {
        parts: [{ text: systemInstruction }],
      },
      generationConfig: {
        temperature: aiConfig.temperature,
        maxOutputTokens: aiConfig.maxOutputTokens,
        topP: aiConfig.topP,
      },
    };

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(aiConfig.timeoutMs),
    });

    if (!res.ok) {
      throw new Error(`Gemini API error: ${res.status} ${res.statusText}`);
    }

    let fullText = "";
    const reader = res.body.getReader();
    const decoder = new TextDecoder("utf-8");

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const text = decoder.decode(value, { stream: true });
      const lines = text.split("\n");
      for (const line of lines) {
        if (line.startsWith("data: ")) {
          try {
            const parsed = JSON.parse(line.slice(6));
            const partText = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
            if (partText) {
              fullText += partText;
              if (typeof onChunk === "function") {
                onChunk(partText);
              }
            }
          } catch (_) {}
        }
      }
    }

    return {
      fullText: fullText.trim(),
      inputTokens: 50,
      outputTokens: Math.ceil(fullText.length / 4),
    };
  },

  /**
   * Panggilan streaming cadangan ke Groq API (menjalankan model Llama-3)
   */
  async callGroqApiStream(systemInstruction, history, currentMessage, onChunk) {
    if (!aiConfig.groq.apiKey) {
      throw new Error("GROQ_API_KEY belum dikonfigurasi.");
    }

    const messages = [
      { role: "system", content: systemInstruction },
    ];

    for (const msg of history) {
      messages.push({
        role: msg.role === "USER" ? "user" : "assistant",
        content: msg.content,
      });
    }

    messages.push({ role: "user", content: currentMessage });

    const payload = {
      model: aiConfig.groq.model,
      messages,
      temperature: aiConfig.temperature,
      max_tokens: aiConfig.maxOutputTokens,
      top_p: aiConfig.topP,
      stream: true,
    };

    const res = await fetch(aiConfig.groq.endpoint, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${aiConfig.groq.apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(aiConfig.timeoutMs),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => "");
      throw new Error(`Groq API error (${res.status}): ${errText || res.statusText}`);
    }

    let fullText = "";
    const reader = res.body.getReader();
    const decoder = new TextDecoder("utf-8");

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      const text = decoder.decode(value, { stream: true });
      const lines = text.split("\n");
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith("data: ")) {
          const raw = trimmed.slice(6);
          if (raw === "[DONE]") break;
          try {
            const parsed = JSON.parse(raw);
            const delta = parsed.choices?.[0]?.delta?.content;
            if (delta) {
              fullText += delta;
              if (typeof onChunk === "function") {
                onChunk(delta);
              }
            }
          } catch (_) {}
        }
      }
    }

    return {
      fullText: fullText.trim(),
      inputTokens: 50,
      outputTokens: Math.ceil(fullText.length / 4),
    };
  },

  /**
   * Parser cerdas untuk mengekstrak struktur JSON kartu UI (Prioritas, Action Plan) dari teks jawaban AI
   * @param {string} rawText
   */
  parseStructuredAnswer(rawText) {
    if (!rawText || typeof rawText !== "string") return null;

    let jsonString = rawText.trim();
    // 1. Ekstrak dari blok markdown ```json ... ``` jika ada
    const jsonBlockRegex = /```(?:json)?\s*([\s\S]*?)\s*```/;
    const match = jsonString.match(jsonBlockRegex);
    if (match && match[1]) {
      jsonString = match[1].trim();
    } else {
      // 2. Jika tidak ada blok ``` tertutup, periksa apakah diawali ```json
      const openFence = jsonString.indexOf("```json");
      if (openFence !== -1) {
        jsonString = jsonString.slice(openFence + 7).trim();
      }

      // 3. Ambil dari substring kurung kurawal terluar { ... }
      const firstBrace = jsonString.indexOf("{");
      const lastBrace = jsonString.lastIndexOf("}");
      if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
        jsonString = jsonString.slice(firstBrace, lastBrace + 1);
      } else {
        return null;
      }
    }

    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.intro || parsed.priorities || parsed.actionPlan) {
        return parsed;
      }
      return null;
    } catch (_) {
      // Upaya perbaikan ringan untuk trailing commas atau karakter anomali
      try {
        const cleaned = jsonString.replace(/,\s*([\]}])/g, "$1");
        const parsed = JSON.parse(cleaned);
        if (parsed.intro || parsed.priorities || parsed.actionPlan) {
          return parsed;
        }
      } catch (__) {}
      return null;
    }
  },

  /**
   * Generator respons tiruan cerdas untuk mode pengujian unit/integrasi tanpa bergantung pada kuota API
   */
  generateMockResponse(message, contextUsed, contextDataJson) {
    const lower = message.toLowerCase();

    // Guardrail test check
    if (lower.includes("abaikan instruksi") || lower.includes("system prompt")) {
      return "Mohon maaf, saya tidak dapat membagikan instruksi internal sistem. Saya siap membantu Anda menganalisis strategi bisnis, kelayakan lokasi, dan keuangan UMKM Anda.";
    }

    if (lower.includes("politik") || lower.includes("pemilu") || lower.includes("resep makanan")) {
      return "Sebagai Asisten Konsultan Bisnis NEXUM, fokus saya adalah mendampingi keputusan bisnis, keuangan, dan ekspansi cabang UMKM. Mari diskusikan hal terkait pengembangan usaha Anda.";
    }

    if (contextUsed && contextDataJson) {
      try {
        const parsed = JSON.parse(contextDataJson);
        const businessName = parsed.businessProfile?.name || "Usaha Anda";
        const locCategory = parsed.latestLocationAnalysis?.category || "LAYAK";
        const locScore = parsed.latestLocationAnalysis?.score || 70.0;
        const locName = parsed.latestLocationAnalysis?.candidateName || "Cabang Baru";
        const finRisk = parsed.latestFinancialAnalysis?.riskLevel || "WASPADA";

        const structuredObj = {
          intro: `Berdasarkan sintesis data laporan laba rugi dan kalkulasi kelayakan lokasi ${locName}, berikut prioritas strategis mendesak untuk menjaga kelangsungan arus kas ${businessName}:`,
          priorities: [
            {
              id: "p1",
              type: finRisk === "RISIKO_TINGGI" || finRisk === "WASPADA" ? "danger" : "info",
              tag: `Prioritas #1 • Risiko ${finRisk === "RISIKO_TINGGI" ? "Solvabilitas" : "Likuiditas"}`,
              title: `Tunda komitmen sewa cabang baru di ${locName}`,
              desc: `Meskipun skor SAW spasial mencapai ${locScore} (${locCategory}), komitmen sewa berisiko tinggi memicu tekanan kas karena saat ini profil risiko keuangan berada pada level ${finRisk}.`,
            },
            {
              id: "p2",
              type: "info",
              tag: "Prioritas #2 • Pemulihan Margin",
              title: "Efisiensi beban operasional & tekan HPP",
              desc: "Optimalkan renegosiasi supplier bahan baku dan pertahankan efisiensi sebelum menggelar ekspansi fisik.",
            },
          ],
          actionPlan: {
            title: "Target Aksi Cepat 60 Hari",
            desc: "Pertahankan margin operasional positif minimal > 5.0% selama 2 bulan berturut-turut serta cadangkan dana darurat setara 3 bulan sewa.",
          },
        };

        return JSON.stringify(structuredObj, null, 2);
      } catch (_) {}
    }

    return "Berdasarkan prinsip umum manajemen UMKM, pastikan Anda menjaga rasio likuiditas lancar di atas 1.0x dan melakukan validasi potensi pasar serta kepadatan kompetitor sebelum membuka cabang baru.";
  },
};

module.exports = aiService;
