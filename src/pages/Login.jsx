import { Link } from 'react-router-dom'
import LoginForm from '../components/LoginForm.jsx'
import '../css/Register.css' // Import for shared form card & input styles
import '../css/Login.css'    // Import for layout specifics

const Login = () => (
  <div className="container-fluid p-0">
    <div className="row g-0 lg-container">

      {/* ── LADO IZQUIERDO: ILUSTRACIÓN/MOCKUP (Solo escritorio) ── */}
      <div className="col-lg-6 d-none d-lg-flex lg-left-side">
        <div className="lg-left-blob" />
        <div className="lg-left-content">
          <h1 className="lg-left-title">
            Bienvenido de nuevo a <span className="highlight">FinTrack</span>
          </h1>
          <p className="lg-left-subtitle">
            Accede a tu cuenta para continuar monitoreando tus finanzas, analizando tus gastos y gestionando tus metas financieras de manera clara.
          </p>

          {/* Dashboard Mockup Representativo (Diferente al de Registro) */}
          <div className="lg-mockup text-start">
            <div className="lg-mockup-header">
              <div className="lg-mockup-dots">
                <span className="lg-mockup-dot" />
                <span className="lg-mockup-dot" />
                <span className="lg-mockup-dot" />
              </div>
              <span className="lg-mockup-badge">
                <i className="bi bi-bar-chart-line-fill me-1" /> Resumen Mensual
              </span>
            </div>

            <div className="lg-mockup-stats">
              <div className="lg-mockup-stat">
                <span className="lg-mockup-stat-label">Ingresos Totales</span>
                <span className="lg-mockup-stat-val lg-mockup-stat-val--positive">
                  +$2.450.000
                </span>
              </div>
              <div className="lg-mockup-stat">
                <span className="lg-mockup-stat-label">Gastos Totales</span>
                <span className="lg-mockup-stat-val" style={{ color: '#f87171' }}>
                  -$1.250.000
                </span>
              </div>
            </div>

            {/* Minichart animado representativo */}
            <div className="rg-mockup-bar-chart">
              <div className="rg-mockup-bar rg-mockup-bar--secondary" style={{ height: '75%' }} />
              <div className="rg-mockup-bar" style={{ height: '35%' }} />
              <div className="rg-mockup-bar rg-mockup-bar--primary" style={{ height: '55%' }} />
              <div className="rg-mockup-bar" style={{ height: '20%' }} />
              <div className="rg-mockup-bar rg-mockup-bar--secondary" style={{ height: '80%' }} />
              <div className="rg-mockup-bar rg-mockup-bar--primary" style={{ height: '65%' }} />
              <div className="rg-mockup-bar" style={{ height: '45%' }} />
            </div>
          </div>

        </div>
      </div>

      {/* ── LADO DERECHO: FORMULARIO DE INICIO DE SESIÓN ── */}
      <div className="col-lg-6 col-12 lg-right-side">
        <div className="lg-card-wrapper">
          {/* Botón Volver */}
          <Link to="/" className="lg-back-btn">
            <i className="bi bi-arrow-left" />
            Volver al inicio
          </Link>
          <LoginForm />
        </div>
      </div>

    </div>
  </div>
)

export default Login
