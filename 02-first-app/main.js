// importing the calculator object (with 'add' and 'subtract' functions) from 'calc.js'

let calculator = require('./calc')
let file_ops = require('./file_ops');
let chalk = require('chalk').default;


console.log(calculator.add(100,200))
console.log(calculator.subtract(100, 200));

console.log(chalk.red('this line is in red color'));
console.log(chalk.yellow('this line is in yellow color'));

const fileContents = file_ops.getFileContents()
console.log(fileContents)