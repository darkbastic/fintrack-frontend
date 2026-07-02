import SummaryCards from '../components/SummaryCards.jsx'
import ExpenseDistribution from '../components/ExpenseDistribution.jsx'
import RecentMovementsTable from '../components/RecentMovementsTable.jsx'
import '../css/Dashboard.css'

const Dashboard = () => {
  return (
    <div className="container-fluid p-0 anim-1">
      {/* ── ROW 1: CARDS SUPERIORES ── */}
      <SummaryCards />

      {/* ── ROW 2: SECCIÓN CENTRAL (DISTRIBUCIÓN DE GASTOS) ── */}
      <div className="row g-4 mb-4">
        <div className="col-12">
          <ExpenseDistribution />
        </div>
      </div>

      {/* ── ROW 3: TABLA DE ÚLTIMOS MOVIMIENTOS ── */}
      <RecentMovementsTable />
    </div>
  )
}

export default Dashboard
