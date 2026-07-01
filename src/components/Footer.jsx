import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="ft-footer py-5">
      <div className="container">
        <div className="row g-4">

          {/* Brand */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-2 ft-footer-brand-title">
              <div className="ft-brand-icon">
                <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
                  <path d="M4 12L8 8L11 10L14 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="14" cy="5" r="1.8" fill="#34d399"/>
                </svg>
              </div>
              <span>
                <span className="ft-footer-brand-fin">Fin</span>
                <span className="ft-footer-brand-track">Track</span>
              </span>
            </div>
            <p className="mb-3 ft-footer-brand-desc">
              Tu asistente financiero personal. Organiza y mejora tus hábitos de dinero.
            </p>
            <div className="d-flex gap-2">
              {[
                ['bi-linkedin', 'LinkedIn', 'https://www.linkedin.com/in/basti%C3%A1n-ib%C3%A1%C3%B1ez-betancourt-b35a67326/'],
                ['bi-github', 'GitHub', 'https://github.com/darkbastic']
              ].map(([icon, label, url]) => (
                <a key={icon} href={url} target="_blank" rel="noopener noreferrer" className="ft-social" aria-label={label} title={label}>
                  <i className={`bi ${icon}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="col-lg-2 d-none d-lg-block" />

          {/* Navigation */}
          <div className="col-lg-2 col-md-3 col-6">
            <p className="ft-footer-heading">Navegación</p>
            <Link to="/" className="ft-footer-link">Inicio</Link>
            <Link to="/about" className="ft-footer-link">Nosotros</Link>
            <Link to="/contact" className="ft-footer-link">Contacto</Link>
          </div>

          {/* Account */}
          <div className="col-lg-2 col-md-3 col-6">
            <p className="ft-footer-heading">Cuenta</p>
            <Link to="/login" className="ft-footer-link">Iniciar sesión</Link>
            <Link to="/register" className="ft-footer-link">Registrarse</Link>
            <span className="ft-footer-link">Recuperar contraseña</span>
          </div>

          {/* Legal */}
          <div className="col-lg-2 col-md-3 col-6">
            <p className="ft-footer-heading">Legal</p>
            <span className="ft-footer-link">Privacidad</span>
            <span className="ft-footer-link">Términos</span>
            <span className="ft-footer-link">Cookies</span>
          </div>

        </div>

        <hr className="ft-footer-divider" />

        <div className="d-flex justify-content-center">
          <p className="mb-0 ft-footer-copy">
            © {year} <span className="ft-footer-copy-highlight">FinTrack</span>. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
