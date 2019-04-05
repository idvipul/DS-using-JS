function capatalize(str) {
    let words = [];

    for (let word of str.split(" ")) {     // split on spaces
        words.push(word[0].toUpperCase() + word.slice(1));
    }

    console.log(words.join(' ')); // convert it back to string using .join on space
    return words.join(" ");
}

let sentence1 = new capatalize("a short sentence"); // A Short Sentence
let sentence2 = new capatalize("a lazy fox"); // A Lazy Fox
let sentence3 = new capatalize("look, it is working"); // Look, It Is Working