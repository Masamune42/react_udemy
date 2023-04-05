import './App.css';
import Content from './Components/Content/Content';
import ThemeContextProvider from './Context/ThemeContext';

function App() {
  return (
    <div className="App">
      {/* On entoure l'endroit où on veut utiliser le contexte */}
      <ThemeContextProvider>
        <Content />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
