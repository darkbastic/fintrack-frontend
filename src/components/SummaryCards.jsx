import SummaryCard from './SummaryCard.jsx'
import '../css/SummaryCards.css'

const SummaryCards = () => {
  return (
    <div className="row g-4 mb-4">
      <div className="col-12 col-md-4">
        <SummaryCard
          title="Balance Neto"
          value="$3.250.000"
          icon="bi-wallet2"
          trend="+8.2%"
          trendType="positive"
          description="vs. mes anterior"
        />
      </div>
      <div className="col-12 col-md-4">
        <SummaryCard
          title="Ingresos Totales"
          value="$4.100.000"
          icon="bi-graph-up-arrow"
          trend="+12.4%"
          trendType="positive"
          description="este mes"
        />
      </div>
      <div className="col-12 col-md-4">
        <SummaryCard
          title="Gastos Totales"
          value="$850.000"
          icon="bi-graph-down-arrow"
          trend="-3.1%"
          trendType="negative"
          description="este mes"
        />
      </div>
    </div>
  )
}

export default SummaryCards
