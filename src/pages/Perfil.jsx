import PersonalInfoForm from '../components/PersonalInfoForm.jsx'
import PasswordForm from '../components/PasswordForm.jsx'
import Loader from '../components/Loader.jsx'
import { useOutletContext } from 'react-router-dom';
import '../css/Perfil.css'

const Perfil = () => {
  // Hook useOutletContext para recuperar los datos compartidos globalmente por el layout principal (InternalLayout)
  const {user, fetchUser} = useOutletContext();

  if (!user) {
    return <Loader message="Cargando perfil..." />;
  }

  return (
    <div className="container-fluid p-0 anim-1">
      {/* ── HEADER CARD (RESUMEN DE PERFIL) ── */}
      <div className="profile-header-card mb-4">
        <div className="d-flex flex-column flex-md-row align-items-center gap-3">
          <div className="profile-avatar fs-2" style={{ width: '70px', height: '70px', borderRadius: '50%' }}>
            {user.name.charAt(0)}{user.lastname.charAt(0)}
          </div>
          <div className="text-center text-md-start">
            <h3 className="fw-bold mb-1">{user.name} {user.lastname}</h3>
            <p className="text-muted mb-0 d-flex align-items-center gap-1 justify-content-center justify-content-md-start">
              <i className="bi bi-envelope-fill"></i> {user.email}
            </p>
          </div>

        </div>
      </div>

      <div className="row g-4">
        {/* ── COLUMNA IZQUIERDA: INFORMACIÓN PERSONAL ── */}
        <div className="col-md-6 col-12">
          <PersonalInfoForm user={user} fetchUser={fetchUser} />
        </div>

        {/* ── COLUMNA DERECHA: CAMBIAR CONTRASEÑA ── */}
        <div className="col-md-6 col-12">
          <PasswordForm />
        </div>
      </div>
    </div>
  )
}

export default Perfil

