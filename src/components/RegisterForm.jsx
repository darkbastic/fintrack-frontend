import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../api/user.api";
import AlertMessage from "./AlertMessage";

const RegisterForm = () => {
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [accepted, setAccepted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setLoading(true);

    try {
      const { confirmPassword, ...userData } = form;
      const response = await registerUser(userData);
      console.log(response.data);
      setMessage("Usuario registrado correctamente.");
      setForm({
        name: "",
        lastname: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setAccepted(false);
    } catch (error) {
      console.error(error);
      setError(
        error.response?.data?.message || "Error al registrar el usuario.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rg-card">
      <h2 className="rg-title mb-1 text-center text-lg-start">Crear cuenta</h2>
      <p className="rg-subtitle text-center text-lg-start">
        Registra tus datos para empezar en FinTrack.
      </p>

      <AlertMessage type="success">{message}</AlertMessage>

      <AlertMessage type="danger">{error}</AlertMessage>

      <form onSubmit={handleSubmit} className="row g-0">
        {/* Nombre */}
        <div className="col-12 rg-input-wrapper">
          <label htmlFor="rg-name" className="rg-input-label">
            Nombre
          </label>
          <div className="rg-input-container">
            <i className="bi bi-person rg-input-icon" />
            <input
              id="rg-name"
              name="name"
              type="text"
              className="rg-input"
              placeholder="Ej. Juan"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Apellido */}
        <div className="col-12 rg-input-wrapper">
          <label htmlFor="rg-surname" className="rg-input-label">
            Apellido
          </label>
          <div className="rg-input-container">
            <i className="bi bi-person rg-input-icon" />
            <input
              id="rg-surname"
              name="lastname"
              type="text"
              className="rg-input"
              placeholder="Ej. Pérez"
              value={form.lastname}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Correo electrónico */}
        <div className="col-12 rg-input-wrapper">
          <label htmlFor="rg-email" className="rg-input-label">
            Correo electrónico
          </label>
          <div className="rg-input-container">
            <i className="bi bi-envelope rg-input-icon" />
            <input
              id="rg-email"
              name="email"
              type="email"
              className="rg-input"
              placeholder="correo@ejemplo.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Contraseña */}
        <div className="col-12 rg-input-wrapper">
          <label htmlFor="rg-password" className="rg-input-label">
            Contraseña
          </label>
          <div className="rg-input-container">
            <i className="bi bi-lock rg-input-icon" />
            <input
              id="rg-password"
              name="password"
              type="password"
              className="rg-input"
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Confirmar contraseña */}
        <div className="col-12 rg-input-wrapper">
          <label htmlFor="rg-confirm-password" className="rg-input-label">
            Confirmar contraseña
          </label>
          <div className="rg-input-container">
            <i className="bi bi-lock rg-input-icon" />
            <input
              id="rg-confirm-password"
              name="confirmPassword"
              type="password"
              className="rg-input"
              placeholder="••••••••"
              value={form.confirmPassword}
              onChange={handleChange}
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
            <label
              htmlFor="rg-policy-check"
              className="form-check-label text-secondary rg-policy-label"
            >
              Acepto los{" "}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-primary text-decoration-none fw-semibold"
              >
                Términos y Condiciones
              </a>{" "}
              y las{" "}
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="text-primary text-decoration-none fw-semibold"
              >
                Políticas de Privacidad
              </a>{" "}
              de FinTrack.
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
            {loading ? "Registrando..." : "Registrar usuario"}
          </button>
        </div>

        {/* Login redirect link */}
        <div className="col-12">
          <p className="rg-footer-text">
            ¿Ya tienes una cuenta?
            <Link to="/login" className="rg-footer-link">
              Inicia sesión
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
