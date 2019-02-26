function sameFrequency(num1, num2) {
    let first = num1.toString();
    let second = num2.toString();

    if (first.length !== second.length) {
        console.log(false);
        return false;
    }

    let lookup = {};

    for (let i = 0; i < first.length; i++) {
        let current = first.charAt(i);
        if (lookup[current]) {
            lookup[current]++;
        } else {
            lookup[current] = 1;
        }
    }

    for (let i = 0; i < second.length; i++) {
        let current = second.charAt(i);

        if (lookup[current]) {
            lookup[current]--;
        } else {
            console.log(false);
            return false;
        }
    }
    console.log(true);
    return true;
}

let anagram = new sameFrequency(123, 321);
let anagram1 = new sameFrequency(234, 123);
let anagram2 = new sameFrequency(567, 756);
let anagram3 = new sameFrequency(987, 2222);