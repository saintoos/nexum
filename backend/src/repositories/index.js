const userRepository = require("./user.repository");
const businessProfileRepository = require("./businessProfile.repository");
const locationAnalysisRepository = require("./locationAnalysis.repository");
const financialAnalysisRepository = require("./financialAnalysis.repository");
const financialPeriodRepository = require("./financialPeriod.repository");
const analysisConfigRepository = require("./analysisConfig.repository");
const aiConsentRepository = require("./aiConsent.repository");
const chatMessageRepository = require("./chatMessage.repository");
const aiUsageRepository = require("./aiUsage.repository");
const activityLogRepository = require("./activityLog.repository");

module.exports = {
  userRepository,
  businessProfileRepository,
  locationAnalysisRepository,
  financialAnalysisRepository,
  financialPeriodRepository,
  analysisConfigRepository,
  aiConsentRepository,
  chatMessageRepository,
  aiUsageRepository,
  activityLogRepository,
};
