function maxSubArraySum(arr, windowSize) {
    if (arr.length < windowSize) {
        console.log(null);
        return null;
    }

    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < windowSize; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;

    for (let i = windowSize; i < arr.length; i++) {
        tempSum += arr[i] - arr[i - windowSize];
        maxSum = Math.max(tempSum, maxSum);
    }
    console.log(maxSum);
    return maxSum;
}

let array1 = new maxSubArraySum([100, 200, 300, 400], 2);  // 700
let array2 = new maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);  // 39
let array3 = new maxSubArraySum([-3, 4, 0, -2, 6, -1], 2); // 5
let array4 = new maxSubArraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2); // 5
let array5 = new maxSubArraySum([2, 3], 3); // null