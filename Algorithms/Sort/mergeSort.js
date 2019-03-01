function merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let results = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    return results;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    console.log(merge(left, right));
    return merge(left, right);
}

let arr = new mergeSort([8, 6, 7, 2, 10, 17, 9, 2]);
let arr1 = new mergeSort([34, 22, 10, 19, 17]);