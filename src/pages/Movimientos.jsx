import '../css/Movimientos.css'

const Movimientos = () => {
  return (
    <div className="container-fluid p-0">
      <div className="card-placeholder">
        <div className="placeholder-icon">
          <i className="bi bi-arrow-left-right text-primary" />
        </div>
        <h1 className="fw-bold mb-2">Movimientos</h1>
        <p className="text-secondary mb-0">
          Aquí podrás consultar, filtrar y administrar todo el historial de tus transacciones (ingresos y egresos).
        </p>
      </div>
    </div>
  )
}

export default Movimientos
