import { Link } from 'react-router-dom'
import Navbar      from '../components/Navbar.jsx'
import Footer      from '../components/Footer.jsx'
import FeatureCard from '../components/FeatureCard'
import CTASection  from '../components/CTASection'
import BenefitItem from '../components/BenefitItem.jsx'
import DemoDashboardPanel from '../components/DemoDashboardPanel.jsx'
import { FEATURES, BENEFITS, HERO_STATS } from '../data/landingData'
import '../css/Home.css'

const Home = () => {
  return (
    <>
      <Navbar />

      {/* ════════ HERO ════════ */}
      <section className="ft-hero" id="hero">
        <div className="container home-hero-container">
          <div className="row align-items-center gy-5">

            {/* Copy */}
            <div className="col-lg-12">
              <span className="badge rounded-pill mb-3 px-3 py-2 anim-1 home-hero-badge">
                <span className="home-hero-badge-dot" />
                Gestión financiera inteligente
              </span>

              <h1 className="ft-hero-title mb-3 anim-2">
                Toma el control de tus <span className="highlight">finanzas personales.</span>
              </h1>

              <p className="ft-hero-sub mb-4 anim-3 home-hero-desc">
                Administra tus ingresos y gastos de forma simple, inteligente y segura.
                FinTrack te ayuda a comprender tus hábitos financieros para tomar mejores decisiones.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4 anim-3">
                <Link to="/login" className="btn btn-light fw-bold rounded-pill px-4 py-3 home-hero-btn-login text-decoration-none">
                  <i className="bi bi-person-fill me-2" />Iniciar sesión
                </Link>
                <Link to="/register" className="btn fw-semibold rounded-pill px-4 py-3 home-hero-btn-register text-decoration-none">
                  <i className="bi bi-person-plus-fill me-2" />Registrarse
                </Link>
              </div>

              {/* Stats */}
              <div className="d-flex gap-4 flex-wrap anim-4">
                {HERO_STATS.map(({ val, label }) => (
                  <div key={label}>
                    <div className="fw-bold text-white home-stat-val">{val}</div>
                    <div className="home-stat-label">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ FEATURES ════════ */}
      <section className="bg-white home-features-section" id="features">
        <div className="container">

          <div className="text-center mb-5">
            <span className="badge rounded-pill px-3 py-2 mb-2 fw-semibold home-badge-blue">
              <i className="bi bi-stars me-1" />Características
            </span>
            <h2 className="fw-bold home-section-title">
              Todo lo que necesitas para<br />gestionar tu dinero
            </h2>
            <p className="text-secondary mx-auto mt-2 home-section-desc">
              FinTrack reúne las herramientas esenciales en una sola aplicación clara y fácil de usar.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {FEATURES.map((f) => (
              <div className="col-lg-4 col-md-6 d-flex" key={f.title}>
                <FeatureCard icon={f.icon} iconClass={f.iconClass} title={f.title} description={f.desc} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ════════ BENEFITS ════════ */}
      <section id="benefits" className="home-benefits-section">
        <div className="container">
          <div className="row align-items-center gy-5">

            {/* Left: list */}
            <div className="col-lg-6">
              <span className="badge rounded-pill px-3 py-2 mb-3 fw-semibold home-badge-blue">
                <i className="bi bi-check-circle-fill me-1" />¿Por qué FinTrack?
              </span>
              <h2 className="fw-bold mb-2 home-section-title">
                Más que un registro<br />de gastos.
              </h2>
              <p className="text-secondary mb-4 home-benefits-desc">
                FinTrack combina simplicidad y potencia para que entiendas tu dinero como nunca antes.
              </p>

              {BENEFITS.map((b) => (
                <BenefitItem
                  key={b.title}
                  icon={b.icon}
                  iconClass={b.iconClass}
                  title={b.title}
                  desc={b.desc}
                />
              ))}
            </div>

            {/* Right: panel */}
            <div className="col-lg-6">
              <DemoDashboardPanel />
            </div>

          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <CTASection />

      <Footer />
    </>
  )
}

export default Home
