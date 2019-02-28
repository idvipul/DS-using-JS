// iterative approach
// function productOfArray(arr) {
//     let product = 1;
//     for (let i = 0; i < arr.length; i++) {
//         product *= arr[i];
//     }
//     return product;
// }

function productOfArray(arr) {
    if (!arr.length) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}

let arr = new productOfArray([1,2,3]); // 6
let arr1 = new productOfArray([1,2,3,10]); // 60