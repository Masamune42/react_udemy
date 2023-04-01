# React dans le détail

## Les règles des Hooks
Ex : useState() est un Hook
1. Il faut tout le temps les écrire à la racine de nos fonctions (tout en haut). On ne peut pas les placer dans des conditions.

2. Il faut seulement les appeler dans des fonctions (composants) écrits en majuscule

## Le hook "useEffect"
Tous les hooks commencent par "use"
```js
// useEffect se lance quand on lui demande
// Si on met en second paramètre [], se lance uniquement au premier affichage
useEffect(() => {
    console.log("Mise à jour");
}, [])
// On surveille le changement de dataComponent
useEffect(() => {
    console.log("Mise à jour de dataComponent");
}, [dataComponent])
```
Cela peut servir d'effecteur des actions quand certains types d'actions vont changer et permettra par la suite de : 
- Afficher
- Supprimer
- Faire des intéractions
- Faire des animations...

## Appel d'une API
```js
import { useState, useEffect } from "react";
import './App.css';

function App() {
  // On crée un state pour l'image
  const [dataImg, setDataImg] = useState();

  // On appel l'API au chargement de la page
  useEffect(() => {
    // On appel le lien via fetch
    fetch(`https://api.thecatapi.com/v1/images/search`)
      .then(response => {
        // Une fois la réponse reçue, on le transforme en json
        return response.json();
      })
      .then(data => {
        // Une fois la transformation en json effectuée, j'affecte l'URL de l'image au state
        setDataImg(data[0].url)
      })
  }, [])

  return (
    <div className="App">
      {/* Pour éviter d'avoir une image cassée (ex : lien qui ne marche pas) on utilise un short-circuit operator */}
      {dataImg &&
        <img
          src={dataImg}
          alt="cat"
          style={{ width: "500px" }}
        />}
    </div>
  );
}
```

## Utiliser "setInterval" avec React
```js
const [timer, setTimer] = useState(1)

// Mauvaises utilisations de setInterval avec un state
// On met à jour le state et on recrée une méthode setInterval à chaque fois. Elles seront dans la mémoire et vont tenter de mettre à jour le state à la suite des autres. Entraine des bugs /!\
setInterval(() => {
    setTimer(timer + 1)
}, 1000)

// Va passer à 2 puis s'arrête.
// Au moment où l'on appelle le timer, timer fait référence à 1.
useEffect(() => {
    setInterval(() => {
        setTimer(timer + 1)
    }, 1000);
}, [])

// SOLUTION
// Si on utilise une fonction callback dans le setTimer, use State va lui fournir le nouveau state et on peut changer son state
useEffect(() => {
    const intervalID = setInterval(() => {
        setTimer(timer => timer + 1)
    }, 1000);

    // Cleanup function
    // Quand on détruit le composant (rendu conditionnel avec toggle) on l'enlève de la mémoire via le return
    return () => {
        clearInterval(intervalID);
    }
}, [])
```

## Destruction d'un composant
Un composant apparait, s'affiche, se met à jour et peut être détruit s'il n'est plus utilisé / visible pour ne pas surcharger la mémoire
```js
function App() {

  const [toggle, setToggle] = useState(true)

  // Fonction qui toggle le composant
  const toggleFunc = () => {
    setToggle(!toggle)
  }

  return (
    <div className="App">
      <button onClick={toggleFunc}>Toggle</button>
      {/* Si toggle est à TRUE, alors on affiche Timer */}
      {/* Si toggle est à FALSE, alors on n'affiche plus le composant et on lance la cleanup function */}
      <h2>{toggle && <Timer />}</h2>
    </div>
  );
}

function Timer() {

  const [timer, setTimer] = useState(1)


  useEffect(() => {
    const intervalID = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000);

    return () => {
      alert('COMPOSANT DETRUIT !')
      clearInterval(intervalID);
    }
  }, [])

  return (
    <div className="App">
      <h1>{timer}</h1>
    </div>
  );
}
```

## Les fragments
Afin d'éviter d'ajouter un noeud supplémentaire en HTML, on peut utiliser des fragments
```js
import { useState, useEffect, Fragment } from "react";
return (
  <Fragment>
      <h1>{timer}</h1>
  </Fragment>
);

