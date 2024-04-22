#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answer = await inquirer.prompt([{
            name: "q1",
            type: "input",
            message: "what do you want to add in your todo? "
        },
        {
            name: "q2",
            type: "confirm",
            message: "do you want to add more to your todo?",
            default: false
        }
    ]);
    const { q1, q2 } = answer;
    if (q1) {
        todos.push(q1);
    }
    else {
        console.log("Kindly add valid input");
    }
    loop = q2;
}
if (todos.length > 0) {
    console.log("Your Todo list: ");
    todos.forEach(q1 => {
        console.log(q1);
    });
}
else {
    console.log("no todos found");
}
