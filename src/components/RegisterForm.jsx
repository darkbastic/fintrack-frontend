import { useState } from 'react'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [accepted, setAccepted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleRegister = (e) => {
    e.preventDefault()
    setError(null)
    setSuccess(false)

    if (!accepted) {
      setError('Debes aceptar los Términos y Condiciones.')
      return
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.')
      return
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.')
      return
    }

    setLoading(true)

    // Simulación de registro local en el frontend
    setTimeout(() => {
      setSuccess(true)
      setLoading(false)
      // Limpiar el formulario
      setName('')
      setLastname('')
      setEmail('')
      setPassword('')
      setConfirmPassword('')
      setAccepted(false)
    }, 1200)
  }

  return (
    <div className="rg-card">
      <h2 className="rg-title mb-1 text-center text-lg-start">Crear cuenta</h2>
      <p className="rg-subtitle text-center text-lg-start">Registra tus datos para empezar en FinTrack.</p>

      {error && (
        <div className="alert alert-danger py-2 px-3 mb-3 text-start small" role="alert">
          <i className="bi bi-exclamation-triangle-fill me-2"></i>
          {error}
        </div>
      )}

      {success && (
        <div className="alert alert-success py-2 px-3 mb-3 text-start small" role="alert">
          <i className="bi bi-check-circle-fill me-2"></i>
          Registro cuenta exitoso.
        </div>
      )}

      <form onSubmit={handleRegister} className="row g-0">
        {/* Nombre */}
        <div className="col-12 rg-input-wrapper">
          <label htmlFor="rg-name" className="rg-input-label">Nombre completo</label>
          <div className="rg-input-container">
            <i className="bi bi-person rg-input-icon" />
            <input
              id="rg-name"
              type="text"
              className="rg-input"
              placeholder="Ej. Juan"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              type="text"
              className="rg-input"
              placeholder="Ej. Pérez"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
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
              type="email"
              className="rg-input"
              placeholder="correo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              type="password"
              className="rg-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              type="password"
              className="rg-input"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
            disabled={!accepted || loading}
          >
            {loading ? 'Creando cuenta...' : 'Crear cuenta'}
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
