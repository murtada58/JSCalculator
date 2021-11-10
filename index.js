const readline = require("readline-sync");


console.log("Welcome to the calculator!");

console.log("Please enter a number");
const num1 = readline.prompt();

console.log("Please enter another number");
const num2 = readline.prompt();

const result = parseFloat(num1) * parseFloat(num2);
console.log(`${num1} * ${num2} = ${result}`)
