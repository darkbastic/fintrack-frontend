import { useState } from 'react';
import AlertMessage from './AlertMessage';
// Importamos la llamada API que envía la transacción al backend
import { createMovement } from '../api/movement.api.js';

const CreateMovementModal = ({ show, onClose, onSuccess, categories = [] }) => {
  const [concept, setConcept] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [type, setType] = useState('expense'); // 'expense' o 'income'
  const [categoryId, setCategoryId] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!show) return null;

  // Filtramos categorías según el tipo seleccionado para que se adapte en tiempo real
  const filteredCategories = categories.filter(cat => cat.type === type);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    if (!concept.trim()) {
      setError('Por favor, ingresa un concepto.');
      setLoading(false);
      return;
    }
    if (!amount || Number(amount) <= 0) {
      setError('Por favor, ingresa un monto válido mayor a 0.');
      setLoading(false);
      return;
    }
    if (!categoryId) {
      setError('Por favor, selecciona una categoría.');
      setLoading(false);
      return;
    }

    try {
      // Consumimos el servicio POST del backend enviando las propiedades del modelo de la base de datos
      await createMovement({
        description: concept,
        amount: Number(amount),
        movement_date: date,
        type,
        category_id: Number(categoryId)
      });

      // Si es exitoso, reseteamos el formulario a sus valores por defecto
      setConcept('');
      setAmount('');
      setDate(new Date().toISOString().split('T')[0]);
      setType('expense');
      setCategoryId('');
      
      // Llamamos a la callback de éxito del padre para recargar la lista
      if (onSuccess) onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || 'Error al registrar el movimiento.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-backdrop-custom d-flex align-items-center justify-content-center">
      <div className="modal-card-custom p-4 anim-scale-up" style={{ maxWidth: '480px', width: '100%' }}>
        {/* Encabezado */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold mb-0">Nuevo Movimiento</h4>
          <button className="btn-close-modal border-0 bg-transparent text-muted" onClick={onClose}>
            <i className="bi bi-x-lg fs-5"></i>
          </button>
        </div>

        {/* Error en validaciones ficticias */}
        <AlertMessage type="danger">{error}</AlertMessage>

        <form onSubmit={handleSubmit}>
          {/* Concepto */}
          <div className="mb-3">
            <label className="profile-input-label">Concepto / Descripción</label>
            <div className="profile-input-container">
              <i className="bi bi-chat-left-text profile-input-icon"></i>
              <input 
                type="text" 
                className="profile-input" 
                placeholder="Ej. Supermercado, Sueldo Freelance..." 
                value={concept}
                onChange={(e) => setConcept(e.target.value)}
                required 
              />
            </div>
          </div>

          {/* Monto */}
          <div className="mb-3">
            <label className="profile-input-label">Monto ($)</label>
            <div className="profile-input-container">
              <i className="bi bi-cash-coin profile-input-icon"></i>
              <input 
                type="number" 
                step="any"
                className="profile-input" 
                placeholder="0.00" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required 
              />
            </div>
          </div>

          {/* Fecha */}
          <div className="mb-3">
            <label className="profile-input-label">Fecha</label>
            <div className="profile-input-container">
              <i className="bi bi-calendar-event profile-input-icon"></i>
              <input 
                type="date" 
                className="profile-input" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required 
              />
            </div>
          </div>

          {/* Tipo (Gasto o Ingreso) */}
          <div className="mb-3">
            <label className="profile-input-label">Tipo de Movimiento</label>
            <div className="segmented-control p-1 d-flex bg-light rounded-12">
              <button
                type="button"
                className={`btn segmented-btn flex-fill d-flex align-items-center justify-content-center gap-2 py-2 rounded-10 border-0 ${type === 'expense' ? 'active-expense' : 'inactive-btn'}`}
                onClick={() => {
                  setType('expense');
                  setCategoryId(''); // Limpiar selección de categoría
                }}
              >
                <i className="bi bi-arrow-down-right-circle-fill"></i>
                Gasto
              </button>
              <button
                type="button"
                className={`btn segmented-btn flex-fill d-flex align-items-center justify-content-center gap-2 py-2 rounded-10 border-0 ${type === 'income' ? 'active-income' : 'inactive-btn'}`}
                onClick={() => {
                  setType('income');
                  setCategoryId(''); // Limpiar selección de categoría
                }}
              >
                <i className="bi bi-arrow-up-right-circle-fill"></i>
                Ingreso
              </button>
            </div>
          </div>

          {/* Categoría */}
          <div className="mb-4">
            <label className="profile-input-label">Categoría</label>
            <select
              className="filter-select"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              required
            >
              <option value="">-- Selecciona una categoría --</option>
              {filteredCategories.map(cat => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Botones de acción */}
          <div className="d-flex gap-2 justify-content-end">
            <button type="button" className="btn btn-light rounded-10 px-4 btn-cancel-profile" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary rounded-10 px-4 text-white btn-save-profile" disabled={loading}>
              {loading ? 'Registrando...' : 'Registrar Movimiento'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateMovementModal;
