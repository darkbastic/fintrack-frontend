import '../css/Perfil.css'

const Perfil = () => {
  return (
    <div className="container-fluid p-0 anim-1">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          
          {/* Header Card */}
          <div className="profile-header-card mb-4">
            <h1 className="fw-bold mb-1">Mi Perfil</h1>
            <p className="text-secondary mb-0">Gestiona tu información personal y configuración de seguridad.</p>
          </div>

          <form className="row g-4" onSubmit={(e) => e.preventDefault()}>
            {/* Sección 1: Información Personal */}
            <div className="col-12">
              <div className="profile-section-card">
                <div className="d-flex align-items-center gap-2 mb-4 border-bottom pb-3">
                  <div className="section-icon-wrapper" style={{ backgroundColor: '#eff6ff', color: '#2563eb' }}>
                    <i className="bi bi-person-fill" />
                  </div>
                  <h3 className="section-title mb-0">Información Personal</h3>
                </div>

                <div className="row g-3">
                  {/* Nombre */}
                  <div className="col-12 col-md-6">
                    <label className="profile-input-label">Nombre</label>
                    <div className="profile-input-container">
                      <i className="bi bi-person profile-input-icon" />
                      <input 
                        type="text" 
                        className="profile-input" 
                        defaultValue="Bastián" 
                      />
                    </div>
                  </div>

                  {/* Apellido */}
                  <div className="col-12 col-md-6">
                    <label className="profile-input-label">Apellido</label>
                    <div className="profile-input-container">
                      <i className="bi bi-person profile-input-icon" />
                      <input 
                        type="text" 
                        className="profile-input" 
                        defaultValue="Ibáñez" 
                      />
                    </div>
                  </div>

                  {/* Correo Electrónico */}
                  <div className="col-12">
                    <label className="profile-input-label">Correo Electrónico (No modificable)</label>
                    <div className="profile-input-container">
                      <i className="bi bi-envelope profile-input-icon" />
                      <input 
                        type="email" 
                        className="profile-input profile-input--disabled" 
                        defaultValue="bastian@gmail.com" 
                        disabled 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sección 2: Seguridad y Contraseña */}
            <div className="col-12">
              <div className="profile-section-card">
                <div className="d-flex align-items-center gap-2 mb-4 border-bottom pb-3">
                  <div className="section-icon-wrapper" style={{ backgroundColor: '#fff5f5', color: '#fa5252' }}>
                    <i className="bi bi-shield-lock-fill" />
                  </div>
                  <h3 className="section-title mb-0">Seguridad</h3>
                </div>

                <div className="row g-3">
                  {/* Contraseña Actual */}
                  <div className="col-12">
                    <label className="profile-input-label">Contraseña Actual</label>
                    <div className="profile-input-container">
                      <i className="bi bi-key profile-input-icon" />
                      <input 
                        type="password" 
                        className="profile-input" 
                        placeholder="••••••••" 
                      />
                    </div>
                  </div>

                  {/* Nueva Contraseña */}
                  <div className="col-12 col-md-6">
                    <label className="profile-input-label">Nueva Contraseña</label>
                    <div className="profile-input-container">
                      <i className="bi bi-lock profile-input-icon" />
                      <input 
                        type="password" 
                        className="profile-input" 
                        placeholder="Ingresa nueva contraseña" 
                      />
                    </div>
                  </div>

                  {/* Confirmar Nueva Contraseña */}
                  <div className="col-12 col-md-6">
                    <label className="profile-input-label">Confirmar Nueva Contraseña</label>
                    <div className="profile-input-container">
                      <i className="bi bi-lock-fill profile-input-icon" />
                      <input 
                        type="password" 
                        className="profile-input" 
                        placeholder="Confirma nueva contraseña" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="col-12 d-flex gap-3 justify-content-end mt-4">
              <button type="button" className="btn btn-light px-4 py-2.5 rounded-10 fw-semibold border text-secondary btn-cancel-profile">
                Cancelar
              </button>
              <button type="submit" className="btn btn-primary px-4 py-2.5 rounded-10 fw-bold btn-save-profile">
                Guardar cambios
              </button>
            </div>

          </form>

        </div>
      </div>
    </div>
  )
}

export default Perfil
