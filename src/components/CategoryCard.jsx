const CategoryCard = ({ category, onEdit, onDelete }) => {
  const { name, is_default, type } = category

  // Seleccionar un icono representativo
  const getIcon = () => {
    return type === "expense" ? "bi-arrow-down-right-circle-fill" : "bi-arrow-up-right-circle-fill"
  }

  // Clases dinámicas según el tipo (con fondo coloreado para todas)
  const avatarClass = type === "expense" 
    ? "bg-danger bg-opacity-10 text-danger"
    : "bg-success bg-opacity-10 text-success"

  return (
    <div className="cat-item-card py-3 px-3 d-flex align-items-center justify-content-between mb-2">
      <div className="d-flex align-items-center gap-3">
        <div className={`cat-avatar ${avatarClass}`}>
          <i className={`bi ${getIcon()}`}></i>
        </div>
        <div>
          <h5 className="mb-0 fw-semibold">{name}</h5>
          {is_default ? (
            <span className="badge bg-secondary bg-opacity-10 text-secondary border border-secondary border-opacity-10 mt-1">
              Sistema
            </span>
          ) : (
            <span className="badge bg-primary bg-opacity-10 text-primary border border-primary border-opacity-10 mt-1">
              Personalizada
            </span>
          )}
        </div>
      </div>
      
      <div className="cat-actions d-flex gap-2">
        {is_default ? (
          <>
            <button className="btn btn-action-cat btn-edit-cat disabled" title="Las categorías de sistema no se pueden editar">
              <i className="bi bi-pencil"></i>
            </button>
            <button className="btn btn-action-cat btn-delete-cat disabled" title="Las categorías de sistema no se pueden eliminar">
              <i className="bi bi-trash"></i>
            </button>
          </>
        ) : (
          <>
            <button 
              className="btn btn-action-cat btn-edit-cat" 
              title="Editar categoría"
              onClick={() => onEdit(category)}
            >
              <i className="bi bi-pencil"></i>
            </button>
            <button 
              className="btn btn-action-cat btn-delete-cat" 
              title="Eliminar categoría"
              onClick={() => onDelete(category.id)}
            >
              <i className="bi bi-trash"></i>
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default CategoryCard
