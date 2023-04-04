import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <NavLink
        to="/"
        // Avec du inline CSS
        // style={({ isActive }) => {
        //   return isActive ? { color: "red" } : { color: "violet" }
        // }}
        // Avec une class
        // On récupère la propriété isActive pour vérifier si le lien est actif et on lui attribut la classe activeLink
        className={({ isActive }) => isActive ? "activeLink" : ""}
      >Accueil</NavLink>
      <NavLink className={({ isActive }) => isActive ? "activeLink" : ""} to="/services">Services</NavLink>
      <NavLink className={({ isActive }) => isActive ? "activeLink" : ""} to="/contact">Contact</NavLink>
    </nav>
  )
}
