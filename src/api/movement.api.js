// src/api/movement.api.js
import api from "./api";

/**
 * Obtiene todos los movimientos del usuario autenticado.
 * @returns {Promise}
 */
export const getMovements = () => {
  return api.get("/movements");
};

/**
 * Registra un nuevo movimiento financiero.
 * @param {Object} data - { description, amount, movement_date, type, category_id }
 * @returns {Promise}
 */
export const createMovement = (data) => {
  return api.post("/movements", data);
};

/**
 * Actualiza un movimiento financiero existente.
 * @param {number|string} id - ID del movimiento a editar.
 * @param {Object} data - { description, amount, movement_date, type, category_id }
 * @returns {Promise}
 */
export const updateMovement = (id, data) => {
  return api.put(`/movements/${id}`, data);
};

/**
 * Elimina un movimiento financiero.
 * @param {number|string} id - ID del movimiento a eliminar.
 * @returns {Promise}
 */
export const deleteMovement = (id) => {
  return api.delete(`/movements/${id}`);
};
