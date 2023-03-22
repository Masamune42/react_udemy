// Scope

// function foo() {
//     if (true) {
//         // function scope
//         var x = 5;
//         // bloc scope
//         let y = 5;
//         const z = 5;
//     }

//     console.log(x);
// }

// foo()

// Redéclaration
// var x = 5
// var x = 10
// x = 10;
// console.log(x);

// Hoisting
// foo()
// function foo() {
//     console.log("hello");
// }

// console.log(x);
// console.log(y);
// var x = 10;
// let y = 10

// Global
// var maVarX = 10;
// let maVarY = 10;
// console.log(window);

// Différence basique
const x = 10;
// Pas possible, idem avec objets
// x = "abcv"
const y = {a: 5};
y.a = 10
console.log(y);