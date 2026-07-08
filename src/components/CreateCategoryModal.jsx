import { useState } from 'react'
import { createCategory } from '../api/category.api.js' 
import AlertMessage from './AlertMessage'

const CreateCategoryModal = ({ show, onClose, onSuccess }) => {
  const [name, setName] = useState('');
  const [type, setType] = useState('expense'); // 'expense' o 'income'
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!show) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      await createCategory({ name,type });
      setName("");
      setType("expense");
      if (onSuccess) onSuccess();
      onClose();
      
    } catch (error) {
      setError(error.response?.data?.message || "Error al crear categoría");
      setTimeout(() => setError(''), 5000);
    }finally{
      setLoading(false);
    }
  };

  return (
    <div className="modal-backdrop-custom d-flex align-items-center justify-content-center">
      <div className="modal-card-custom p-4 anim-scale-up">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold mb-0">Nueva Categoría</h4>
          <button className="btn-close-modal border-0 bg-transparent text-muted" onClick={onClose}>
            <i className="bi bi-x-lg fs-5"></i>
          </button>
        </div>

        {/* Mensaje de error animado */}
        <AlertMessage type="danger">{error}</AlertMessage>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="profile-input-label">Nombre de la Categoría</label>
            <div className="profile-input-container">
              <i className="bi bi-tag profile-input-icon"></i>
              <input 
                type="text" 
                className="profile-input" 
                placeholder="Ej. Regalos, Gasolina..." 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required 
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="profile-input-label">Tipo de Movimiento</label>
            <div className="segmented-control p-1 d-flex bg-light rounded-12">
              <button
                type="button"
                className={`btn segmented-btn flex-fill d-flex align-items-center justify-content-center gap-2 py-2 rounded-10 border-0 ${type === 'expense' ? 'active-expense' : 'inactive-btn'}`}
                onClick={() => setType('expense')}
              >
                <i className="bi bi-arrow-down-right-circle-fill"></i>
                Gasto
              </button>
              <button
                type="button"
                className={`btn segmented-btn flex-fill d-flex align-items-center justify-content-center gap-2 py-2 rounded-10 border-0 ${type === 'income' ? 'active-income' : 'inactive-btn'}`}
                onClick={() => setType('income')}
              >
                <i className="bi bi-arrow-up-right-circle-fill"></i>
                Ingreso
              </button>
            </div>
          </div>

          <div className="d-flex gap-2 justify-content-end">
            <button type="button" className="btn btn-light rounded-10 px-4 btn-cancel-profile" onClick={onClose} disabled={loading}>
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary rounded-10 px-4 text-white btn-save-profile" disabled={loading} >
              {loading ? "Creando..." : "Crear Categoría"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateCategoryModal
