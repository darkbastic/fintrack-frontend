import { useState, useEffect } from 'react'
import Loader from '../components/Loader.jsx'
import AlertMessage from '../components/AlertMessage.jsx'
import CategorySection from '../components/CategorySection.jsx'
import CategoryCard from '../components/CategoryCard.jsx'
import CreateCategoryModal from '../components/CreateCategoryModal.jsx'
import EditCategoryModal from '../components/EditCategoryModal.jsx'
import { getCategories, deleteCategory } from '../api/category.api.js'
import ConfirmModal from '../components/ConfirmModal.jsx'
import '../css/Categorias.css'

const Categorias = () => {
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Estados para controlar el modal de confirmación de borrado
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Extraer la función de carga fuera del useEffect para poder reutilizarla
  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      setCategories(response.data);
    } catch (err) {
      console.error("Error al obtener las categorías:", err);
    } finally {
      setLoading(false);
    }
  };

  // Carga inicial
  useEffect(() => {
    fetchCategories();
  }, []);

  // Función que se ejecuta cuando se crea con éxito
  const handleCreateSuccess = () => {
    // Mostramos mensaje de éxito
    setMessage("Categoría creada con éxito.");
    // Desaparece en 5 segundos
    setTimeout(() => setMessage(''), 5000);
    // Recargamos el listado
    fetchCategories();
  };  

  const handleEditClick = (category) => {
    setSelectedCategory(category);
    setShowEditModal(true);
  };

  const handleDeleteClick = (id) => {
    setCategoryToDelete(id);
    setShowConfirmModal(true);
  };

  const handleEditSuccess = () => {
    setMessage("Categoría modificada con éxito.");
    setTimeout(() => setMessage(""), 5000);
    fetchCategories();
  };  

  const handleConfirmDelete = async () => {
    if (!categoryToDelete) return;
    setDeleteLoading(true);
    setError("");
    setMessage("");

    try {
      await deleteCategory(categoryToDelete);
      setMessage("Categoría eliminada con éxito.");
      setTimeout(() => setMessage(""), 5000);
      fetchCategories();
      setShowConfirmModal(false);
      setCategoryToDelete(null);
    } catch (error) {
      console.error("Error al eliminar la categoría:", error);
      setError(error.response?.data?.message || "Error al eliminar la categoría.");
      setTimeout(() => setError(""), 5000);
      setShowConfirmModal(false);
    } finally {
      setDeleteLoading(false);
    }
  };

  // Clasificar categorías según su tipo para mostrarlas en sus columnas
  const expenses = categories.filter(c => c.type === 'expense');
  const incomes = categories.filter(c => c.type === 'income');

  if (loading) {
    return <Loader message="Cargando categorías..." />
  };

  return (
    <div className="container-fluid p-0">
      <div className="anim-1">
        {/* ── CABECERA DE LA PÁGINA ── */}
        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4">
          <div>
            <h1 className="fw-bold mb-1">Categorías</h1>
            <p className="text-muted mb-0">Gestiona las clasificaciones globales y personalizadas para tus movimientos financieros.</p>
          </div>
          <button
            className="btn btn-primary btn-new-cat rounded-10 px-4 text-white d-flex align-items-center gap-2"
            onClick={() => setShowCreateModal(true)}
          >
            <i className="bi bi-plus-lg"></i>
            Nueva Categoría
          </button>
        </div>

        {/* Mensajes de éxito y error animados */}
        <AlertMessage type="success">{message}</AlertMessage>
        <AlertMessage type="danger">{error}</AlertMessage>

        {/* ── CUADRÍCULA DE CATEGORÍAS (GASTOS E INGRESOS) ── */}
        <div className="row g-4">
          {/* Columna Gastos */}
          <div className="col-lg-6 col-12">
            <CategorySection
              title="Gastos"
              description="Categorías para registrar tus salidas de dinero"
              type="expense"
            >
              {expenses.map(cat => (
                <CategoryCard
                  key={cat.id}
                  category={cat}
                  onEdit={handleEditClick}
                  onDelete={handleDeleteClick}
                />
              ))}
            </CategorySection>
          </div>

          {/* Columna Ingresos */}
          <div className="col-lg-6 col-12">
            <CategorySection
              title="Ingresos"
              description="Categorías para registrar tus entradas de dinero"
              type="income"
            >
              {incomes.map(cat => (
                <CategoryCard
                  key={cat.id}
                  category={cat}
                  onEdit={handleEditClick}
                  onDelete={handleDeleteClick}
                />
              ))}
            </CategorySection>
          </div>
        </div>
      </div>

      {/* ── MODALES COMPONETIZADOS (FUERA DE LA ANIMACIÓN PARA EVITAR TRASLACIÓN DE FIXED) ── */}
      <CreateCategoryModal
        show={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSuccess={handleCreateSuccess}
      />

      <EditCategoryModal
        show={showEditModal}
        category={selectedCategory}
        onClose={() => {
          setShowEditModal(false)
          setSelectedCategory(null)
        }}
        onSuccess={handleEditSuccess}
      />

      {/* modal de confirmación reutilizable */}
      <ConfirmModal
        show={showConfirmModal}
        title="¿Eliminar Categoría?"
        message="¿Estás seguro de que deseas eliminar esta categoría? Todos los movimientos asociados perderán esta categoría."
        confirmText="Eliminar"
        cancelText="Cancelar"
        type="danger"
        loading={deleteLoading}
        onClose={() => {
          setShowConfirmModal(false);
          setCategoryToDelete(null);
        }}
        onConfirm={handleConfirmDelete}
      />
    </div>
  )
}

export default Categorias
