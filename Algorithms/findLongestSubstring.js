function findLongestSubstring(str) {
    let maxLength = 0;
    let i = 0, j = 0;
    let set = new Set();

    while (j < str.length) {
        let current = str.charAt(j);

        if (!set.has(current)) {
            set.add(current);
            j++;
            maxLength = Math.max(maxLength, j - i);
        } else {
            set.delete(str.charAt(i));
            i++;
        }
    }
    console.log(maxLength);
    return maxLength;
}

let str1 = new findLongestSubstring(""); // 0
let str2 = new findLongestSubstring("rithmschool"); // 7
let str3 = new findLongestSubstring("thisisawesome"); // 6
let str4 = new findLongestSubstring("thecatinthehat"); // 7
let str5 = new findLongestSubstring("bbbbbbb"); // 1
let str6 = new findLongestSubstring("longestsubstring"); // 8
let str7 = new findLongestSubstring("thisishowwedoit"); // 6