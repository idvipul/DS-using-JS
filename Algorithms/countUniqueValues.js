// accepts a sorted array
function countUniqueValues(arr) {
    let i = 0;
    let j;

    for (j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    console.log(i + 1);
    return i + 1;
}

let array = new countUniqueValues([1, 2, 2, 2, 3, 4, 7, 7, 7, 9]);
let array1 = new countUniqueValues([-2, -2, -2, -1, 1, 2, 2]);