const pays = {
    nom: "Italie",
    pop: 60
}

// const {nom, pop} = pays;

const data = ({ nom }) => nom;

console.log(data(pays));

const arr = [1, 2, 3];

const [a, b, c] = arr;

console.log(a, b, c);