# 3. Les rendus conditionnels et listes

## Créer un rendu conditionnel avec "if"
```js
function App() {

  // on déclare un state
  const [toggle, setToggle] = useState(true);
  // On toggle à l'appel de la fonction
  const changeState = () => {
    setToggle(!toggle)
  }
  // Si toggle est à true, on affiche le 1er return, sinon le 2e
  if(toggle) {
    return (
      <div className="App">
        <h1>Le state est true</h1>
        <button onClick={changeState}>Change state</button>
      </div>
    );
  } else if(!toggle) {
    return (
      <div className="App">
        <h1>Le state est false</h1>
        <button onClick={changeState}>Change state</button>
      </div>
    );
  }
}
```
On l'utilise quand on beaucoup de contenu
```js
// 2e type d'utilisation
// On stock le texte à afficher dans une variable
let toggleContenu;

// On attribut le un texte différent à toggleContenu suivant toggle
if (toggle) {
  toggleContenu = <h1>Le state est true</h1>
} else {
  toggleContenu = <h1>Le state est false</h1>
}

// On utiliser toggleContenu dans le return
return (
  <div className="App">
    {toggleContenu}
    <button onClick={changeState}>Change state</button>
  </div>
);
```

## Opérateur ternaire
```js
return (
<div className="App">
  {toggle ?
    <h1>Le state est true</h1>
    :
    <h1>Le state est false</h1>
  }
  <button onClick={changeState}>Change state</button>
</div>
);

// short-circuit operator
// Apparait seulement si toggle est true
return (
  <div className="App">
    {toggle && <h1>Le state est true</h1>}
    <button onClick={changeState}>Change state</button>
  </div>
);
```