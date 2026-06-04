// var num = 5
// console.log(num)

// function sum(...nums){
//     return nums.reduce((curr, acc) => curr + acc)
// }

// function product(...nums){
//     return nums.reduce((curr, acc) => curr * acc)
// }


// COMMONJS
// const sum = require("./sum")
// const product = require("./product")
// const math = require("./math")
// const sum = math.sum
// const product = math.product
// const {sum, product} = math
// const {sum, subtract, product, divide} = require("./math")

// console.log(sum(1,2,3,4), product(1,2,3,4))
// console.log(sum(1,2))
// console.log(subtract(1,2))
// console.log(product(1,2))
// console.log(divide(1,0))

// ES6

import {sum, subtract, product, divide} from "./math.mjs"

console.log(sum(1,2))
console.log(subtract(1,2))
console.log(product(1,2))
console.log(divide(1,0))