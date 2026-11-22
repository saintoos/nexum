const locationService = require("../services/location.service");

/**
 * Controller untuk Modul Analisis Kelayakan Lokasi (Metode SAW)
 */

const locationAnalysis = async (req, res, next) => {
  try {
    const result = await locationService.evaluateLocation(req.user.id, req.body);
    res.status(201).json({
      success: true,
      message: "Evaluasi kelayakan lokasi berhasil dihitung.",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getLocationHistory = async (req, res, next) => {
  try {
    const history = await locationService.getHistory(req.user.id, req.query);
    res.status(200).json({
      success: true,
      message: "Riwayat analisis lokasi berhasil diambil.",
      data: history.records,
      pagination: history.pagination,
    });
  } catch (err) {
    next(err);
  }
};

const getLocationDetails = async (req, res, next) => {
  try {
    const details = await locationService.getDetails(req.params.id, req.user.id);
    res.status(200).json({
      success: true,
      message: "Detail analisis lokasi berhasil diambil.",
      data: details,
    });
  } catch (err) {
    next(err);
  }
};

const deleteLocationAnalysis = async (req, res, next) => {
  try {
    const result = await locationService.deleteAnalysis(req.params.id, req.user.id);
    res.status(200).json({
      success: true,
      message: result.message,
      data: { id: result.id },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  locationAnalysis,
  getLocationHistory,
  getLocationDetails,
  deleteLocationAnalysis,
};
