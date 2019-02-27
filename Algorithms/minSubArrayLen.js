function minSubArrayLen(arr, target) {
    let start = 0;
    let end = 0;
    let sum = 0;
    let minLen = Number.MAX_VALUE;
    let len = arr.length;

    while (end < len) {
        // Keep adding array elements while sum is smaller than x
        while (sum < target && end < len) {
            sum += arr[end];
            end++;
        }

        // If current sum becomes greater than x
        while (sum >= target) {
            // Update minimum length if needed
            minLen = Math.min(minLen, end - start);

            // remove starting elements
            sum -= arr[start];
            start++;
        }
    }

    console.log(minLen === Number.MAX_VALUE ? 0 : minLen);
    return minLen === Number.MAX_VALUE ? 0 : minLen;
}

let arr1 = new minSubArrayLen([2, 3, 1, 2, 4, 3], 7); // 2 -> [4, 3]
let arr2 = new minSubArrayLen([2, 1, 6, 5, 4], 9); // 2 -> [5, 4]
let arr3 = new minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52); // 1 -> 62
let arr4 = new minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39); // 3
let arr5 = new minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55); // 5
let arr6 = new minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11); // 2
let arr7 = new minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95); // 0