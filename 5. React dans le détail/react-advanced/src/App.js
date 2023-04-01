import { useCallback, useMemo, useState } from "react";
import './App.css';
import Content from "./Content.js";

function App() {

  const [toggle, setToggle] = useState([1, 2, 3])

  const toggleFunc = () => {
    const newArr = [...toggle];
    newArr.push(4);
    setToggle(newArr)
  }

  const tableau = useMemo(() => {
    return [1, 2, 3, 4, 5];
  }, [])

  const foo = useCallback(() => {
    console.log("click");
  }, [])

  return (
    <div className="App">
      <Content num={tableau} foo={foo} />
      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
