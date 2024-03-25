import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "selet number 1",
        type: "number",
        name: "num1",
    },
    {
        message: "selet number 2",
        type: "number",
        name: "num2",
    },
    {
        message: "selet perator",
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/"]
    }
]);
const { num1, num2, operator } = answer;
let result;
switch (operator) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    default:
        console.log("Invalid");
}
console.log(`${num1} ${operator} ${num2} = ${result}`);
