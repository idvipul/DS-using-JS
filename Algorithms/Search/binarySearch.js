// array should be sorted
function binarySearch(arr, value) {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);

    while (arr[middle] !== value && left <= right) {
        if (value < arr[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
        middle = Math.floor((left + right) / 2);
    }

    if (arr[middle] === value) {
        console.log(middle);
        return middle;
    } else {
        console.log(-1);
        return -1;
    }
}

let arr1 = new binarySearch([2, 3, 5, 7, 8, 9], 7);
let arr2 = new binarySearch([2, 3, 5, 7, 8, 9], 17);
let arr3 = new binarySearch([], 17);
let arr4 = new binarySearch(["Alaska", "California", "District of Columbia", "Florida", "Kansas", "Oregaon", "Texas"], "Oregaon");