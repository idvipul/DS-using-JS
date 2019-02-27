// accepts a sorted array
function averagePair(arr, average) {
    if (arr.length < 1) {
        console.log(false);
        return false;
    }

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let avg = arr[left] + arr[right] / 2;
        if ( avg === average ) {
            console.log(true);
            return true;
        } else if (avg < average) {
            left++;
        } else {
            right--;
        }
    }
    console.log(false);
    return false;
}

let array1 = new averagePair([1, 2, 3], 2.5);
let array2 = new averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
let array3 = new averagePair([-1, 0, 3, 4, 5, 6], 4.1);
let array4 = new averagePair([], 4);