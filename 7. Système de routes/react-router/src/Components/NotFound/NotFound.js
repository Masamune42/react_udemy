import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {

  const navigate = useNavigate()

  const goHome = () => {
    navigate("/")
  }

  return (
    <div>
      <h1>Wops, cette page n'existe pas !</h1>
      {/* Option 1 : on utilise une fonction callback directement dans le onClick */}
      <button onClick={() => navigate("/")}>Retourner à l'accueil</button>
      {/* Option 1 : on utilise une fonction qui appelle navigate */}
      <button onClick={goHome}>Retourner à l'accueil</button>
    </div>
  )
}
