function fib(num){
    // add whatever parameters you deem necessary - good luck!
    if (num <= 2) return 1;
    return fib(num - 1) + fib(num - 2);
}

let num = new fib(4); // 3
let num1 = new fib(10); // 55
let num2 = new fib(28); // 317811
let num3 = new fib(35); // 9227465
