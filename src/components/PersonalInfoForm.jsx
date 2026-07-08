import { useState, useEffect } from "react";
import { updatedUserProfile } from "../api/user.api";
import AlertMessage from "./AlertMessage";

const PersonalInfoForm = ({ user, fetchUser }) => {

  // Hook useState para controlar el estado local de los inputs del formulario (nombre y apellido)
  const [ form, setForm ] = useState({
    name: user.name,
    lastname: user.lastname
  });

  // Hooks useState para controlar el spinner de carga y mostrar mensajes de éxito/error
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Hook useEffect para sincronizar el formulario cada vez que los datos del usuario cambien en el layout principal
  useEffect(() => {
    if (user) setForm({ name: user.name, lastname: user.lastname });
  }, [user]);

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

    try {
      // Petición a la API del backend para actualizar el nombre y apellido
      const response = await updatedUserProfile(form);
      setMessage(response.data.message || "Perfil actualizado correctamente.");
      
      // Limpiar mensaje de éxito tras 5 segundos
      setTimeout(() => setMessage(""), 5000);

      // Actualizar el estado global del usuario (refresca iniciales y saludo en la Topbar)
      await fetchUser();
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Error al actualizar el perfil.");
      
      // Limpiar mensaje de error tras 5 segundos
      setTimeout(() => setError(""), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile-section-card h-100">
      <div className="d-flex align-items-center gap-2 mb-4">
        <div className="section-icon-wrapper bg-primary bg-opacity-10 text-primary">
          <i className="bi bi-person-fill"></i>
        </div>
        <h3 className="section-title mb-0">Información Personal</h3>
      </div>

      <AlertMessage type="success">{message}</AlertMessage>
      <AlertMessage type="danger">{error}</AlertMessage>

      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label htmlFor="pf-name" className="profile-input-label">Nombre</label>
          <div className="profile-input-container">
            <i className="bi bi-person profile-input-icon" />
            <input
              id="pf-name"
              name="name"
              type="text"
              className="profile-input"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="pf-lastname" className="profile-input-label">Apellido</label>
          <div className="profile-input-container">
            <i className="bi bi-person-fill profile-input-icon" />
            <input
              id="pf-lastname"
              name="lastname"
              type="text"
              className="profile-input"
              value={form.lastname}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="pf-email" className="profile-input-label">Correo Electrónico</label>
          <div className="profile-input-container">
            <i className="bi bi-envelope profile-input-icon" />
            <input
              id="pf-email"
              type="email"
              className="profile-input profile-input--disabled"
              defaultValue={user.email}
              disabled
            />
          </div>
          <small className="text-muted mt-2 d-block">
            <i className="bi bi-info-circle me-1"></i>
            El correo electrónico no puede ser modificado.
          </small>
        </div>

        <div className="d-flex justify-content-end">
          <button
            type="submit"
            className="btn btn-primary btn-save-profile rounded-10 px-4 text-white"
            disabled={loading}
          >
            {loading ? "Guardando..." : "Guardar Cambios"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default PersonalInfoForm
