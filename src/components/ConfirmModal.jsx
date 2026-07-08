const ConfirmModal = ({ 
  show, 
  onClose, 
  onConfirm, 
  title = "Confirmar Acción", 
  message = "¿Estás seguro de realizar esta acción?", 
  confirmText = "Confirmar", 
  cancelText = "Cancelar",
  type = "danger", // 'danger' | 'warning' | 'primary'
  loading = false
}) => {
  if (!show) return null

  // Configuración del icono y color basado en el tipo
  const getIconData = () => {
    if (type === "danger") {
      return { icon: "bi-trash-fill", classes: "bg-danger bg-opacity-10 text-danger" }
    }
    if (type === "warning") {
      return { icon: "bi-exclamation-triangle-fill", classes: "bg-warning bg-opacity-10 text-warning" }
    }
    return { icon: "bi-info-circle-fill", classes: "bg-primary bg-opacity-10 text-primary" }
  }

  // Configuración del botón principal de confirmación basado en el tipo
  const getBtnClass = () => {
    if (type === "danger") return "btn-danger"
    if (type === "warning") return "btn-warning text-dark"
    return "btn-primary"
  }

  const iconData = getIconData()

  return (
    <div className="modal-backdrop-custom d-flex align-items-center justify-content-center">
      <div className="modal-card-custom p-4 anim-scale-up text-center" style={{ maxWidth: '400px' }}>
        {/* Icono Redondo */}
        <div 
          className={`mx-auto rounded-circle d-flex align-items-center justify-content-center mb-3 ${iconData.classes}`} 
          style={{ width: '60px', height: '60px', fontSize: '1.65rem' }}
        >
          <i className={`bi ${iconData.icon}`}></i>
        </div>

        {/* Título y Mensaje */}
        <h4 className="fw-bold mb-2 text-dark">{title}</h4>
        <p className="text-muted small mb-4">{message}</p>

        {/* Botones de Acción */}
        <div className="d-flex gap-2 justify-content-center">
          <button 
            type="button" 
            className="btn btn-light rounded-10 px-4 btn-cancel-profile" 
            onClick={onClose} 
            disabled={loading}
          >
            {cancelText}
          </button>
          <button 
            type="button" 
            className={`btn rounded-10 px-4 text-white ${getBtnClass()}`} 
            onClick={onConfirm} 
            disabled={loading}
          >
            {loading ? "Procesando..." : confirmText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal
