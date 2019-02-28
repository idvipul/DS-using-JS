function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    return base * power(base, exponent - 1);
}

let pow = new power(2,0); // 1
let pow1 = new power(2,2); // 4
let pow2 = new power(2,4); // 16