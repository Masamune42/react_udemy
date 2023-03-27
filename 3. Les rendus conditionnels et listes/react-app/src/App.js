import { useState } from 'react';
import Item from './Components/Item/Item.js'

function App() {

  const [toggle, setToggle] = useState(true);

  const changeState = () => {
    setToggle(!toggle)
  }

  return (
    <div className="App">
      {toggle && <h1>Le state est true</h1>}
      <button onClick={changeState}>Change state</button>
    </div>
  );
}

export default App;
