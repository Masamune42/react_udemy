import { useEffect, useRef, useState } from "react";
import './App.css';
import Video from './video.mp4';

function App() {

  const [toggle, setToggle] = useState(true)

  // On déclare useRef()
  const ref = useRef([]);

  const toggleFunc = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    window.addEventListener('resize', actionResize);

    function actionResize() {
      console.log('Resized');
    }

    return () => {
      window.removeEventListener('resize', actionResize)
    }
  }, [])

  // On crée une méthode pour ajouter l'élement sélectionné
  const addToRef = el => {
    // Si l'élément sélectionné existe ET qu'il ne se trouve pas dans le tableau, on l'ajoute
    if(el && !ref.current.includes(el)) {
      ref.current.push(el)
    }
  }

  return (
    <div className="App">
      {/* On déclare les vidéos avec la méthode en ref */}
      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Video} />
      </video>
      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Video} />
      </video>
      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Video} />
      </video>

      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
