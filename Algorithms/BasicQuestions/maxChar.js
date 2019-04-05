// similar to anagram problem
function maxChar(str) {
    let lookup = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) { // for of is used to iterate through any type of iterable object
        if (!lookup[char]) {
            lookup[char] = 1;
        } else {
            lookup[char]++;
        }
    }

    for (let char in lookup) { // for in is used to iterate through any type of JS object
        if (lookup[char] > max) {
            max = lookup[char];
            maxChar = char;
        }
    }

    console.log(maxChar);
    return maxChar
}

let str1 = new maxChar("abccccccccc"); // c
let str2 = new maxChar("1231111"); // 1