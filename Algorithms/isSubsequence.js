function isSubsequence(str1, str2) {
    if (str1.length === 0) {
        console.log(false);
        return true;
    }

    for (let i = 0, j = 0; i < str2.length; i++) {
        if (str1[j] === str2[i]) {
            j++;
        }
        if (j === str1.length) {
            console.log(true);
            return true;
        }
    }
    console.log(false);
    return false;
}

let string1 = new isSubsequence("hello", "hello world");
let string2 = new isSubsequence("sing", "sting");
let string3 = new isSubsequence("abc", "abracadabra");
let string4 = new isSubsequence("abc", "acb");
let string5 = new isSubsequence("", "acb");