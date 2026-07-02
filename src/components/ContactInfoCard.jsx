const ContactInfoCard = ({ icon, iconClass, label, value, href }) => {
  const Tag = href ? 'a' : 'div'
  const linkProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <Tag className="ct-info-card" {...linkProps}>
      <div className={`ct-info-icon ${iconClass}`}>
        <i className={`bi ${icon}`} />
      </div>
      <div>
        <p className="ct-info-label">{label}</p>
        <p className="ct-info-value">{value}</p>
      </div>
    </Tag>
  )
}

export default ContactInfoCard
