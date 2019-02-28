function linearSearch(arr, value) {
    if (arr.length === 0) {
        console.log(-1);
        return -1;
    }

    let index = -1;

    for (let i = 0; i < arr.length; i++) {
        if (value === arr[i]) {
            index = i;
        }
    }
    console.log(index);
    return index;
}

let arr1 = new linearSearch([2, 3, 5, 7, 8, 9], 7);
let arr2 = new linearSearch([2, 3, 5, 7, 8, 9], 17);
let arr3 = new linearSearch([], 17);
let arr4 = new linearSearch(["Utah", "California", "Alaska", "Florida", "Oregaon", "Texas"], "Oregaon");