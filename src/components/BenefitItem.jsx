const BenefitItem = ({ icon, iconClass, title, desc }) => {
  return (
    <div className="ft-benefit-item">
      <div className={`ft-benefit-icon ${iconClass}`}>
        <i className={`bi ${icon}`} />
      </div>
      <div>
        <p className="fw-bold text-dark mb-1 ft-benefit-title">{title}</p>
        <p className="text-secondary mb-0 ft-benefit-desc">{desc}</p>
      </div>
    </div>
  )
}

export default BenefitItem
