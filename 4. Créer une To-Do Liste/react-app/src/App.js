// On importe Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Form from './Components/Item/Form.js';

function App() {
  // On appelle le composant Form que l'on a créé
  return (
    <div className="App">
      <h1 className="text-center mt-3">Todo-list</h1>
      <Form />
    </div>
  );
}

export default App;
