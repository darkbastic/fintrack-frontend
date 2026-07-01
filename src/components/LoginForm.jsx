import { Link } from 'react-router-dom'

const LoginForm = () => (
  <div className="rg-card">
    <h2 className="rg-title mb-1 text-center text-lg-start">Iniciar sesión</h2>
    <p className="rg-subtitle text-center text-lg-start">Ingresa tus credenciales para acceder a tu cuenta.</p>

    <div className="row g-0">
      {/* Correo electrónico */}
      <div className="col-12 rg-input-wrapper">
        <label htmlFor="lg-email" className="rg-input-label">Correo electrónico</label>
        <div className="rg-input-container">
          <i className="bi bi-envelope rg-input-icon" />
          <input
            id="lg-email"
            type="email"
            className="rg-input"
            placeholder="correo@ejemplo.com"         
          />
        </div>
      </div>

      {/* Contraseña */}
      <div className="col-12 rg-input-wrapper">
        <label htmlFor="lg-password" className="rg-input-label">Contraseña</label>
        <div className="rg-input-container">
          <i className="bi bi-lock rg-input-icon" />
          <input
            id="lg-password"
            type="password"
            className="rg-input"
            placeholder="••••••••"
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="col-12 mt-2">
        <button
          type="button"
          className="rg-btn-submit"
          tabIndex={-1}
          aria-disabled="true"
        >
          Iniciar sesión
        </button>
      </div>

      {/* Register redirect link */}
      <div className="col-12">
        <p className="rg-footer-text">
          ¿No tienes una cuenta?{' '}
          <Link to="/register" className="rg-footer-link">
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  </div>
)

export default LoginForm
