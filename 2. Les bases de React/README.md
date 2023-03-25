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

## Les props
On peut transmettre des propriétés (props) depuis le composant parent (App.js -> Item.js)
```js
// Exemple 1 : si on déclare une variable txt dans Item
<Item txt={"Hello World"} />
<Item txt={"Hello Item"} />
<Item txt={"Hello Japan"} />

// Dans Item.js on peut récupérer la propriété
function Item(props) {
    return (
        <h1>{props.txt}</h1>
    )
}

// Exemple 2 : On peut passer un state en paramètre
<Item number={monState} />
// Pour l'afficher dans Item.js
return (
    <h1>{props.number}</h1>
)
```
Si props passé à un composant se met à jour, alors le composant aussi.

## Remonter le state
On peut faire remonter un state du composant enfant dans le composant parent.
```js
// Dans Item.js (enfant)
// 3. On reçoit la fonction de l'élément parent via props
function Item(props) {

    const [itemState, setItemState] = useState('Item state !')
    // 4. On utilise la fonction au click du bouton en utilisant une fonction anonyme, sinon elle s'exécute à la création du composant uniquement. On envoie le state itemState vers le composant parent
    return (
        <div>
            <h1>{props.number}</h1>
            <button onClick={() => props.func(itemState)}>Change state</button>
        </div>
    )
}

// Dans App.js (parent)
function App() {
  const [monState, setMonState] = useState(10);
  // 1. On a une fonction modifyState qui reçoit un paramètre
  const modifyState = (data) => {
    setMonState(data);
  }

  // 2. On utilise la fonction dans le composant enfant
  // 5. On modifie le state du composant App.js
  return (
    <div className="App">
      <h1>Hello state : {monState}</h1>
      <Item func={modifyState} />
    </div>
  );
}
```
A avoir en tête mais éviter de l'utiliser car si on a un parent avec plusieurs enfants imbriquées, le code deviendra vite illisible.

On peut utiliser à la place : l'API contexte ou Redux qui permettent de gérer le state de façon globale et de l'injecter dans les composants qui en ont besoin.