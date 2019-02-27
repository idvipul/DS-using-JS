function areThereDuplicates(...args) {
    args.sort((a, b) => a > b);

    // args.sort((a, b) => a - b); -- does not work for characters

    // args.sort(function(a, b) {return a - b});

    // args.sort(function(a, b) {
    //     return a > b ? 1 : b > a ? -1 : 0;
    // })

    let start = 0;
    let next;

    for (next = 1; next < args.length; next++) {
        if(args[start] === args[next]){
            console.log(true);
            return true;
        }
        start++;
    }
    console.log(false);
    return false;
}

let text1 = areThereDuplicates(1, 2, 3);
let text2 = areThereDuplicates(1, 2, 2,);
let text3 = areThereDuplicates('a', 'b', 'c', 'a');
