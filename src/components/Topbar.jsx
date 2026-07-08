import { useLocation } from 'react-router-dom'
import '../css/Topbar.css'

const Topbar = ({ onToggleSidebar, user, loading }) => {
  const location = useLocation()

  // Dynamic header based on the active route
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/dashboard':
        return 'Dashboard'
      case '/movimientos':
        return 'Movimientos'
      case '/categorias':
        return 'Categorías'
      case '/perfil':
        return 'Mi Perfil'
      default:
        return 'FinTrack'
    }
  }

  const getAvatarInitials = () => {
    if (!user) {
      return "U";
    }
    const firstName = user.name ? user.name[0] : "";
    const lastName = user.lastname ? user.lastname[0] : "";
    return (firstName + lastName).toUpperCase() || "U";
  }

  return (
    <header className="ft-topbar">
      <div className="topbar-left">
        {/* Hamburger Toggle (Mobile/Tablet only) */}
        <button
          className="btn border-0 p-2 me-2 d-lg-none text-dark topbar-toggle"
          type="button"
          onClick={onToggleSidebar}
          aria-label="Toggle Navigation"
        >
          <i className="bi bi-list fs-3" />
        </button>

        {/* Dynamic Title */}
        <h2 className="topbar-title mb-0">{getPageTitle()}</h2>
      </div>

      <div className="topbar-right d-flex align-items-center gap-3">
        {/* Profile Dropdown Mockup */}
        <div className="d-flex align-items-center gap-2 profile-info">
          <div className="profile-avatar">{getAvatarInitials()}</div>
          <div className="d-none d-sm-block text-start">
            <div className="profile-role">Bienvenido</div>
            <div className="profile-user">
              {loading ? "Cargando..." : user ? `${user.name} ${user.lastname}` : "Invitado"}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Topbar
