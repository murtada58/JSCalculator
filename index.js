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
    let  operator = getValidInput(  "Please enter an operator: ",
                                    (response) => response,
                                    (resposne) => `${resposne} is not a valid operator, please try again: `,
                                    (response) => response in OPERATORS
                                );

    const NUMBERS_COUNT = Math.round(getInputAsNumber(`How many numbers do you want to ${operator}? `));
    let numbers = Array(NUMBERS_COUNT);

    if (NUMBERS_COUNT > 0)
    {
        let number = getInputAsNumber("Please enter number 1: ");
        numbers.push(number);
        let equation = `${number}`;
        for (let i = 2; i <= NUMBERS_COUNT; i++)
        {
            number = getInputAsNumber(`Please enter number ${i}: `);
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

function getValidInput( message,
                        resposneHandler = (response) => response,
                        invalidMessageHandler = (resposne) => "Try again",
                        validationFunction = (response) => resposne
                    )
{
    console.log(message);
    let response = resposneHandler(readline.prompt());
    while (!validationFunction(response))
    {
        console.log(invalidMessageHandler(response));
        response = resposneHandler(readline.prompt());
    }

    return response;
}

function getInputAsNumber(message)
{
    return getValidInput(   message,
                            parseFloat,
                            (resposne) => "That is not a valid number, please try again: ",
                            (response) => !isNaN(response)
                        )
}