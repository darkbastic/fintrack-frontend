import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../api/user.api';
import AlertMessage from './AlertMessage';

const LoginForm = () => {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await loginUser(form);
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setError(
        error.response?.data?.message ||
        "Error al iniciar sesión."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rg-card">
      <h2 className="rg-title mb-1 text-center text-lg-start">Iniciar sesión</h2>
      <p className="rg-subtitle text-center text-lg-start">Ingresa tus credenciales para acceder a tu cuenta.</p>
      
      <AlertMessage type="danger">
        {error}
      </AlertMessage>

      <form className="row g-0" onSubmit={handleSubmit}>
        {/* Correo electrónico */}
        <div className="col-12 rg-input-wrapper">
          <label htmlFor="lg-email" className="rg-input-label">Correo electrónico</label>
          <div className="rg-input-container">
            <i className="bi bi-envelope rg-input-icon" />
            <input
              id="lg-email"
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
          <label htmlFor="lg-password" className="rg-input-label">Contraseña</label>
          <div className="rg-input-container">
            <i className="bi bi-lock rg-input-icon" />
            <input
              id="lg-password"
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

        {/* Submit Button */}
        <div className="col-12 mt-2">
          <button
            type="submit"
            className="btn rg-btn-submit text-decoration-none d-block text-center"
            disabled={loading}
          >
            {loading ? "Iniciando sesión..." : "Iniciar sesión"}
          </button>
        </div>

        {/* Register redirect link */}
        <div className="col-12">
          <p className="rg-footer-text">
            ¿No tienes una cuenta?{' '}
            <Link to="/register" className="rg-footer-link">
              Regístrate
            </Link>
          </p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
