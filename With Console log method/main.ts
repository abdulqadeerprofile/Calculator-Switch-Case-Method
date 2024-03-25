import inquirer from "inquirer";
import chalk from "chalk";

const answer: { 
    num1:number 
    num2:number
    operator:string 
} = await inquirer.prompt([
    {
        message:"selet number 1",
        type:"number",
        name:"num1",
    },

    {
        message:"selet number 2",
        type:"number",
        name:"num2",
    },

    {
        message:"selet perator",
        type:"list",
        name:"operator",
        choices:["+","-","*","/"]
    }

])

const { num1, num2, operator } = answer;
let result 
    switch (operator) {
        case "+":
            num1 + num2
            break;
        case "-":
            console.log(num1 - num2);
            break;
        case "*":
            console.log(num1 * num2);
            break;    
        case "*":
            console.log(num1 / num2);
            break;
        default :
        console.log("Invalid")
    }