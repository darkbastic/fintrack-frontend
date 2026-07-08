import { useState, useEffect } from 'react';
import CreateMovementModal from '../components/CreateMovementModal.jsx';
import EditMovementModal from '../components/EditMovementModal.jsx';
import ConfirmModal from '../components/ConfirmModal.jsx';
import AlertMessage from '../components/AlertMessage.jsx';
import Loader from '../components/Loader.jsx';
import MovementList from '../components/MovementList.jsx';
import '../css/Movimientos.css';
import { getMovements, deleteMovement } from '../api/movement.api.js';
import { getCategories } from '../api/category.api.js';

const Movimientos = () => {
  // Lista de movimientos traídos del backend
  const [movements, setMovements] = useState([]);
  // Lista de categorías traídas del backend (para alimentar el modal de agregar/editar)
  const [categories, setCategories] = useState([]);
  // Spinner de carga inicial de la página
  const [loading, setLoading] = useState(true);

  // Estados de control para modales
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedMovement, setSelectedMovement] = useState(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [movementToDelete, setMovementToDelete] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Estados para banners de mensajes
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Obtener datos desde el backend secuencialmente (async/await)
  const fetchMovementsAndCategories = async () => {
    try {
      // Cargamos secuencialmente los movimientos y las categorías del usuario
      const movResponse = await getMovements();
      const catResponse = await getCategories();
      
      // Guardamos la respuesta del backend en sus respectivos estados
      setMovements(movResponse.data);
      setCategories(catResponse.data);
    } catch (err) {
      console.error("Error al cargar los movimientos:", err);
      setError("No se pudieron cargar los datos del servidor.");
      setTimeout(() => setError(''), 5000);
    } finally {
      // Desactivamos el spinner de carga al terminar
      setLoading(false);
    }
  };

  // Se ejecuta automáticamente al montar la vista de movimientos []
  useEffect(() => {
    fetchMovementsAndCategories();
  }, []);

  // Función callback que se ejecuta al CREAR un movimiento con éxito
  const handleCreateSuccess = () => {
    setMessage('Movimiento registrado con éxito.');
    setTimeout(() => setMessage(''), 5000);
    // Recarga las transacciones y categorías de nuevo desde el servidor para reflejar los cambios
    fetchMovementsAndCategories();
  };

  // Abre el modal para editar y setea el movimiento seleccionado
  const handleEditClick = (mov) => {
    setSelectedMovement(mov);
    setShowEditModal(true);
  };

  // Función callback que se ejecuta al EDITAR/MODIFICAR un movimiento con éxito
  const handleEditSuccess = () => {
    setMessage('Movimiento modificado con éxito.');
    setTimeout(() => setMessage(''), 5000);
    // Recarga los datos actualizados del servidor
    fetchMovementsAndCategories();
  };

  // Abre el modal de confirmación y setea el ID del movimiento que se desea borrar
  const handleDeleteClick = (id) => {
    setMovementToDelete(id);
    setShowConfirmModal(true);
  };

  // Función que se ejecuta al CONFIRMAR la eliminación del movimiento
  const handleConfirmDelete = async () => {
    if (!movementToDelete) return;
    setDeleteLoading(true);
    setError('');
    setMessage('');

    try {
      // Consumimos el endpoint DELETE del backend enviando el ID
      await deleteMovement(movementToDelete);
      setMessage('Movimiento eliminado con éxito.');
      setTimeout(() => setMessage(''), 5000);
      
      // Recargamos el listado del backend para mostrar los registros restantes
      fetchMovementsAndCategories();
      setShowConfirmModal(false);
    } catch (err) {
      console.error("Error al eliminar movimiento:", err);
      setError("No se pudo eliminar el movimiento del servidor.");
      setTimeout(() => setError(''), 5000);
    } finally {
      setDeleteLoading(false);
      setMovementToDelete(null);
    }
  };

  if (loading) {
    return <Loader message="Cargando tus movimientos..." />;
  }

  return (
    <div className="container-fluid p-0">
      <div className="anim-1">
        {/* ── CABECERA DE LA PÁGINA ── */}
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4">
          <div>
            <h1 className="fw-bold mb-1">Movimientos</h1>
            <p className="text-muted mb-0">Revisa, registra y clasifica tus transacciones financieras en tiempo real.</p>
          </div>
          <button
            className="btn btn-primary rounded-10 px-4 text-white d-flex align-items-center gap-2 btn-new-cat"
            onClick={() => setShowCreateModal(true)}
          >
            <i className="bi bi-plus-lg"></i>
            Nuevo Movimiento
          </button>
        </div>

        {/* Banners de alerta */}
        <AlertMessage type="success">{message}</AlertMessage>
        <AlertMessage type="danger">{error}</AlertMessage>

        {/* ── COMPONENTE DE LISTADO ── */}
        <MovementList
          movements={movements}
          onEdit={handleEditClick}
          onDelete={handleDeleteClick}
        />
      </div>

      {/* ── MODALES DEL MÓDULO ── */}
      
      {/* Modal para Registrar Movimiento */}
      <CreateMovementModal
        show={showCreateModal}
        categories={categories}
        onClose={() => setShowCreateModal(false)}
        onSuccess={handleCreateSuccess}
      />

      {/* Modal para Editar Movimiento */}
      <EditMovementModal
        show={showEditModal}
        categories={categories}
        movement={selectedMovement}
        onClose={() => {
          setShowEditModal(false);
          setSelectedMovement(null);
        }}
        onSuccess={handleEditSuccess}
      />

      {/* Modal para Confirmar Eliminación */}
      <ConfirmModal
        show={showConfirmModal}
        title="¿Eliminar Movimiento?"
        message="¿Estás seguro de que deseas eliminar este movimiento financiero? Esta acción modificará tu balance general."
        confirmText="Eliminar"
        cancelText="Cancelar"
        type="danger"
        loading={deleteLoading}
        onClose={() => {
          setShowConfirmModal(false);
          setMovementToDelete(null);
        }}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default Movimientos;
