import { useState } from 'react';
import Item from './Components/Item/Item.js'

function App() {

  const [toggle, setToggle] = useState(true);

  const changeState = () => {
    setToggle(!toggle)
  }

  let toggleContenu;

  if (toggle) {
    toggleContenu = <h1>Le state est true</h1>
  } else {
    toggleContenu = <h1>Le state est false</h1>
  }

  return (
    <div className="App">
      {toggleContenu}
      <button onClick={changeState}>Change state</button>
    </div>
  );
}

export default App;
