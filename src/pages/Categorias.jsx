import '../css/Categorias.css'

const Categorias = () => {
  return (
    <div className="container-fluid p-0">
      <div className="card-placeholder-cat">
        <div className="placeholder-icon-cat">
          <i className="bi bi-tags-fill text-success" />
        </div>
        <h1 className="fw-bold mb-2">Categorías</h1>
        <p className="text-secondary mb-0">
          Administra las categorías de tus ingresos y gastos para clasificar tu dinero y obtener mejores reportes.
        </p>
      </div>
    </div>
  )
}

export default Categorias
