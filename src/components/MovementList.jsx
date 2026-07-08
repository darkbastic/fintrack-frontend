const MovementList = ({ movements = [], onEdit, onDelete }) => {
  // Función para dar formato de peso chileno (CLP) a los montos.
  // Convierte el valor a número, aplica los puntos de miles usando toLocaleString y antepone el signo '$'.
  const formatCLP = (val) => '$' + Number(val).toLocaleString('es-CL');

  return (
    <div className="mov-list-card">
      <h5 className="fw-bold text-dark mb-3">Historial de Transacciones</h5>

      {movements.length === 0 ? (
        <div className="text-center py-5">
          <div className="text-muted mb-2" style={{ fontSize: '2.5rem' }}>
            <i className="bi bi-journal-x"></i>
          </div>
          <p className="text-secondary mb-0">No se encontraron movimientos registrados.</p>
        </div>
      ) : (
        <div className="d-flex flex-column">
          {movements.map((mov) => {
            const isExpense = mov.type === 'expense';
            const avatarBg = isExpense ? 'bg-danger bg-opacity-10 text-danger' : 'bg-success bg-opacity-10 text-success';
            const arrowIcon = isExpense ? 'bi-arrow-down-right-circle-fill' : 'bi-arrow-up-right-circle-fill';
            
            return (
              <div key={mov.id} className="mov-item-row d-flex align-items-center justify-content-between flex-wrap gap-2">
                <div className="d-flex align-items-center gap-3">
                  {/* Avatar */}
                  <div className={`mov-avatar ${avatarBg}`}>
                    <i className={`bi ${arrowIcon}`}></i>
                  </div>
                  
                  {/* Detalles */}
                  <div>
                    <h6 className="mb-0 fw-semibold text-dark">{mov.description}</h6>
                    <div className="d-flex align-items-center gap-2 mt-1 flex-wrap">
                      <span className={`mov-badge ${isExpense ? 'bg-danger bg-opacity-10 text-danger' : 'bg-success bg-opacity-10 text-success'}`}>
                        {mov.category_name || 'Sin categoría'}
                      </span>
                      <span className="text-muted small d-flex align-items-center gap-1">
                        <i className="bi bi-clock"></i>
                        {mov.movement_date}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  {/* Monto */}
                  <span className={`mov-amount ${isExpense ? 'negative' : 'positive'}`}>
                    {isExpense ? '-' : '+'}{formatCLP(mov.amount)}
                  </span>

                  {/* Botones de acción */}
                  <div className="d-flex gap-1">
                    <button
                      type="button"
                      className="btn-action-mov"
                      title="Editar"
                      onClick={() => onEdit(mov)}
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button
                      type="button"
                      className="btn-action-mov delete"
                      title="Eliminar"
                      onClick={() => onDelete(mov.id)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MovementList;
