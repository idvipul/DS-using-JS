function stringReversal(str)  {
    // solution 1 -- use .reverse()
    // convert string to array using spread operator
    // let arr = [...str];
    // let reversed = "";
    // arr.reverse();
    // reversed = arr.join("");
    // console.log(reversed);
    // return reversed;

    // solution 2 -- using for loop
    // let reversed = "";
    //
    // for (let i = str.length - 1; i >= 0; i--) {
    //     reversed += str[i];
    // }
    //
    // for (let i = 0; i < str.length; i++) {
    //     reversed = str[i] + reversed;
    // }

    // console.log(reversed);
    // return reversed;

    // solution 3 -- using for of
    let reversed = "";

    for (let char of str) {
        reversed = char + reversed;
    }

    console.log(reversed);
    return reversed;
}

let string = stringReversal("apple");
let string1 = stringReversal("Greetings!");