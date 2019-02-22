function validAnagram(first, second) {
    if (first.length !== second.length) {
        console.log(false);
        return false;
    }

    let lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first.charAt(i);
        if (lookup[letter]) {
            lookup[letter]++;
        } else {
            lookup[letter] = 1;
        }
    }
    // console.log(lookup);

    for (let i = 0; i < second.length; i++) {
        let letter = second.charAt(i);

        if (lookup[letter]) {
            lookup[letter]--;
        } else {
            console.log(false);
            return false;
        }
    }
    // console.log(lookup);
    console.log(true);
    return true;
}

let anagram = new validAnagram('anagram', 'gramana');
let anagram1 = new validAnagram('anagram', 'ana');
let anagram2 = new validAnagram('altitude', 'latitude');
let anagram3 = new validAnagram('anagram', 'anagram');