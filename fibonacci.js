function generateFibonaccis(n) {
    var fib = [1, 1];
    for (var i = 2; i < n; i++) {
        fib[i] = fib[i - 2]+ fib[i - 1];
    }
    return fib;
}
var fib = generateFibonaccis(10);
console.log(fib.join(" "));