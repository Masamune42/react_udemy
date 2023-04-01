import { useState } from "react";
import './App.css';

function App() {

  const [toggle, setToggle] = useState([1, 2, 3])

  const toggleFunc = () => {
    const newArr = [...toggle];
    newArr.push(4);
    setToggle(newArr)
  }

  return (
    <div className="App">
      <h1>{toggle}</h1>
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
