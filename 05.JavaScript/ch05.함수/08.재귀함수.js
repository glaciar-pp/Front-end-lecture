//재귀함수(Recursive function)

function factorial(num) {
    let product = 1;
    for(let i=1; i <= num;i++)
    product *= i;
    return product;
}
console.log(factorial(10));

function facto(num) {
    if (num==0)
        return 1;
    return num * facto(num - 1);
}
/*
10 * facto(9)
10 * 9 * facto(8)
10 * 9 * 8 * facto(7)
...

*/
console.log(facto(10));

//피보나치(Fibonacci) 수열, 상식!
function fibonacci(num) {
    if (num == 0 || num == 1)
        return 1;
    return fibonacci(num-1) + fibonacci(num-2);
}

for(let i = 0; i <= 10; i++)
console.log(fibonacci(i));