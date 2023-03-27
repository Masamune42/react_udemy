import { useState } from 'react';
import Item from './Components/Item/Item.js'

function App() {

  const [dataArr, setdataArr] = useState([
    {nom: "Juliette"},
    {nom: "John"},
    {nom: "Joris"},
  ]);

  return (
    <div className="App">
      {dataArr.map((item, index) => {
        return <p key={index}>Nom : {item.nom}</p>
      })}
    </div>
  );
}

export default App;
