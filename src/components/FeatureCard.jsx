const FeatureCard = ({ icon, iconClass = 'bg-icon-blue', title, description }) => (
  <div className="ft-feature-card">
    <div className={`ft-feat-icon ${iconClass}`}>
      <i className={`bi ${icon}`} />
    </div>
    <h3 className="h5 fw-bold text-dark mb-2">{title}</h3>
    <p className="text-secondary mb-0 ft-feature-desc">{description}</p>
  </div>
)

export default FeatureCard
