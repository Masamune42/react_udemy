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