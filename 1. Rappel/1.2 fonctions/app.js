// function foo() {
//     console.log("a");
// }
// équivalent en fonction fléchée
// const foo = () => {
//     console.log("a");
// }

// const add = (a, b) => {
//     return a + b;
// }
// équivalent en plus cours (si on a qu'un return)
// const add = (a, b) => a + b;
// add(1, 3);

// const myObj = {
//     foo: function () {
//         console.log('hello');
//     }
// }
// Peut s'écrire
// const myObj = {
//     foo() {
//         console.log('hello');
//     }
// }

// const myObj = {
//     a: 5,
//     foo() {
//         console.log(this);
//     }
// }
// Avec une méthode fléchée
const myObj = {
    a: 5,
    foo: () => {
        console.log(this);
    }
}

myObj.foo();