-- ---- Sequence untuk kode tampil (LOC-{tahun}-{nomor}, FIN-{tahun}-{nomor}) ----
CREATE SEQUENCE IF NOT EXISTS location_code_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE IF NOT EXISTS financial_code_seq START WITH 1 INCREMENT BY 1;

-- ---- business_profiles ----
ALTER TABLE "business_profiles"
  ADD CONSTRAINT "business_profiles_sector_other_chk"
  CHECK (sector <> 'LAINNYA' OR (sector_other IS NOT NULL AND length(trim(sector_other)) > 0));

ALTER TABLE "business_profiles"
  ADD CONSTRAINT "business_profiles_target_chk"
  CHECK (quarterly_revenue_target IS NULL OR quarterly_revenue_target >= 0);

-- ---- analysis_configs ----
ALTER TABLE "analysis_configs"
  ADD CONSTRAINT "analysis_configs_version_chk" CHECK (version_number > 0);

-- Hanya satu versi aktif per modul
CREATE UNIQUE INDEX "analysis_configs_one_active_per_module_idx"
  ON "analysis_configs" ("module") WHERE is_active;

-- ---- location_analyses ----
ALTER TABLE "location_analyses"
  ADD CONSTRAINT "location_analyses_latitude_chk"        CHECK (latitude BETWEEN -90 AND 90),
  ADD CONSTRAINT "location_analyses_longitude_chk"       CHECK (longitude BETWEEN -180 AND 180),
  ADD CONSTRAINT "location_analyses_rent_cost_chk"       CHECK (rent_cost > 0),
  ADD CONSTRAINT "location_analyses_competitor_chk"      CHECK (competitor_count >= 0),
  ADD CONSTRAINT "location_analyses_accessibility_chk"   CHECK (accessibility BETWEEN 1 AND 5),
  ADD CONSTRAINT "location_analyses_market_potential_chk" CHECK (market_potential BETWEEN 1 AND 5),
  ADD CONSTRAINT "location_analyses_score_chk"           CHECK (score BETWEEN 0 AND 100);

-- ---- financial_analyses ----
ALTER TABLE "financial_analyses"
  ADD CONSTRAINT "financial_analyses_period_range_chk"   CHECK (period_end >= period_start),
  ADD CONSTRAINT "financial_analyses_periods_count_chk"  CHECK (periods_analyzed >= 1),
  ADD CONSTRAINT "financial_analyses_risk_index_chk"     CHECK (risk_index BETWEEN 0 AND 100);

-- ---- financial_periods (laba bersih dan ekuitas boleh negatif) ----
ALTER TABLE "financial_periods"
  ADD CONSTRAINT "financial_periods_non_negative_chk"
  CHECK (
    revenue >= 0 AND cogs >= 0 AND operating_expense >= 0 AND
    current_assets >= 0 AND inventory >= 0 AND total_assets >= 0 AND
    current_liabilities >= 0 AND total_liabilities >= 0
  );

-- ---- ai_usages ----
ALTER TABLE "ai_usages"
  ADD CONSTRAINT "ai_usages_status_chk" CHECK (status IN ('SUCCESS', 'FAILED'));
