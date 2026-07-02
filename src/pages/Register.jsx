import { Link } from 'react-router-dom'
import RegisterForm from '../components/RegisterForm.jsx'
import '../css/Register.css'

const Register = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row g-0 rg-container">

        {/* ── LADO IZQUIERDO: ILUSTRACIÓN/MOCKUP (Solo escritorio) ── */}
        <div className="col-lg-6 d-none d-lg-flex rg-left-side">
          <div className="rg-left-blob" />
          <div className="rg-left-content">
            <h1 className="rg-left-title">
              Empieza a planificar tu <span className="highlight">futuro financiero</span>
            </h1>
            <p className="rg-left-subtitle">
              Únete a FinTrack para registrar tus movimientos, analizar tus consumos y alcanzar tus metas de ahorro de forma simple.
            </p>

            {/* Dashboard Mockup Representativo */}
            <div className="rg-mockup text-start">
              <div className="rg-mockup-header">
                <div className="rg-mockup-dots">
                  <span className="rg-mockup-dot" />
                  <span className="rg-mockup-dot" />
                  <span className="rg-mockup-dot" />
                </div>
                <span className="rg-mockup-badge">
                  <i className="bi bi-target me-1" /> Meta: Vacaciones 2026
                </span>
              </div>

              <div className="rg-mockup-stats">
                <div className="rg-mockup-stat">
                  <span className="rg-mockup-stat-label">Total Ahorrado</span>
                  <span className="rg-mockup-stat-val rg-mockup-stat-val--positive">
                    $1.200.000
                  </span>
                </div>
                <div className="rg-mockup-stat">
                  <span className="rg-mockup-stat-label">Progreso Mensual</span>
                  <span className="rg-mockup-stat-val">
                    + 18.5% este mes
                  </span>
                </div>
              </div>

              {/* Minichart animado representativo */}
              <div className="rg-mockup-bar-chart">
                <div className="rg-mockup-bar rg-mockup-bar--primary" style={{ height: '35%' }} />
                <div className="rg-mockup-bar" style={{ height: '55%' }} />
                <div className="rg-mockup-bar rg-mockup-bar--secondary" style={{ height: '45%' }} />
                <div className="rg-mockup-bar" style={{ height: '70%' }} />
                <div className="rg-mockup-bar rg-mockup-bar--primary" style={{ height: '60%' }} />
                <div className="rg-mockup-bar rg-mockup-bar--secondary" style={{ height: '90%' }} />
                <div className="rg-mockup-bar" style={{ height: '80%' }} />
              </div>
            </div>

          </div>
        </div>

        {/* ── LADO DERECHO: FORMULARIO DE REGISTRO ── */}
        <div className="col-lg-6 col-12 rg-right-side">
          <div className="rg-card-wrapper">
            {/* Botón Volver */}
            <Link to="/" className="rg-back-btn">
              <i className="bi bi-arrow-left" />
              Volver al inicio
            </Link>
            <RegisterForm />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Register
