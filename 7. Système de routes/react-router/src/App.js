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

export default App;
