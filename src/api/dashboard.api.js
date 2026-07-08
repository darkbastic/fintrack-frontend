// src/api/dashboard.api.js
import api from "./api";

/**
 * Obtiene la información agregada del dashboard.
 * @returns {Promise}
 */
export const getDashboardData = () => {
  return api.get("/dashboard");
};
