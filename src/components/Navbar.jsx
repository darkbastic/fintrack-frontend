import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ft-navbar fixed-top py-2">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center gap-2 text-decoration-none fw-bold ft-brand" to="/">
          <div className="ft-brand-icon">
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path d="M4 12L8 8L11 10L14 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="14" cy="5" r="1.8" fill="#34d399"/>
            </svg>
          </div>
          <span className="ft-brand-text">
            <span className="fin">Fin</span><span className="track">Track</span>
          </span>
        </Link>

        {/* Mobile toggle */}
        <button className="navbar-toggler border-0 shadow-none" type="button"
          data-bs-toggle="collapse" data-bs-target="#ftNav"
          aria-controls="ftNav" aria-expanded="false" aria-label="Abrir menú">
          <span className="navbar-toggler-icon" />
        </button>

        {/* Collapsible menu */}
        <div className="collapse navbar-collapse" id="ftNav">
          <ul className="navbar-nav mx-auto gap-1">
            <li className="nav-item">
              <Link className="nav-link ft-nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ft-nav-link" to="/about">Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link ft-nav-link" to="/contact">Contacto</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0">
            <Link to="/login" className="btn btn-outline-primary rounded-pill px-4 py-2 fw-semibold ft-nav-btn text-decoration-none">
              Iniciar sesión
            </Link>
            <Link to="/register" className="btn btn-primary rounded-pill px-4 py-2 fw-semibold shadow ft-nav-btn ft-nav-btn--primary text-decoration-none">
              Registrarse
            </Link>
          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
