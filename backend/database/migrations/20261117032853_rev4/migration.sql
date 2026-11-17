-- CreateEnum
CREATE TYPE "user_role" AS ENUM ('ADMIN', 'UMKM');

-- CreateEnum
CREATE TYPE "config_module" AS ENUM ('LOCATION', 'FINANCIAL');

-- CreateEnum
CREATE TYPE "location_category" AS ENUM ('LAYAK', 'TIDAK_LAYAK');

-- CreateEnum
CREATE TYPE "risk_level" AS ENUM ('SEHAT', 'WASPADA', 'RISIKO_TINGGI');

-- CreateEnum
CREATE TYPE "chat_role" AS ENUM ('USER', 'ASSISTANT');

-- CreateEnum
CREATE TYPE "log_level" AS ENUM ('INFO', 'WARN', 'ERROR', 'CRITICAL');

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password_hash" VARCHAR(255) NOT NULL,
    "role" "user_role" NOT NULL DEFAULT 'UMKM',
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "business_profiles" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "name" VARCHAR(150) NOT NULL,
    "sector" VARCHAR(50) NOT NULL,
    "sector_other" VARCHAR(100),
    "address" VARCHAR(255) NOT NULL,
    "quarterly_revenue_target" DECIMAL(14,2),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "business_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "analysis_configs" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "module" "config_module" NOT NULL,
    "version_number" INTEGER NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT false,
    "parameters" JSONB NOT NULL,
    "note" VARCHAR(255),
    "created_by" UUID,
    "activated_at" TIMESTAMPTZ(6),
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "analysis_configs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "location_analyses" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "code" VARCHAR(20) NOT NULL,
    "user_id" UUID NOT NULL,
    "business_profile_id" UUID NOT NULL,
    "config_id" UUID NOT NULL,
    "location_name" VARCHAR(150) NOT NULL,
    "district" VARCHAR(100) NOT NULL,
    "latitude" DECIMAL(9,6) NOT NULL,
    "longitude" DECIMAL(9,6) NOT NULL,
    "rent_cost" DECIMAL(14,2) NOT NULL,
    "competitor_count" INTEGER NOT NULL,
    "accessibility" SMALLINT NOT NULL,
    "market_potential" SMALLINT NOT NULL,
    "score" DECIMAL(5,2) NOT NULL,
    "category" "location_category" NOT NULL,
    "details" JSONB NOT NULL,
    "strongest_factor" VARCHAR(30) NOT NULL,
    "weakest_factor" VARCHAR(30) NOT NULL,
    "warnings" JSONB NOT NULL DEFAULT '[]',
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "location_analyses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "financial_analyses" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "code" VARCHAR(20) NOT NULL,
    "user_id" UUID NOT NULL,
    "business_profile_id" UUID NOT NULL,
    "config_id" UUID NOT NULL,
    "file_name" VARCHAR(255) NOT NULL,
    "period_start" DATE NOT NULL,
    "period_end" DATE NOT NULL,
    "periods_analyzed" SMALLINT NOT NULL,
    "ratios" JSONB NOT NULL,
    "rule_results" JSONB NOT NULL,
    "patterns" JSONB NOT NULL DEFAULT '[]',
    "excluded_rules" JSONB NOT NULL DEFAULT '[]',
    "warnings" JSONB NOT NULL DEFAULT '[]',
    "risk_index" DECIMAL(5,2) NOT NULL,
    "risk_level" "risk_level" NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "financial_analyses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "financial_periods" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "business_profile_id" UUID NOT NULL,
    "period_start" DATE NOT NULL,
    "revenue" DECIMAL(18,2) NOT NULL,
    "cogs" DECIMAL(18,2) NOT NULL,
    "operating_expense" DECIMAL(18,2) NOT NULL,
    "net_income" DECIMAL(18,2) NOT NULL,
    "current_assets" DECIMAL(18,2) NOT NULL,
    "inventory" DECIMAL(18,2) NOT NULL,
    "total_assets" DECIMAL(18,2) NOT NULL,
    "current_liabilities" DECIMAL(18,2) NOT NULL,
    "total_liabilities" DECIMAL(18,2) NOT NULL,
    "equity" DECIMAL(18,2) NOT NULL,
    "source_analysis_id" UUID NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "financial_periods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ai_consents" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "allow_context" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ai_consents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ai_usages" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "status" VARCHAR(10) NOT NULL,
    "context_used" BOOLEAN NOT NULL,
    "input_tokens" INTEGER,
    "output_tokens" INTEGER,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ai_usages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "chat_messages" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" UUID NOT NULL,
    "role" "chat_role" NOT NULL,
    "content" TEXT NOT NULL,
    "context_used" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "chat_messages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activity_logs" (
    "id" BIGSERIAL NOT NULL,
    "user_id" UUID,
    "event_type" VARCHAR(50) NOT NULL,
    "level" "log_level" NOT NULL DEFAULT 'INFO',
    "component" VARCHAR(30),
    "error_code" VARCHAR(50),
    "message" VARCHAR(500) NOT NULL,
    "metadata" JSONB,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "activity_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "business_profiles_user_id_key" ON "business_profiles"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "analysis_configs_module_version_number_key" ON "analysis_configs"("module", "version_number");

-- CreateIndex
CREATE UNIQUE INDEX "location_analyses_code_key" ON "location_analyses"("code");

-- CreateIndex
CREATE INDEX "location_analyses_user_id_created_at_idx" ON "location_analyses"("user_id", "created_at" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "financial_analyses_code_key" ON "financial_analyses"("code");

-- CreateIndex
CREATE INDEX "financial_analyses_user_id_created_at_idx" ON "financial_analyses"("user_id", "created_at" DESC);

-- CreateIndex
CREATE INDEX "financial_periods_user_id_period_start_idx" ON "financial_periods"("user_id", "period_start" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "financial_periods_business_profile_id_period_start_key" ON "financial_periods"("business_profile_id", "period_start");

-- CreateIndex
CREATE UNIQUE INDEX "ai_consents_user_id_key" ON "ai_consents"("user_id");

-- CreateIndex
CREATE INDEX "ai_usages_user_id_created_at_idx" ON "ai_usages"("user_id", "created_at" DESC);

-- CreateIndex
CREATE INDEX "chat_messages_user_id_created_at_idx" ON "chat_messages"("user_id", "created_at" DESC);

-- CreateIndex
CREATE INDEX "activity_logs_created_at_idx" ON "activity_logs"("created_at" DESC);

-- CreateIndex
CREATE INDEX "activity_logs_level_created_at_idx" ON "activity_logs"("level", "created_at" DESC);

-- CreateIndex
CREATE INDEX "activity_logs_event_type_created_at_idx" ON "activity_logs"("event_type", "created_at" DESC);

-- AddForeignKey
ALTER TABLE "business_profiles" ADD CONSTRAINT "business_profiles_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "analysis_configs" ADD CONSTRAINT "analysis_configs_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location_analyses" ADD CONSTRAINT "location_analyses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location_analyses" ADD CONSTRAINT "location_analyses_business_profile_id_fkey" FOREIGN KEY ("business_profile_id") REFERENCES "business_profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "location_analyses" ADD CONSTRAINT "location_analyses_config_id_fkey" FOREIGN KEY ("config_id") REFERENCES "analysis_configs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "financial_analyses" ADD CONSTRAINT "financial_analyses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "financial_analyses" ADD CONSTRAINT "financial_analyses_business_profile_id_fkey" FOREIGN KEY ("business_profile_id") REFERENCES "business_profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "financial_analyses" ADD CONSTRAINT "financial_analyses_config_id_fkey" FOREIGN KEY ("config_id") REFERENCES "analysis_configs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "financial_periods" ADD CONSTRAINT "financial_periods_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "financial_periods" ADD CONSTRAINT "financial_periods_business_profile_id_fkey" FOREIGN KEY ("business_profile_id") REFERENCES "business_profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "financial_periods" ADD CONSTRAINT "financial_periods_source_analysis_id_fkey" FOREIGN KEY ("source_analysis_id") REFERENCES "financial_analyses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ai_consents" ADD CONSTRAINT "ai_consents_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ai_usages" ADD CONSTRAINT "ai_usages_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chat_messages" ADD CONSTRAINT "chat_messages_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_logs" ADD CONSTRAINT "activity_logs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
