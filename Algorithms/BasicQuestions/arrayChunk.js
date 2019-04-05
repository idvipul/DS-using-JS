function arrayChunk(arr, size) {
    let chunked = [];

    // solution 1 -- using.slice
    let index = 0;

    while (index < arr.length) {
        chunked.push(arr.slice(index, index + size));
        index += size;
    }

    // solution 2 -- using for of
    // for (let char of arr) {
    //     let last = chunked[chunked.length - 1];
    //
    //     if (!last || last.length === size) {
    //         chunked.push([char]);
    //     } else {
    //         last.push(char);
    //     }
    // }

    console.log(chunked);
    return chunked;
}

let arr1 = new arrayChunk([1, 2, 3, 4], 2);
let arr2 = new arrayChunk([1, 2, 3, 4, 5], 2);
let arr3 = new arrayChunk([1, 2, 3, 4, 5, 6, 7, 8], 3);
let arr4 = new arrayChunk([1, 2, 3, 4, 5, 6, 7], 10);