import { useState } from 'react';
import Item from './Item';

function App() {
  
  const [monState, setMonState] = useState(10);
  return (
    <div className="App">
      <h1>Hello App</h1>
      <Item />
      {monState}
    </div>
  );
}

export default App;
