import '../css/ExpenseDistribution.css'

const ExpenseDistributionItem = () => {
  return (
    <div className="dist-item-card">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center gap-2">
          <div className="dist-icon-wrapper" style={{ backgroundColor: '#eff6ff', color: '#2563eb' }}>
            <i className="bi bi-cart-fill" />
          </div>
          <span className="dist-category-title">Alimentos y Bebidas</span>
        </div>
        <div className="text-end d-flex align-items-center gap-2">
          <span className="dist-amount">$340.000</span>
          <span className="badge bg-primary-subtle text-primary dist-percentage">40%</span>
        </div>
      </div>
    </div>
  )
}

export default ExpenseDistributionItem
