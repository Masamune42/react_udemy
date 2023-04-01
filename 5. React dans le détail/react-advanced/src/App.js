import { useState } from "react";
import './App.css';
import useDimension from "./useDimension.js";

function App() {
  const browserWidth = useDimension();

  if(browserWidth > 772) {
    console.log('Grand écran');
  } else {
    console.log('Petit écran');
  }

  return (
    <div className="App">

    </div>
  );
}

export default App;
