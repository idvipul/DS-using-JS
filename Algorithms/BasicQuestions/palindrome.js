function palindrome(str) {
    isPalindrome = true;

    // solution 1 - using .reverse()

    // let reversed = [...str].reverse().join('');
    // if (str !== reversed) {
    //     isPalindrome = false;
    // }
    //
    // console.log(isPalindrome);
    // return isPalindrome;

    // solution 2 -- using two pointer

    let left = 0;
    let right = str.length - 1;

    while (right > left) {
        if (str[left] !== str[right]) {
            isPalindrome = false;
        }
        left++;
        right--;
    }

    console.log(isPalindrome);
    return isPalindrome;
}

let str = new palindrome("civic");
let str1 = new palindrome("abcdcbb");
let str2 = new palindrome("a");