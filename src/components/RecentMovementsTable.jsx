import '../css/RecentMovementsTable.css'

const RecentMovementsTable = () => {
  return (
    <div className="dashboard-card">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h3 className="card-title-dashboard">Últimos Movimientos</h3>
          <span className="card-subtitle-dashboard">Tus transacciones más recientes</span>
        </div>
      </div>

      <div className="table-responsive">
        <table className="table table-hover align-middle custom-table-dashboard mb-0">
          <thead>
            <tr>
              <th scope="col">Concepto</th>
              <th scope="col" className="d-none d-md-table-cell">Categoría</th>
              <th scope="col">Fecha</th>
              <th scope="col" className="text-end">Monto</th>
            </tr>
          </thead>
          <tbody>
            {/* Movimiento 1 */}
            <tr>
              <td>
                <div className="d-flex align-items-center gap-2">
                  <div className="tx-icon-wrapper tx-icon-wrapper--income">
                    <i className="bi bi-briefcase-fill" />
                  </div>
                  <span className="fw-semibold text-dark tx-concept">Sueldo Mensual</span>
                </div>
              </td>
              <td className="d-none d-md-table-cell">
                <span className="badge bg-light text-dark px-2.5 py-1.5 rounded-pill border tx-category-badge">
                  Trabajo
                </span>
              </td>
              <td>
                <span className="tx-date text-secondary">28 Jun 2026</span>
              </td>
              <td className="text-end fw-bold text-success">
                +$2.500.000
              </td>
            </tr>

            {/* Movimiento 2 */}
            <tr>
              <td>
                <div className="d-flex align-items-center gap-2">
                  <div className="tx-icon-wrapper tx-icon-wrapper--expense">
                    <i className="bi bi-cart-fill" />
                  </div>
                  <span className="fw-semibold text-dark tx-concept">Supermercado Líder</span>
                </div>
              </td>
              <td className="d-none d-md-table-cell">
                <span className="badge bg-light text-dark px-2.5 py-1.5 rounded-pill border tx-category-badge">
                  Alimentos
                </span>
              </td>
              <td>
                <span className="tx-date text-secondary">27 Jun 2026</span>
              </td>
              <td className="text-end fw-bold text-danger">
                -$145.200
              </td>
            </tr>

            {/* Movimiento 3 */}
            <tr>
              <td>
                <div className="d-flex align-items-center gap-2">
                  <div className="tx-icon-wrapper tx-icon-wrapper--expense">
                    <i className="bi bi-play-btn-fill" />
                  </div>
                  <span className="fw-semibold text-dark tx-concept">Suscripción Netflix</span>
                </div>
              </td>
              <td className="d-none d-md-table-cell">
                <span className="badge bg-light text-dark px-2.5 py-1.5 rounded-pill border tx-category-badge">
                  Entretenimiento
                </span>
              </td>
              <td>
                <span className="tx-date text-secondary">25 Jun 2026</span>
              </td>
              <td className="text-end fw-bold text-danger">
                -$12.990
              </td>
            </tr>

            {/* Movimiento 4 */}
            <tr>
              <td>
                <div className="d-flex align-items-center gap-2">
                  <div className="tx-icon-wrapper tx-icon-wrapper--income">
                    <i className="bi bi-cash-coin" />
                  </div>
                  <span className="fw-semibold text-dark tx-concept">Transferencia Bizum</span>
                </div>
              </td>
              <td className="d-none d-md-table-cell">
                <span className="badge bg-light text-dark px-2.5 py-1.5 rounded-pill border tx-category-badge">
                  Otros
                </span>
              </td>
              <td>
                <span className="tx-date text-secondary">22 Jun 2026</span>
              </td>
              <td className="text-end fw-bold text-success">
                +$80.000
              </td>
            </tr>

            {/* Movimiento 5 */}
            <tr>
              <td>
                <div className="d-flex align-items-center gap-2">
                  <div className="tx-icon-wrapper tx-icon-wrapper--expense">
                    <i className="bi bi-car-front-fill" />
                  </div>
                  <span className="fw-semibold text-dark tx-concept">Carga Combustible Copec</span>
                </div>
              </td>
              <td className="d-none d-md-table-cell">
                <span className="badge bg-light text-dark px-2.5 py-1.5 rounded-pill border tx-category-badge">
                  Transporte
                </span>
              </td>
              <td>
                <span className="tx-date text-secondary">20 Jun 2026</span>
              </td>
              <td className="text-end fw-bold text-danger">
                -$45.000
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RecentMovementsTable
