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

console.log("Please enter a number: ");
const NUM1 = readline.prompt();

console.log("Please enter another number: ");
const NUM2 = readline.prompt();


if (OPERATOR in OPERATORS)
{
    const RESULT = OPERATORS[OPERATOR](parseFloat(NUM1), parseFloat(NUM2));
    console.log(`${NUM1} ${OPERATOR} ${NUM2} = ${RESULT}`);
}
else
{
    console.log(`${OPERATOR} is not a valid operator`);
}
