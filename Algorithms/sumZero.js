// accepts a sorted array
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    let sum;

    while (left < right) {
        sum = arr[left] + arr[right];

        if (sum === 0) {
            console.log(arr[left], arr[right]);
            return arr[left], arr[right];
        } else if(sum > 0) {
            right--;
        } else {
            left++;
        }
    }
    console.log(undefined);
}

let array = new sumZero([-5, -3, -2, 0, 1, 3, 4]);
let array1 = new sumZero([-5, -4, -2, 0, 1, 3, 7, 22]);