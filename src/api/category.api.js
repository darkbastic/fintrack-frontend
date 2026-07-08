// src/api/category.api.js
import api from "./api";

/**
 * Obtiene todas las categorías del usuario autenticado.
 * @returns {Promise}
 */
export const getCategories = () => {
  return api.get("/categories");
};

/**
 * Registra una nueva categoría.
 * @param {Object} data - { name, type }
 * @returns {Promise}
 */
export const createCategory = (data) => {
  return api.post("/categories", data);
};

/**
 * Actualiza una categoría existente.
 * @param {number|string} id - ID de la categoría a editar.
 * @param {Object} data - { name, type }
 * @returns {Promise}
 */
export const updateCategory = (id, data) => {
  return api.put(`/categories/${id}`, data);
};

/**
 * Elimina una categoría.
 * @param {number|string} id - ID de la categoría a eliminar.
 * @returns {Promise}
 */
export const deleteCategory = (id) => {
  return api.delete(`/categories/${id}`);
};
