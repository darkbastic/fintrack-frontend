import { Link } from 'react-router-dom'

const CTASection = () => (
  <section className="ft-cta">
    <div className="container ft-cta-inner">
      <div className="row justify-content-center text-center">
        <div className="col-lg-8 col-md-10">

          <span className="badge rounded-pill mb-3 fw-semibold ft-cta-badge">
            <i className="bi bi-rocket-takeoff-fill me-2 text-emerald" />
            Comienza Ahora
          </span>

          <h2 className="ft-cta-title mb-3">
            Empieza hoy a controlar{' '}
            <span className="ft-cta-highlight">
              tu dinero.
            </span>
          </h2>

          <p className="mb-4 ft-cta-desc">
            Únete a miles de personas que ya gestionan sus finanzas con FinTrack.
            Gratis, simple y seguro.
          </p>

          <Link to="/register" className="btn btn-light fw-bold px-5 py-3 rounded-pill shadow-lg ft-cta-btn text-decoration-none">
            <i className="bi bi-person-plus-fill me-2" />
            Crear una cuenta
          </Link>

          <p className="mt-3 ft-cta-footer-text">
            <i className="bi bi-shield-check-fill me-1 ft-cta-check-icon" />
            100% gratuito &nbsp;·&nbsp;
            <i className="bi bi-lock-fill me-1 ft-cta-check-icon" />
            Datos seguros &nbsp;·&nbsp;
            <i className="bi bi-x-circle me-1" />
            Sin compromisos
          </p>

        </div>
      </div>
    </div>
  </section>
)

export default CTASection
