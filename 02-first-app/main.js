// importing the calculator object (with 'add' and 'subtract' functions) from 'calc.js'

let calculator = require('./calc')
let file_ops = require('./file_ops');

console.log(calculator.add(100,200))
console.log(calculator.subtract(100, 200));

const fileContents = file_ops.getFileContents()
console.log(fileContents)