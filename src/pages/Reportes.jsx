import '../css/Reportes.css'

const Reportes = () => {
  return (
    <div className="container-fluid p-0">
      <div className="card-placeholder-rep">
        <div className="placeholder-icon-rep">
          <i className="bi bi-bar-chart-line-fill text-warning" />
        </div>
        <h1 className="fw-bold mb-2">Reportes</h1>
        <p className="text-secondary mb-0">
          Visualiza gráficos detallados de tus hábitos de consumo, comparativas mensuales y balances acumulados de tus finanzas.
        </p>
      </div>
    </div>
  )
}

export default Reportes
