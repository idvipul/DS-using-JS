function isSubsequence(str1, str2) {
    let first = [];
    let second = [];

    for (let i = 0; i < str1.length; i++) {
        first[i] = (str1.charAt(i));
    }

    for (let i = 0; i < str2.length; i++) {
        second[i] = (str2.charAt(i));
    }

    for (let i = 0, j = 0; i < second.length; i++) {
        if (first[j] === second[i]) {
            j++;
        }
        if (j === first.length) {
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