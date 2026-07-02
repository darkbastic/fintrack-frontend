import '../css/Perfil.css'

const Perfil = () => {
  return (
    <div className="container-fluid p-0">
      <div className="card-placeholder-prf">
        <div className="placeholder-icon-prf">
          <i className="bi bi-person-fill text-info" />
        </div>
        <h1 className="fw-bold mb-2">Perfil</h1>
        <p className="text-secondary mb-0">
          Configura tus datos personales, contraseña, preferencias monetarias y tipo de cuenta desde este panel de control.
        </p>
      </div>
    </div>
  )
}

export default Perfil
