// src/api/stats.api.js
import api from "./api";

/**
 * Obtiene las estadísticas públicas globales de la aplicación.
 * @returns {Promise}
 */
export const getAppStats = () => {
  return api.get("/appstats");
};