// On peut aussi écrire les fragments de cette façon et sans importer React Fragment
return (
  <>
      <h1>{timer}</h1>
  </>
);
```

## Le hook "useRef()"
useRef() permet de sélectionner un élément du DOM pour ses propriétés et les modifier. On l'utilise avec useEffect() pour visualiser la référence après que le composant ce soit affiché
```js
import { useEffect, useRef, useState } from "react";
import './App.css';
import Video from './video.mp4';

function App() {

  const [toggle, setToggle] = useState(true)

  // On déclare useRef()
  const ref = useRef();

  // On utilise useEffect pour récupérer l'élément sur lequel est lié ref après le chargement du composant
  useEffect(() => {
    // On utilise ref pour mettre la vidéo sur pause au bout de 3s
    setTimeout(() => {
      ref.current.pause();
    }, 3000)
  }, [])

  const toggleFunc = () => {
    setToggle(!toggle)
  }

  return (
    <div className="App">
      {/* On déclare la video */}
      <video ref={ref} width="750" height="500" autoPlay controls muted>
        <source src={Video} />
      </video>

      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}
```

## Sélectionner un tableau d'éléments
```js
function App() {

  const [toggle, setToggle] = useState(true)

  // On déclare useRef()
  const ref = useRef([]);

  const toggleFunc = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    console.log(ref);
  }, [])

  // On crée une méthode pour ajouter chaque élement sélectionné
  const addToRef = el => {
    // Si l'élément sélectionné existe ET qu'il ne se trouve pas dans le tableau, on l'ajoute
    if(el && !ref.current.includes(el)) {
      ref.current.push(el)
    }
  }

  return (
    <div className="App">
      {/* On déclare les vidéos avec la méthode en ref */}
      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Video} />
      </video>
      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Video} />
      </video>
      <video ref={addToRef} width="750" height="500" autoPlay controls muted>
        <source src={Video} />
      </video>

      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}
```

## Utiliser "addEventListener"
Si on veut écouter sur l'objet global window ou document, on l'utilise dans useEffect()
```js
useEffect(() => {
  window.addEventListener('resize', actionResize);

  function actionResize() {
    console.log('Resized');
  }

  return () => {
    window.removeEventListener('resize', actionResize)
  }
}, [])
```

## Ne jamais modifier le state directement dans un tableau/objet
Quand on utilise un tableau ou un objet, on ne peut jamais modifier leur state directement.
```js
const [toggle, setToggle] = useState([1, 2, 3])
// Mauvaise façon !
const toggleFunc = () => {
  // On ajoute 4 au tableau du state toggle
  toggle.push(4);
  // On demande de changer le toggle mais on l'a déjà fait directement, donc React ne détecte aucun changement entre les 2 valeurs de state et ne va rien changer
  setToggle(toggle)
}

// Bonne façon
const toggleFunc = () => {
  // On crée une copie du tableau à copier
  const newArr = [...toggle];
  // On ajoute une valeur au nouveau tableau
  newArr.push(4);
  // On setToggle avec newArr
  setToggle(newArr)
}
```

## Comprendre "props.children"
Quand on ne sait pas ce qu'on attend de l'élément parent à l'élément enfant, on peut le récupérer via "props.children"
```js
// Dans Content.js
return (
    <div className="content">
        {props.children}
    </div>
)

// Dans App.js
return (
  <div className="App">
    <Content>
      <h1>Titre de mon article 1</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </Content>
    <Content>
      <h1>Titre de mon article 2</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </Content>
    <Content>
      <h1>Titre de mon article 3</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </Content>
    <button onClick={toggleFunc}>Toggle</button>
  </div>
);
```