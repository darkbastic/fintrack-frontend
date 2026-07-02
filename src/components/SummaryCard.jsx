import '../css/SummaryCard.css'

const SummaryCard = ({ title, value, icon, trend, trendType = 'neutral', description }) => {
  const getTrendBadgeClass = () => {
    if (trendType === 'positive') return 'trend-badge-positive'
    if (trendType === 'negative') return 'trend-badge-negative'
    return 'trend-badge-neutral'
  };

  const getTrendIcon = () => {
    if (trendType === 'positive') return 'bi-arrow-up-right'
    if (trendType === 'negative') return 'bi-arrow-down-left'
    return 'bi-dash'
  };

  return (
    <div className="ft-summary-card">
      <div className="ft-summary-header">
        <span className="ft-summary-title">{title}</span>
        <div className="ft-summary-icon-wrapper">
          <i className={`bi ${icon}`} />
        </div>
      </div>
      
      <div className="ft-summary-body">
        <h3 className="ft-summary-value">{value}</h3>
      </div>
      
      <div className="ft-summary-footer">
        {trend && (
          <span className={`badge ${getTrendBadgeClass()} me-2`}>
            <i className={`bi ${getTrendIcon()} me-1`} />
            {trend}
          </span>
        )}
        <span className="ft-summary-desc">{description}</span>
      </div>
    </div>
  )
}

export default SummaryCard
