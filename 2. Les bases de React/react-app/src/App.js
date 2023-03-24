import { useState } from 'react';
import Item from './Item.js'

function App() {
  const [monState, setMonState] = useState(10);

  const modifyState = () => {
    setMonState(20);
  }

  return (
    <div className="App">
      <h1>Hello state : {monState}</h1>
      <button onClick={modifyState}>Change state</button>
      <Item number={monState} />
    </div>
  );
}

export default App;
