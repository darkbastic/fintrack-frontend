import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Bootstrap (CSS + JS bundle for navbar collapse)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Global design tokens
import './css/index.css'

// Pages
import Home        from './pages/Home.jsx'
import Login       from './pages/Login.jsx'
import Register    from './pages/Register.jsx'
import About       from './pages/About.jsx'
import Contact     from './pages/Contact.jsx'
import Dashboard   from './pages/Dashboard.jsx'
import Movimientos from './pages/Movimientos.jsx'
import Categorias  from './pages/Categorias.jsx'
import Reportes    from './pages/Reportes.jsx'
import Perfil      from './pages/Perfil.jsx'

// Layouts
import InternalLayout from './components/InternalLayout.jsx'

/* ── App entry ───────────────────────────────────────────── */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/"         element={<Home />}     />
        <Route path="/login"    element={<Login />}    />
        <Route path="/register" element={<Register />} />
        <Route path="/about"    element={<About />}    />
        <Route path="/contact"  element={<Contact />}  />
        
        {/* Rutas Internas Privadas (Panel de Administración) */}
        <Route element={<InternalLayout />}>
          <Route path="/dashboard"   element={<Dashboard />}   />
          <Route path="/movimientos" element={<Movimientos />} />
          <Route path="/categorias"  element={<Categorias />}  />
          <Route path="/reportes"    element={<Reportes />}    />
          <Route path="/perfil"      element={<Perfil />}      />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
