import { NavLink, Link } from 'react-router-dom'
import '../css/Sidebar.css'

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: 'bi-grid-1x2-fill' },
    { name: 'Movimientos', path: '/movimientos', icon: 'bi-arrow-left-right' },
    { name: 'Categorías', path: '/categorias', icon: 'bi-tags-fill' },
    { name: 'Perfil', path: '/perfil', icon: 'bi-person-fill' },
  ]

  // Función simple para cerrar la sesión limpiando el token de autenticación
  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <>
      {/* Mobile Sidebar Backdrop */}
      {isOpen && <div className="sidebar-backdrop d-lg-none" onClick={onClose} />}

      <aside className={`ft-sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebar-header">
          {/* Logo identical to Landing */}
          <Link className="d-flex align-items-center gap-2 text-decoration-none fw-bold ft-brand" to="/dashboard" onClick={onClose}>
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
          
          {/* Close button for Mobile/Tablet */}
          <button className="btn-close btn-close-white d-lg-none shadow-none" type="button" onClick={onClose} aria-label="Close" />
        </div>

        <nav className="sidebar-nav">
          <ul className="list-unstyled m-0 p-0 d-flex flex-column gap-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
                  onClick={onClose}
                >
                  <i className={`bi ${item.icon} sidebar-link-icon`} />
                  <span className="sidebar-link-text">{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <Link to="/" className="sidebar-link logout-link" onClick={handleLogout}>
            <i className="bi bi-box-arrow-left sidebar-link-icon" />
            <span className="sidebar-link-text">Cerrar sesión</span>
          </Link>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
