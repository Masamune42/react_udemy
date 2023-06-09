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

## Faire des routes imbriquées
```js
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* On va déclarer des routes pour rediriger vers des composants */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profil/:id' element={<Profile />} />
        {/* On ne ferme pas la balise pour ajouter des routes imbriquées */}
        <Route path='/services' element={<Services />} >
          <Route path='/services/developpement' element={<Development />} />
          <Route path='/services/cybersecurite' element={<CyberSecurity />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

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
```

## Les hooks utilitaires
```js
export default function Profile() {
  // useParams permet de récupérer les paramètres passées dans la page, ex : l'id dans /profil/:id
  const params = useParams();

  return (
    <div>
      <h1>Bienvenue sur votre profil !</h1>
      <p>{params.id}</p>
    </div>
  )
}

export default function Home() {
  // On passe un state dans le link
	return (
		<div>
			<h1>Bienvenue sur le site !</h1>
			<Link to="/contact"
			state={{fromHome: "Hello World !"}}>Contact</Link>
		</div>
	)
}

export default function Contact() {
  // useLocation() permet de récupérer le state qu'on a passé dans le Link
  const location = useLocation()
  return (
    <div>
      Contact
    </div>
  )
}
```