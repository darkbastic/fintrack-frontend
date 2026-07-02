import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'
import Topbar from './Topbar.jsx'
import '../css/InternalLayout.css'

const InternalLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="ft-internal-layout">
      {/* Sidebar with toggle control */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="ft-content-wrapper">
        <Topbar onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="ft-main-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default InternalLayout
