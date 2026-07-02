import Navbar      from '../components/Navbar.jsx'
import Footer      from '../components/Footer.jsx'
import ContactForm from '../components/ContactForm.jsx'
import ContactInfoCard from '../components/ContactInfoCard.jsx'
import FaqItem     from '../components/FaqItem.jsx'
import { CONTACT_INFO, FAQS } from '../data/contactData'
import '../css/Contact.css'

const Contact = () => (
  <>
    <Navbar />

    {/* ════════ HERO ════════ */}
    <section className="ct-hero">
      <div className="ct-hero-blob" />
      <div className="container ct-hero-inner">
        <div className="text-center">
          <span className="badge rounded-pill px-3 py-2 mb-4 anim-1 ct-hero-badge">
            <span className="ct-hero-dot" />
            Estamos para ayudarte
          </span>
          <h1 className="ft-hero-title ct-hero-title anim-2">
            Contáctanos
          </h1>
          <p className="ft-hero-sub ct-hero-desc anim-3 mx-auto">
            ¿Tienes dudas, sugerencias o simplemente quieres conocer más sobre FinTrack?
            Estaremos encantados de ayudarte. Completa el formulario y nos pondremos en
            contacto contigo lo antes posible.
          </p>
        </div>
      </div>
    </section>

    {/* ════════ FORM + INFO ════════ */}
    <section className="ct-main">
      <div className="container">
        <div className="row g-4 align-items-start">

          {/* ── Form component ── */}
          <div className="col-lg-7 anim-1">
            <ContactForm />
          </div>

          {/* ── Contact info cards ── */}
          <div className="col-lg-5 anim-2">
            <div className="d-flex flex-column gap-3">
              {CONTACT_INFO.map((info) => (
                <ContactInfoCard
                  key={info.label}
                  icon={info.icon}
                  iconClass={info.iconClass}
                  label={info.label}
                  value={info.value}
                  href={info.href}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* ════════ FAQ ════════ */}
    <section className="ct-faq-section">
      <div className="container">

        <div className="text-center mb-5">
          <span className="badge rounded-pill px-3 py-2 mb-2 fw-semibold ct-faq-badge">
            <i className="bi bi-question-circle-fill me-1" />Preguntas frecuentes
          </span>
          <h2 className="fw-bold ct-faq-heading">Lo que más nos preguntan</h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="accordion ct-accordion" id="faqAccordion">
              {FAQS.map((faq, index) => (
              <FaqItem
                key={faq.id}
                id={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={index === 0}
              />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>

    <Footer />
  </>
)

export default Contact
