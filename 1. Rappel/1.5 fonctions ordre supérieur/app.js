const rawArr = [5, 6, 5889, 52, 415, 120]
// Méthode classique
// const newArr = [];

// for (let i = 0; i < rawArr.length; i++) {
//     if (rawArr[i] > 100) {
//         newArr.push(rawArr[i])
//     }
// }

// console.log(newArr);

// Fonction d'ordre supérieur
function supArr(arr, fn) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i])) {
            newArr.push(arr[i])
        }
    }

    return newArr;
}

const arrSup100 = supArr(rawArr, (item) => {
    if(item > 100) {
        return item;
    }
})

const arrSup10 = supArr(rawArr, (item) => {
    if(item > 10) {
        return item;
    }
})

console.log(arrSup100);