# 2. Les bases de React

## Explication des fichiers
- README.md : Commandes que l'on peut faire qui se situe dans package.json
- public
    - index.html : Toute notre application se situe ans la div avec l'id root (Single Page Application : SPA)
- src : là où on développe
    - App.js : Composant qui permet l'affichage

## Premier composant
```js
// on crée Item.js
function Item() {
    return (
        <h1>Hello world</h1>
    )
}

export default Item;
// Appel de Item dans un autre fichier
return (
    <div className="App">
        <Item />
    </div>
);
```

## Fonction useState()
```js
// 1er paramètre -> Valeur de départ du state
// 2e paramètre -> Fonction qui modifie le state
useState()

// On utilise le destructuring pour récupérer les 2 éléments de useState
const [monState, setMonState] = useState(10);
// On peut maintenant afficher les 2 variables
```

## Modifier le state
Quand on change la valeur d'un state, le composant se rerender / met à jour.
```js
function App() {
  const [monState, setMonState] = useState(10);
  // On modifie le state de monState
  const modifyState = () => {
    setMonState(20);
  }

  return (
    <div className="App">
      <h1>Hello state : {monState}</h1>
      <button onClick={modifyState}>Change state</button>
    </div>
  );
}
```