const Loader = ({ message = "Cargando..." }) => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-5 gap-2" style={{ minHeight: "300px" }}>
      <i className="bi bi-arrow-clockwise text-primary fs-1 animate-spin"></i>
      <span className="text-muted fw-semibold">{message}</span>
    </div>
  )
}

export default Loader
