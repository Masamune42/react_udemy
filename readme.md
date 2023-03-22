# Cours React Udemy

## Notes

## Cours

### 1. Rappel
> 1.1 var, let et const

- var -> function scope, peut être redéclaré mais peut apporter des bugs. Si déclaré, on peut y avoir accès dans window et donc en variable global.
- let, const -> bloc scope, on ne les redéclare pas = moins de bugs. Si déclaré, ne fera pas parti des variables globales.

> 1.2 Fonctions fléchées et classiques

Les fonctions fléchées permettent de ne pas avoir de hoisting
```js
const add = (a, b) => {
    return a + b;
}
// équivalent en plus cours (si on a qu'un return)
// un seul paramètre = pas de parenthèse
const add = (a, b) => a + b;
```
Fonction dans un objet = une méthode
```js
const myObj = {
    foo: function () {
        console.log('hello');
    }
}
// Peut s'écrire
const myObj = {
    foo() {
        console.log('hello');
    }
}
```

```js
// this -> fait référence au contexte appelant
const myObj = {
    a: 5,
    foo() {
        console.log(this);
    }
}
```
```js
// this -> fait référence au contexte englobant (ce qui englobe l'objet qui appelle)
const myObj = {
    a: 5,
    foo: () => {
        console.log(this);
    }
}
```

> 1.3 Spread & rest

Les spread operators sont utiles quand on a envie d'utiliser tous les élémnents d'un tableau avec une méthode ou quand on veut copier un tableau dans un autre
```js
const arr = [1,2,3];
// On crée un tableau à partir du 1er et on ajoute 4
const arr2 = [...arr, 4];

const myObj = {
    a: 1,
    b: 2,
    c: 3
}
// Idem avec un objet
const myObj2 = {
    ...myObj,
    d: 4
}
// rest operator
// On récupère les 2 1ers arguments a et b et le reste dans args
function add(a, b, ...args) {
    return (args);
}
// On additione tous les éléments passés en paramètre
function add(...args) {
    
    let result = 0;

    for (const arg of args) {
        result += arg;
    }

    return result;
}
```

> 1.4 Fonctions pures
```js
// Fonction impure
let x = 2;
// On cumule 2 erreurs :
// 1. On change un élément en dehors de la fonction
// 2. On ne retourne pas le même résultat même si on lui passe le même argument
const add1 = y => x += y;

// Fonction pure
// 1. On ne touche à aucun élément extérieur
// 2. Retourne toujours la même chose
const add2 = (a, b) => a + b;
```

> 1.5 Fonctions d'ordre supérieur

C'est une fonction qui en prend une autre en paramètre, qui en retourne une autre ou les 2
```js
const rawArr = [5, 6, 5889, 52, 415, 120]
// Méthode classique
const newArr = [];

for (let i = 0; i < rawArr.length; i++) {
    if (rawArr[i] > 100) {
        newArr.push(rawArr[i])
    }
}
// Fonction d'ordre supérieur
// On reçoit un tableau et une fonction en paramètre
function supArr(arr, fn) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        // On utilise fn avec arr[i] en paramètre
        if (fn(arr[i])) {
            newArr.push(arr[i])
        }
    }

    return newArr;
}
// On récupère toutes les valeurs de rawArr avec les valeurs supérieures à 100 en passant une fonction fléchée qui permet de le faire
const arrSup100 = supArr(rawArr, (item) => {
    if(item > 100) {
        return item;
    }
})
// Idem avec 10
const arrSup10 = supArr(rawArr, (item) => {
    if(item > 10) {
        return item;
    }
})
```