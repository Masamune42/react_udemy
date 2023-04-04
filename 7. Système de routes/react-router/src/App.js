import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home.js';
import Profile from './Components/Profile/Profile.js';
import NotFound from './Components/NotFound/NotFound.js';
import Navbar from './Components/Navbar/Navbar.js';
import Services from './Components/Services/Services.js';
import Contact from './Components/Contact/Contact.js';
import Development from './Components/Services/Development/Development';
import CyberSecurity from './Components/Services/CyberSecurity/CyberSecurity';

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

export default App;
