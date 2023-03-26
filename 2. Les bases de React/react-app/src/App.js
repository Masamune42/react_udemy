import { useState } from 'react';
import Item from './Components/Item/Item.js'

function App() {

  const [inputData, setInputData] = useState(10);

  const changeInput = (e) => {
    setInputData(e)
  }

  console.log(inputData);

  return (
    <div className="App">
      <h1>Hello state depuis App</h1>
      <input type="text" value={inputData} onInput={e => changeInput(e.target.value)} />
    </div>
  );
}

export default App;
