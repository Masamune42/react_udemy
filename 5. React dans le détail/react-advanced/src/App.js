import { useState, useEffect } from "react";
import './App.css';

function App() {
 
  const [dataComponent, setDataComponent] = useState(1);
 
  const changeState = () => {
    setDataComponent(dataComponent + 1)
  }

  useEffect(() => {
    console.log("Mise à jour de dataComponent");
  }, [dataComponent])

  return (
    <div className="App">
      <h1>Le state est {dataComponent}</h1>
      <button onClick={changeState}>Change dataComponent</button>
    </div>
  );
}

export default App;
