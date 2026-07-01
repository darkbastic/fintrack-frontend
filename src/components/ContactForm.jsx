const ContactForm = () => (
  <div className="ct-form-card">
    <h2 className="ct-form-title fw-bold mb-1">Envíanos un mensaje</h2>
    <p className="ct-form-subtitle text-secondary mb-4">Todos los campos son obligatorios.</p>

    <div className="row g-3">
      {/* Nombre */}
      <div className="col-md-6">
        <label htmlFor="ct-name" className="ct-form-label">Nombre completo</label>
        <input
          id="ct-name"
          type="text"
          className="ct-form-control"
          placeholder="Ej. Juan Pérez"
          readOnly
        />
      </div>

      {/* Email */}
      <div className="col-md-6">
        <label htmlFor="ct-email" className="ct-form-label">Correo electrónico</label>
        <input
          id="ct-email"
          type="email"
          className="ct-form-control"
          placeholder="correo@ejemplo.com"
          readOnly
        />
      </div>

      {/* Asunto */}
      <div className="col-12">
        <label htmlFor="ct-subject" className="ct-form-label">Asunto</label>
        <input
          id="ct-subject"
          type="text"
          className="ct-form-control"
          placeholder="¿En qué podemos ayudarte?"
          readOnly
        />
      </div>

      {/* Mensaje */}
      <div className="col-12">
        <label htmlFor="ct-message" className="ct-form-label">Mensaje</label>
        <textarea
          id="ct-message"
          className="ct-form-control ct-form-textarea"
          placeholder="Escribe tu mensaje aquí..."
          readOnly
        />
      </div>

      {/* Submit */}
      <div className="col-12 mt-1">
        <button
          type="button"
          className="ct-submit-btn"
          tabIndex={-1}
          aria-disabled="true"
        >
          <i className="bi bi-send-fill me-2" />
          Enviar mensaje
        </button>
      </div>
    </div>
  </div>
)

export default ContactForm
