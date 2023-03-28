import { useState, useEffect } from "react";
import './App.css';

function App() {
  // On crée un state pour l'image
  const [dataImg, setDataImg] = useState();

  // On appel l'API au chargement de la page
  useEffect(() => {
    // On appel le lien via fetch
    fetch(`https://api.thecatapi.com/v1/images/search`)
      .then(response => {
        // Une fois la réponse reçue, on le transforme en json
        return response.json();
      })
      .then(data => {
        // Une fois la transformation en json effectuée, j'affecte l'URL de l'image au state
        setDataImg(data[0].url)
      })
  }, [])

  return (
    <div className="App">
      {/* Pour éviter d'avoir une image cassée (ex : lien qui ne marche pas) on utilise un short-circuit operator */}
      {dataImg &&
        <img
          src={dataImg}
          alt="cat"
          style={{ width: "500px" }}
        />}
    </div>
  );
}

export default App;
