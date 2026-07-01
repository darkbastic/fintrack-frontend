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
import Home     from './pages/Home.jsx'
import Login    from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import About    from './pages/About.jsx'
import Contact  from './pages/Contact.jsx'

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
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
