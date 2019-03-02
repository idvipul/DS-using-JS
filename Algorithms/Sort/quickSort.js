function pivot(arr, start = 0, end = arr.length + 1) {
    function swap(array, i , j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    // always considering 1st element as the pivot
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    // conditon exits when left = right --> base case
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivotIndex - 1);
        // right
        quickSort(arr, pivotIndex + 1, arr.length - 1);
    }
    console.log(arr);
    return arr;
}

let arr = new quickSort([8, 6, 7, 2, 10, 17, 9, 2]);
let arr1 = new quickSort([34, 22, 10, 19, 17]);