# 7. Système de routes

## Créer des chemins dynamiques
```js
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home.js';
import Profile from './Components/Profile/Profile.js';
import NotFound from './Components/NotFound/NotFound.js';

function App() {
  return (
    <div className="App">
      {/* On va déclarer des routes pour rediriger vers des composants */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profil/:id' element={<Profile />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

// Pour la page NotFound
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
```

## Créer une navigation
```js
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

// Dans App.js
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* On va déclarer des routes pour rediriger vers des composants */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profil/:id' element={<Profile />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}
```

## Navlink
```js
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
```