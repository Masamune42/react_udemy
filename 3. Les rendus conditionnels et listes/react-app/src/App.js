import { useState } from 'react';
import Item from './Components/Item/Item.js'

function App() {

  const [toggle, setToggle] = useState(true);

  const changeState = () => {
    setToggle(!toggle)
  }

  return (
    <div className="App">
      <div className="box" style={{backgroundColor: toggle ? 'salmon' : "lightblue"}}></div>
      <button onClick={changeState}>Change state</button>
    </div>
  );
}

export default App;
