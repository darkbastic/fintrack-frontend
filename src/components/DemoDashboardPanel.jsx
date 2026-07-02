import { PANEL_ROWS } from '../data/landingData'

const DemoDashboardPanel = () => {
  return (
    <div className="ft-panel">
      <p className="ft-dash-label mb-3">Resumen del mes · Junio 2025</p>

      {PANEL_ROWS.map((r) => (
        <div className="ft-panel-row" key={r.label}>
          <span className="ft-panel-label">
            <i className={`bi ${r.icon} me-2 text-white-50`} />
            {r.label}
          </span>
          <span className={`ft-panel-val ${r.cls}`}>{r.val}</span>
        </div>
      ))}

      <div className="ft-panel-row home-panel-total-row">
        <span className="home-panel-total-label">Balance neto</span>
        <span className="ft-panel-val home-panel-total-val">+$5,000</span>
      </div>

      {/* Donut legend as plain text */}
      <div className="text-center mt-4 text-secondary fw-medium">
        Ingresos &nbsp;•&nbsp; Gastos &nbsp;•&nbsp; Ahorro
      </div>
    </div>
  )
}

export default DemoDashboardPanel
