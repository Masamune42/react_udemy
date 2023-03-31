import { useEffect, useRef, useState } from "react";
import './App.css';
import Video from './video.mp4';

function App() {

  const [toggle, setToggle] = useState(true)

  // On déclare useRef()
  const ref = useRef();

  // On utilise useEffect pour récupérer l'élément sur lequel est lié ref après le chargement du composant
  useEffect(() => {
    // On utilise ref pour mettre la vidéo sur pause au bout de 3s
    setTimeout(() => {
      ref.current.pause();
    }, 3000)
  }, [])

  const toggleFunc = () => {
    setToggle(!toggle)
  }

  return (
    <div className="App">
      {/* On déclare la video */}
      <video ref={ref} width="750" height="500" autoPlay controls muted>
        <source src={Video} />
      </video>

      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
