function bubbleSort(arr) {
    let noSwaps;

    for (let i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    console.log(arr);
    return arr;
}

let arr = new bubbleSort([8, 6, 7, 10, 17, 9, 2]);
let arr1 = new bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);