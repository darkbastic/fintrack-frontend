const MissionVisionCard = ({ icon, iconClass, title, text, colAnim }) => {
  return (
    <div className={`col-lg-5 col-md-6 ${colAnim}`}>
      <div className="ab-mv-card">
        <div className={`ab-mv-icon ${iconClass}`}>
          <i className={`bi ${icon}`} />
        </div>
        <h2 className="fw-bold mb-3 ab-mv-heading">{title}</h2>
        <p className="ab-mv-text">{text}</p>
      </div>
    </div>
  )
}

export default MissionVisionCard
