import { useState } from 'react'
import { Link } from 'react-router-dom'

const RegisterForm = ({ onSubmit }) => {
  const [accepted, setAccepted] = useState(false)

  return (
    <div className="rg-card">
      <h2 className="rg-title mb-1 text-center text-lg-start">Crear cuenta</h2>
      <p className="rg-subtitle text-center text-lg-start">Registra tus datos para empezar en FinTrack.</p>

      <form onSubmit={onSubmit} className="row g-0">
        {/* Nombre */}
        <div className="col-12 rg-input-wrapper">
          <label htmlFor="rg-name" className="rg-input-label">Nombre completo</label>
          <div className="rg-input-container">
            <i className="bi bi-person rg-input-icon" />
            <input
              id="rg-name"
              name="name"
              type="text"
              className="rg-input"
              placeholder="Ej. Juan"
              required
            />
          </div>
        </div>

        {/* Apellido */}
        <div className="col-12 rg-input-wrapper">
          <label htmlFor="rg-surname" className="rg-input-label">Apellido</label>
          <div className="rg-input-container">
            <i className="bi bi-person rg-input-icon" />
            <input
              id="rg-surname"
              name="lastname"
              type="text"
              className="rg-input"
              placeholder="Ej. Pérez"
              required
            />
          </div>
        </div>

        {/* Correo electrónico */}
        <div className="col-12 rg-input-wrapper">
          <label htmlFor="rg-email" className="rg-input-label">Correo electrónico</label>
          <div className="rg-input-container">
            <i className="bi bi-envelope rg-input-icon" />
            <input
              id="rg-email"
              name="email"
              type="email"
              className="rg-input"
              placeholder="correo@ejemplo.com"
              required
            />
          </div>
        </div>

        {/* Contraseña */}
        <div className="col-12 rg-input-wrapper">
          <label htmlFor="rg-password" className="rg-input-label">Contraseña</label>
          <div className="rg-input-container">
            <i className="bi bi-lock rg-input-icon" />
            <input
              id="rg-password"
              name="password"
              type="password"
              className="rg-input"
              placeholder="••••••••"
              required
            />
          </div>
        </div>

        {/* Confirmar contraseña */}
        <div className="col-12 rg-input-wrapper">
          <label htmlFor="rg-confirm-password" className="rg-input-label">Confirmar contraseña</label>
          <div className="rg-input-container">
            <i className="bi bi-lock rg-input-icon" />
            <input
              id="rg-confirm-password"
              name="confirmPassword"
              type="password"
              className="rg-input"
              placeholder="••••••••"
              required
            />
          </div>
        </div>

        {/* Políticas / Términos Checkbox */}
        <div className="col-12 mb-3">
          <div className="form-check text-start">
            <input
              id="rg-policy-check"
              type="checkbox"
              className="form-check-input"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />
            <label htmlFor="rg-policy-check" className="form-check-label text-secondary rg-policy-label">
              Acepto los <a href="#" onClick={e => e.preventDefault()} className="text-primary text-decoration-none fw-semibold">Términos y Condiciones</a> y las <a href="#" onClick={e => e.preventDefault()} className="text-primary text-decoration-none fw-semibold">Políticas de Privacidad</a> de FinTrack.
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="col-12 mt-2">
          <button
            type="submit"
            className="rg-btn-submit"
            disabled={!accepted}
          >
            Crear cuenta
          </button>
        </div>

        {/* Login redirect link */}
        <div className="col-12">
          <p className="rg-footer-text">
            ¿Ya tienes una cuenta?{' '}
            <Link to="/login" className="rg-footer-link">
              Inicia sesión
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
