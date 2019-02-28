function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    console.log(arr);
    return arr;
}

let arr = new selectionSort([8, 6, 7, 2, 10, 17, 9, 2]);
let arr1 = new selectionSort([34, 22, 10, 19, 17]);