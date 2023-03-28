# Cours React Udemy

## Tips
- Avec l'extension ES7 React on peut écrire "rfc" pour créer un composant en entier
```js
// On supprime cette ligne avec les nouvelles versions de React
import React from 'react'

export default function Item() {
  return (
    
  )
}
```

## Notes
On peut installer de nouveaux modules

```shell
# Bootstrap
npm install bootstrap
npm install uuid
```
Utilisation dans les projets
```js
// Dans App.js
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { v4 as uuidv4 } from 'uuid';
```