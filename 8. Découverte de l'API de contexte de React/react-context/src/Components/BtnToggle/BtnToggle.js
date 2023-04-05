import React, { useContext } from 'react'
import './BtnToggle.css';
import { ThemeContext } from '../../Context/ThemeContext';

export default function BtnToggle() {

  // On récupère le contexte avec la fonction toggleTheme et la valeur de theme
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    // Suivant la valeur de theme on affiche le bouton sur fond clair ou sombre
    <button
      // On déclenche le toggle du thème à l'appui du bouton
      onClick={toggleTheme}
      className={theme ? " btn-toggle" : "btn-toggle dark-btn"}
    >
      {theme ? "LIGHT" : "DARK"}
    </button>
  )
}
