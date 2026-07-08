import { useState } from "react";
import { createContactMessage } from "../api/contact.api";
import AlertMessage from "./AlertMessage";

const ContactForm = () => {
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // Función controladora para procesar el envío del mensaje de contacto
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      // Consumimos el endpoint REST enviando un objeto JSON estructurado
      await createContactMessage({
        full_name: fullName,
        email,
        subject,
        message
      });
      setSuccessMsg('Mensaje enviado correctamente.');
      setTimeout(() => setSuccessMsg(''), 5000);
      // Reseteamos los campos del formulario tras el envío exitoso
      setFullname('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error("Error al enviar el contacto:", error);
      // Capturamos la respuesta de error o mostramos mensaje genérico
      setErrorMsg(error.response?.data?.message || 'Error al enviar el mensaje.');
      setTimeout(() => setErrorMsg(''), 5000);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="ct-form-card">
      <h2 className="ct-form-title fw-bold mb-1">Envíanos un mensaje</h2>
      <p className="ct-form-subtitle text-secondary mb-4">Todos los campos son obligatorios.</p>

      {/* Alertas para notificar éxito o error de red */}
      <AlertMessage type="success">{successMsg}</AlertMessage>
      <AlertMessage type="danger">{errorMsg}</AlertMessage>

      <form onSubmit={handleSubmit} className="row g-3">
        {/* Nombre */}
        <div className="col-md-6">
          <label htmlFor="ct-name" className="ct-form-label">Nombre completo</label>
          <input
            id="ct-name"
            type="text"
            className="ct-form-control"
            placeholder="Ej. Juan Pérez"
            value={fullName}
            onChange={(e) => setFullname(e.target.value)}
            required
            disabled={loading}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={loading}
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
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        {/* Mensaje */}
        <div className="col-12">
          <label htmlFor="ct-message" className="ct-form-label">Mensaje</label>
          <textarea
            id="ct-message"
            className="ct-form-control ct-form-textarea"
            placeholder="Escribe tu mensaje aquí..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        {/* Submit */}
        <div className="col-12 mt-1">
          <button
            type="submit"
            className="ct-submit-btn border-0 w-100"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Enviando...
              </>
            ) : (
              <>
                <i className="bi bi-send-fill me-2" />
                Enviar mensaje
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
