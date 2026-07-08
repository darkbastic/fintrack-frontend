import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar.jsx'
import Topbar from '../components/Topbar.jsx'
import { getUserProfile } from '../api/user.api.js'
import '../css/InternalLayout.css'

const InternalLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await getUserProfile();
      setUser(response.data);
    } catch (error) {
      console.error("Error al cargar perfil", error);
      localStorage.removeItem("token");
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    fetchUser();
  }, []);

  return (
    <div className="ft-internal-layout">
      {/* Sidebar with toggle control */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="ft-content-wrapper">
        <Topbar 
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          user={user}
          loading={loading}
        />
        
        <main className="ft-main-content">
          <Outlet context={{user, setUser, fetchUser}} />
        </main>
      </div>
    </div>
  )
}

export default InternalLayout
