import ExpenseDistributionItem from './ExpenseDistributionItem.jsx'
import '../css/ExpenseDistribution.css'

const ExpenseDistribution = () => {
  return (
    <div className="dashboard-card">
      <div className="card-header-dashboard mb-4">
        <div>
          <h3 className="card-title-dashboard">Distribución de Gastos</h3>
          <span className="card-subtitle-dashboard">Gastos mensuales por categoría (Total gastado: $850.000)</span>
        </div>
      </div>

      <div className="row g-3">
        <div className="col-12 col-md-6">
          <ExpenseDistributionItem />
        </div>
      </div>
    </div>
  )
}

export default ExpenseDistribution
