function maxSum(arr, windowSize) {
    if (arr.length < windowSize) {
        console.log(null);
        return null;
    }

    let maxSum = 0;
    let tempSum = 0;
    let i;

    for (i = 0; i < windowSize; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;

    for (i = windowSize; i < arr.length; i++) {
        tempSum += arr[i] - arr[i -  windowSize];
        maxSum = Math.max(tempSum, maxSum);
    }
    console.log(maxSum);
    return maxSum;
}

let array = new maxSum([2, 6, 9, 2, 1, 8, 5, 6, 3], 4);
let array1 = new maxSum([1,3,-1,-3,5,3,6,7], 3);
let array2 = new maxSum([1,3,-1,-3,5,3,6,7], 13);