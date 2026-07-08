const CategorySection = ({ title, description, type, children }) => {
  const isExpense = type === "expense"

  return (
    <div className="cat-section-card">
      <div className="d-flex align-items-center gap-2 mb-4">
        <div className={`cat-type-icon-wrapper ${isExpense ? "bg-danger bg-opacity-10 text-danger" : "bg-success bg-opacity-10 text-success"}`}>
          <i className={`bi ${isExpense ? "bi-arrow-down-right-circle-fill" : "bi-arrow-up-right-circle-fill"}`}></i>
        </div>
        <div>
          <h3 className="cat-section-title mb-0">{title}</h3>
          <small className="text-muted">{description}</small>
        </div>
      </div>

      <div className="cat-list-wrapper">
        {children}
      </div>
    </div>
  )
}

export default CategorySection
