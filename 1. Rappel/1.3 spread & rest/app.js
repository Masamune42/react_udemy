const arr = [1, 2, 3];
const arr2 = [...arr, 4];

console.log(arr2);

const myObj = {
    a: 1,
    b: 2,
    c: 3
}
const myObj2 = {
    ...myObj,
    d: 4
}

console.log(myObj2);

function add(...args) {

    let result = 0;

    for (const arg of args) {
        result += arg;
    }

    return result;
}

console.log(add(2, 2, 4, 5));