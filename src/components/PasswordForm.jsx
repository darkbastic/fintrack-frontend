import { useState } from "react";
import { updatedUserPassword } from "../api/user.api";
import AlertMessage from "./AlertMessage";

const PasswordForm = () => {
  // Hook useState para controlar el estado local de los inputs del formulario (contraseñas)
  const [form, setForm] = useState({
    current_password: "",
    new_password: "",
    confirm_password: ""
  });
  // Hooks useState para controlar el spinner de carga y mostrar mensajes de éxito/error
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    // Validar en el cliente que las contraseñas coincidan antes de ir al servidor
    if (form.new_password !== form.confirm_password) {
      setError("La nueva contraseña y su confirmación no coinciden.");
      
      // Limpiar mensaje de error tras 5 segundos
      setTimeout(() => setError(""), 5000);
      
      setLoading(false);
      return;
    }

    try {
      // Petición a la API del backend para actualizar la contraseña
      const response = await updatedUserPassword({
        current_password: form.current_password,
        new_password: form.new_password
      });
      setMessage(response.data.message || "Contraseña actualizada correctamente.");
      
      // Limpiar mensaje de éxito tras 5 segundos
      setTimeout(() => setMessage(""), 5000);

      // Limpiar los inputs del formulario tras una actualización exitosa por seguridad
      setForm({
        current_password: "",
        new_password: "",
        confirm_password: ""
      });
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Error al actualizar la contraseña.");
      
      // Limpiar mensaje de error tras 5 segundos
      setTimeout(() => setError(""), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile-section-card h-100">
      <div className="d-flex align-items-center gap-2 mb-4">
        <div className="section-icon-wrapper bg-danger bg-opacity-10 text-danger">
          <i className="bi bi-shield-lock-fill"></i>
        </div>
        <h3 className="section-title mb-0">Seguridad y Contraseña</h3>
      </div>

      <AlertMessage type="success">{message}</AlertMessage>
      <AlertMessage type="danger">{error}</AlertMessage>

      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label htmlFor="pf-current-password" className="profile-input-label">Contraseña Actual</label>
          <div className="profile-input-container">
            <i className="bi bi-shield-lock profile-input-icon" />
            <input
              id="pf-current-password"
              name="current_password"
              type="password"
              className="profile-input"
              placeholder="••••••••"
              value={form.current_password}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="pf-new-password" className="profile-input-label">Nueva Contraseña</label>
          <div className="profile-input-container">
            <i className="bi bi-lock profile-input-icon" />
            <input
              id="pf-new-password"
              name="new_password"
              type="password"
              className="profile-input"
              placeholder="••••••••"
              value={form.new_password}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="pf-confirm-password" className="profile-input-label">Confirmar Nueva Contraseña</label>
          <div className="profile-input-container">
            <i className="bi bi-lock-fill profile-input-icon" />
            <input
              id="pf-confirm-password"
              name="confirm_password"
              type="password"
              className="profile-input"
              placeholder="••••••••"
              value={form.confirm_password}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="d-flex justify-content-end">
          <button
            type="submit"
            className="btn btn-danger btn-save-profile rounded-10 px-4 text-white"
            style={{ background: 'linear-gradient(135deg, #dc3545, #b21f2d)' }}
            disabled={loading}
          >
            {loading ? "Actualizando..." : "Actualizar Contraseña"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default PasswordForm
