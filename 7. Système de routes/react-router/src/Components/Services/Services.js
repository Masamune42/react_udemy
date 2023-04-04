import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Services() {
  return (
    <div>
      <h1>Section Services</h1>
      {/* Navbar de 2 liens */}
      <nav>
        <Link to="/services/developpement">Développement</Link>
        <Link to="/services/cybersecurite">Cyber sécurité</Link>
      </nav>
      {/* On indique où afficher les liens imbriqués */}
      <Outlet />
    </div>
  )
}
