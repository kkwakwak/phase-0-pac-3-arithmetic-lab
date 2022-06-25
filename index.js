function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function increment(n) {
    return n += 1;
}
console.log(increment(n));

function decrement(n) {
    return n -= 1;
}
console.log(decrement(n));

function makeInt(n) {
    return parseInt(n, 10)
}
console.log(makeInt(n));

function preserveDecimal(n) {
    return parseFloat(n)
}
console.log(preserveDecimal(n));