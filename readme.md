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