const readline = require("readline-sync");


const OPERATORS = {
                    "+" : (num1, num2) => num1  + num2,
                    "-" : (num1, num2) => num1  - num2,
                    "*" : (num1, num2) => num1  * num2,
                    "/" : (num1, num2) => num1  / num2
                };

let running = true;
console.log("Welcome to the calculator!");
while (running)
{
    console.log("Please enter an operator: ");
    let  operator = readline.prompt();
    while (!(operator in OPERATORS))
    {
        console.log(`${operator} is not a valid operator, please try again: `);
        operator = readline.prompt();
    }
    
    const NUMBERS_COUNT = Math.round(GetInputAsNumber(`How many numbers do you want to ${operator}? `));
    let numbers = Array(NUMBERS_COUNT);

    if (NUMBERS_COUNT > 0)
    {
        let number = GetInputAsNumber("Please enter number 1: ");
        numbers.push(number);
        let equation = `${number}`;
        for (let i = 2; i <= NUMBERS_COUNT; i++)
        {
            number = GetInputAsNumber(`Please enter number ${i}: `);
            numbers.push(number);
            equation += ` ${operator} ${number}`;
        }
        const RESULT = numbers.reduce((previousValue, currentValue) => OPERATORS[operator](previousValue, currentValue));
        console.log(`${equation} = ${RESULT}`);
    }

    console.log("\n do another calculation? (y, n)");
    running = readline.prompt().toLowerCase() === "y";
}
console.log("Bye :)");

function GetInputAsNumber(message)
{
    console.log(message);
    let response = parseFloat(readline.prompt());
    while (isNaN(response))
    {
        console.log("That is not a valid number, please try again: ")
        response = parseFloat(readline.prompt());
    }
    return response;
}