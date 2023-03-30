import { useState } from "react";
import './App.css';
import Timer from "./Timer";

function App() {

  const [toggle, setToggle] = useState(true)

  const toggleFunc = () => {
    setToggle(!toggle)
  }

  return (
    <div className="App">
      <button onClick={toggleFunc}>Toggle</button>
      <h2>{toggle && <Timer />}</h2>
    </div>
  );
}

export default App;
