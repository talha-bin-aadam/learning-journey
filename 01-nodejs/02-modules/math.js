function sum(a, b){
    return a + b
}

function subtract(a, b){
    return a - b
}

function product(a, b){
    return a * b
}

function divide(a, b){
    if(b == 0) return "Cannot divide by zero"
    return a / b
}

module.exports = {sum, subtract, product, divide}