// iterative approach
function factorial(num) {
    let total = 1;
    for (let i = num; i > 1; i--) {
        total *= i;
    }
    console.log(total);
    return total;
}

// recuesive approach
function factorialR(num) {
    if (num === 1) {
        return 1;
    }
    return num * factorialR(num - 1);
}

let fact = factorial(3);
let fact1 = factorial(5);
let factR = factorialR(3);
let fact1R = factorialR(5);