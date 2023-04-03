import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home.js';
import Profile from './Components/Profile/Profile.js';
import NotFound from './Components/NotFound/NotFound.js';
import Navbar from './Components/Navbar/Navbar.js';
import Services from './Components/Services/Services.js';
import Contact from './Components/Contact/Contact.js';

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

export default App;
