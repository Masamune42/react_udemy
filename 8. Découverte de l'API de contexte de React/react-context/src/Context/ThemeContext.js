import React, { createContext, useState } from 'react';

// On crée le contexte (initialisation) qui peut être importé où on veut
export const ThemeContext = createContext();

// On crée le component lié au contexte avec un useState
const ThemeContextProvider = props => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme)
  }

  // Si theme > on active ajoute la class pour le dark mode, sinon on la retire
  if (theme) {
    document.body.classList.add('dark-body');
  } else {
    document.body.classList.remove('dark-body');
  }

  // On retour le provider du contexte qui va apporter les données dans toute l'application
  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }} >
      {props.children}
    </ThemeContext.Provider>
  )
}
// On export le le component
export default ThemeContextProvider;