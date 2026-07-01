import Navbar           from '../components/Navbar.jsx'
import Footer           from '../components/Footer.jsx'
import MissionVisionCard from '../components/MissionVisionCard.jsx'
import ValueCard        from '../components/ValueCard.jsx'
import { MISSION_VISION, VALUES } from '../data/aboutData.js'
import '../css/About.css'

const About = () => (
  <>
    <Navbar />
    {/* ════════ HERO BANNER ════════ */}
    <section className="ab-hero">
      <div className="ab-hero-blob" />

      <div className="container ab-hero-inner">
        <div className="text-center">
          <span className="badge rounded-pill px-3 py-2 mb-4 anim-1 ab-hero-badge">
            <span className="ab-hero-dot" />
            Conócenos
          </span>

          <h1 className="ft-hero-title ab-hero-title anim-2">
            Sobre FinTrack
          </h1>

          <p className="ft-hero-sub ab-hero-desc anim-3 mx-auto">
            FinTrack es una aplicación web diseñada para ayudar a las personas a organizar sus
            finanzas personales de manera simple e intuitiva. Nuestro objetivo es facilitar el
            registro de ingresos y gastos, permitiendo a los usuarios mantener un mejor control
            de su dinero y tomar decisiones financieras más informadas.
          </p>
        </div>
      </div>
    </section>

    {/* ════════ MISSION & VISION ════════ */}
    <section className="ab-mv-section">
      <div className="container">
        <div className="row g-4 justify-content-center">
          {MISSION_VISION.map(({ icon, iconClass, title, text, colAnim }) => (
            <MissionVisionCard
              key={title}
              icon={icon}
              iconClass={iconClass}
              title={title}
              text={text}
              colAnim={colAnim}
            />
          ))}
        </div>
      </div>
    </section>

    {/* ════════ VALUES ════════ */}
    <section className="ab-values-section">
      <div className="container">

        <div className="text-center mb-5">
          <span className="badge rounded-pill px-3 py-2 mb-2 fw-semibold ab-values-badge">
            <i className="bi bi-stars me-1" />Nuestros valores
          </span>
          <h2 className="fw-bold ab-values-heading">Lo que nos define</h2>
        </div>

        <div className="row g-4 justify-content-center">
          {VALUES.map(({ icon, iconClass, title, desc }, i) => (
            <ValueCard
              key={title}
              icon={icon}
              iconClass={iconClass}
              title={title}
              desc={desc}
              animDelay={`${i * 0.12}s`}
            />
          ))}
        </div>

      </div>
    </section>
    <Footer />
  </>
)

export default About
