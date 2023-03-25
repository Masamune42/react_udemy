import { useState } from 'react';
import Item from './Item.js'

function App() {
  const [monState, setMonState] = useState(10);

  const modifyState = (data) => {
    setMonState(data);
  }

  return (
    <div className="App">
      <h1>Hello state : {monState}</h1>
      <Item func={modifyState} />
    </div>
  );
}

export default App;
