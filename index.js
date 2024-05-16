#! /usr/bin/env node
import inquirer from "inquirer";
let stundentId = Math.floor(10000 + Math.random() * 9999);
let myBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: "Enter student name.",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please Enter a non-empty value.";
        },
    },
    {
        name: "courses",
        type: "list",
        message: "Select the course to enrolled in",
        choices: ["HTML", "CSS", "typescript", "javascript", "python"]
    }
]);
const coursFees = {
    "HTML": 1500,
    "CSS": 1700,
    "typescript": 2500,
    "javascript": 3000,
    "python": 4500
};
console.log(`\nCourse Fee: ${coursFees[answer.courses]} /=`);
console.log(`Balance: ${myBalance}`);
let paymentAns = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "select payment method",
        choices: ["bank transfer", "Jazz cash", "easypaisa"]
    },
    {
        name: "amount",
        type: "input",
        message: "money transfer",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please Enter a non-empty value";
        }
    }
]);
console.log(`\nyou select payment method | ${paymentAns.payment}`);
const coursFee = coursFees[answer.courses];
const paymentAmount = parseFloat(paymentAns.amount);
if (coursFee === paymentAmount) {
    console.log(`\nCongratulation you have succesfully enrolled in | ${answer.courses}`);
    let Ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "what would you like to do next? ",
            choices: ["view status", "Exit"]
        }
    ]);
    if (Ans.select === "view status") {
        console.log("\n>>>>>>>Status<<<<<<<\n");
        console.log(`Student Name: ${answer.student}`);
        console.log(`Student ID: ${stundentId}`);
        console.log(`Cours: ${answer.courses}`);
        console.log(`Fees: ${paymentAmount}`);
        console.log(`Balance:${myBalance += paymentAmount}`);
    }
    else {
        console.log("\nExiting student managment saystem");
    }
}
else {
    console.log(`\nInvalid amount due to courses.`);
}
;
