import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Dashboard.css';
import AlertMessage from '../components/AlertMessage.jsx';
import Loader from '../components/Loader.jsx';
// Importamos la función de la API que hace la petición HTTP GET a /api/dashboard
import { getDashboardData } from '../api/dashboard.api.js';

const Dashboard = () => {
  const navigate = useNavigate();
  // Estado para guardar el objeto completo con datos de la API (summary, last_movements, etc.)
  const [data, setData] = useState(null);
  // Estado para indicar si la petición está pendiente (muestra el Loader en true)
  const [loading, setLoading] = useState(true);
  // Estado para almacenar y desplegar mensajes de error en caso de fallo del servidor
  const [error, setError] = useState('');

  // Función asíncrona para obtener la información del Dashboard desde la API
  const fetchDashboard = async () => {
    try {
      // Activamos el estado de carga antes de iniciar la llamada
      setLoading(true);
      setError('');
      // Ejecutamos la petición HTTP GET y esperamos (await) su respuesta
      const response = await getDashboardData();
      // Guardamos la respuesta exitosa en el estado local 'data'
      setData(response.data);
    } catch (err) {
      // Si la llamada falla (red, token inválido, etc.), capturamos el error y seteamos el mensaje amigable
      console.error("Error al obtener datos del dashboard:", err);
      setError("No fue posible cargar el Dashboard.");
    } finally {
      // Apagamos el estado de carga al terminar (éxito o fracaso)
      setLoading(false);
    }
  };

  // El Hook useEffect se ejecuta una única vez al montar el componente []
  // para traer los datos actualizados del servidor de manera automática
  useEffect(() => {
    fetchDashboard();
  }, []);

  // Utilidad de formateo de moneda chilena (CLP)
  const formatCLP = (val) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      maximumFractionDigits: 0
    }).format(val);
  };

  // Utilidad local para formatear fechas en texto amigable
  const formatDateFriendly = (dateStr) => {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    const dateObj = new Date(parts[0], parts[1] - 1, parts[2]);
    return dateObj.toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  // Si el estado de carga está activo, renderizamos el componente Loader
  if (loading) {
    return <Loader message="Cargando tu panel de control..." />;
  }

  // Si ocurrió un error y no tenemos datos antiguos que mostrar, pintamos el banner rojo
  if (error && !data) {
    return (
      <div className="container-fluid p-0 anim-1">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h1 className="fw-bold mb-1">Dashboard</h1>
            <p className="text-muted mb-0">Resumen y estado actual de tus finanzas personales.</p>
          </div>
        </div>
        <AlertMessage type="danger">{error}</AlertMessage>
      </div>
    );
  }

  // Extraemos la lista de últimos movimientos
  const lastMovements = data?.last_movements || [];
  // Si el backend no tiene movimientos para este usuario, la lista viene vacía []
  const hasNoMovements = lastMovements.length === 0;

  return (
    <div className="container-fluid p-0 anim-1">
      {/* Cabecera del Dashboard */}
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3 mb-4">
        <div>
          <h1 className="fw-bold mb-1">Dashboard</h1>
          <p className="text-muted mb-0">Resumen y estado actual de tus finanzas personales.</p>
        </div>
      </div>

      {hasNoMovements ? (
        /* ── ESTADO VACÍO (SECCIÓN 5) ── */
        <div className="empty-state-card text-center anim-scale-up">
          <div className="empty-state-icon">
            <i className="bi bi-wallet2"></i>
          </div>
          <h4 className="empty-state-title">Todavía no tienes movimientos registrados.</h4>
          <p className="empty-state-text">
            Comienza registrando tu primer ingreso o gasto para visualizar estadísticas.
          </p>
          <button 
            className="btn btn-primary rounded-10 px-4 text-white btn-save-profile"
            onClick={() => navigate('/movimientos')}
          >
            <i className="bi bi-plus-lg me-2"></i>
            Registrar movimiento
          </button>
        </div>
      ) : (
        /* ── DASHBOARD COMPLETO (SECCIONES 1, 2, 3 Y 4) ── */
        <div className="anim-scale-up">
          {/* Seccion 1: Tarjetas de Resumen */}
          <div className="row g-3 mb-4">
            {/* Card Balance Total */}
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="summary-card">
                <div className="summary-icon-wrapper bg-primary bg-opacity-10 text-primary">
                  <i className="bi bi-bank"></i>
                </div>
                <div className="summary-title">Balance Total</div>
                <h3 className="summary-value text-primary">
                  {formatCLP(data.summary?.balance || 0)}
                </h3>
              </div>
            </div>

            {/* Card Ingresos */}
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="summary-card">
                <div className="summary-icon-wrapper bg-success bg-opacity-10 text-success">
                  <i className="bi bi-arrow-up-right-circle-fill"></i>
                </div>
                <div className="summary-title">Ingresos</div>
                <h3 className="summary-value text-success">
                  {formatCLP(data.summary?.income || 0)}
                </h3>
              </div>
            </div>

            {/* Card Gastos */}
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="summary-card">
                <div className="summary-icon-wrapper bg-danger bg-opacity-10 text-danger">
                  <i className="bi bi-arrow-down-left-circle-fill"></i>
                </div>
                <div className="summary-title">Gastos</div>
                <h3 className="summary-value text-danger">
                  {formatCLP(data.summary?.expense || 0)}
                </h3>
              </div>
            </div>

            {/* Card Total Movimientos */}
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="summary-card">
                <div className="summary-icon-wrapper bg-warning bg-opacity-10 text-warning">
                  <i className="bi bi-journal-text"></i>
                </div>
                <div className="summary-title">Movimientos</div>
                <h3 className="summary-value text-warning">
                  {data.summary?.movements || 0}
                </h3>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {/* Columna Izquierda: Últimos Movimientos */}
            <div className="col-12 col-lg-8">
              <div className="dashboard-card">
                <h5 className="card-title-dashboard">Últimos movimientos</h5>
                
                <div className="table-responsive">
                  <table className="table db-table align-middle">
                    <thead>
                      <tr>
                        <th>Descripción</th>
                        <th>Categoría</th>
                        <th>Tipo</th>
                        <th className="text-end">Monto</th>
                        <th className="text-end">Fecha</th>
                      </tr>
                    </thead>
                    <tbody>
                      {lastMovements.map((mov) => {
                        const isExpense = mov.type === 'expense';
                        return (
                          <tr key={mov.id}>
                            <td className="fw-semibold text-dark">{mov.description}</td>
                            <td>
                              <span className={`badge rounded-pill px-3 py-2 ${isExpense ? 'bg-danger bg-opacity-10 text-danger' : 'bg-success bg-opacity-10 text-success'}`}>
                                {mov.category_name}
                              </span>
                            </td>
                            <td>
                              <span className={`d-flex align-items-center gap-1 fw-medium ${isExpense ? 'text-danger' : 'text-success'}`}>
                                <i className={`bi ${isExpense ? 'bi-arrow-down-right' : 'bi-arrow-up-right'}`}></i>
                                {isExpense ? 'Gasto' : 'Ingreso'}
                              </span>
                            </td>
                            <td className={`text-end fw-bold ${isExpense ? 'text-danger' : 'text-success'}`}>
                              {isExpense ? '-' : '+'}{formatCLP(mov.amount)}
                            </td>
                            <td className="text-end text-muted font-monospace">{formatDateFriendly(mov.movement_date)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Columna Derecha: Gastos por Categoría & Balance Mensual */}
            <div className="col-12 col-lg-4 d-flex flex-column gap-4">
              {/* Seccion 3: Gastos por categoría */}
              <div className="dashboard-card">
                <h5 className="card-title-dashboard">Gastos por categoría</h5>
                <div className="d-flex flex-column mt-3">
                  {!data.expenses_by_category || data.expenses_by_category.length === 0 ? (
                    <p className="text-muted small text-center my-4">
                      No existen datos suficientes para mostrar gastos por categoría.
                    </p>
                  ) : (
                    data.expenses_by_category.map((cat, index) => {
                      const totalExpenses = data.summary?.expense || 0;
                      const percentage = totalExpenses > 0 ? (cat.total / totalExpenses) * 100 : 0;
                      const colors = ['bg-primary', 'bg-danger', 'bg-success', 'bg-warning', 'bg-info', 'bg-secondary'];
                      const progressColor = colors[index % colors.length];

                      return (
                        <div key={index} className="category-progress-item">
                          <div className="category-progress-label">
                            <span>{cat.category}</span>
                            <span className="text-dark fw-bold">{formatCLP(cat.total)}</span>
                          </div>
                          <div className="progress-bar-custom">
                            <div 
                              className={`progress-bar h-100 ${progressColor}`} 
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

              {/* Seccion 4: Balance mensual */}
              <div className="dashboard-card">
                <h5 className="card-title-dashboard">Balance mensual</h5>
                <div className="d-flex flex-column mt-2">
                  <div className="balance-monthly-item">
                    <span className="balance-monthly-label">Ingresos del mes</span>
                    <span className="balance-monthly-value text-success">
                      +{formatCLP(data.monthly_balance?.income || 0)}
                    </span>
                  </div>
                  
                  <div className="balance-monthly-item">
                    <span className="balance-monthly-label">Gastos del mes</span>
                    <span className="balance-monthly-value text-danger">
                      -{formatCLP(data.monthly_balance?.expense || 0)}
                    </span>
                  </div>
                  
                  <div className="balance-monthly-item pt-3 mt-1" style={{ borderTop: '2px dashed #cbd5e1' }}>
                    <span className="balance-monthly-label fw-bold text-dark">Balance del mes</span>
                    <span className="balance-monthly-value text-primary fs-5">
                      {formatCLP(data.monthly_balance?.balance || 0)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
