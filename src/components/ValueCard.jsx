const ValueCard = ({ icon, iconClass, title, desc, animDelay }) => (
  <div className="col-lg-4 col-md-6">
    <div
      className="ft-feature-card text-center h-100"
      style={{ animationDelay: animDelay }}
    >
      <div className={`ft-feat-icon ab-value-icon mx-auto mb-3 ${iconClass}`}>
        <i className={`bi ${icon}`} />
      </div>
      <h3 className="fw-bold mb-2 ab-value-title">{title}</h3>
      <p className="text-secondary mb-0 ab-value-desc">{desc}</p>
    </div>
  </div>
)

export default ValueCard
