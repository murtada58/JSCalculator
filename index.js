const readline = require("readline-sync");


const OPERATORS = {
                    "+" : (num1, num2) => num1  + num2,
                    "-" : (num1, num2) => num1  - num2,
                    "*" : (num1, num2) => num1  * num2,
                    "/" : (num1, num2) => num1  / num2
                };


console.log("Welcome to the calculator!");

console.log("Please enter an operator: ");
const OPERATOR = readline.prompt();
if (!(OPERATOR in OPERATORS))
{
    console.log(`${OPERATOR} is not a valid operator`);
    process.exit()
}

console.log(`How many numbers do you want to ${OPERATOR}? `);
const NUMBERS_COUNT = readline.prompt();
if (parseInt(NUMBERS_COUNT) < 2)
{
    console.log("You need to input at least 2 numbers");
    process.exit()
}

console.log("Please enter number 1: ");
let result = parseFloat(readline.prompt());
let equation = `${result}`;
for (let i = 2; i <= NUMBERS_COUNT; i++)
{
    console.log(`Please enter number ${i}: `);
    const NUMBER = parseFloat(readline.prompt());
    result = OPERATORS[OPERATOR](result, NUMBER);
    equation += ` ${OPERATOR} ${NUMBER}`;
}

console.log(`${equation} = ${result}`);