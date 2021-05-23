const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./dist/generateMarkdown');

const Employee = require("./lib/Employee.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

const managerQuestions = [
    {
        type: 'input',
        name: 'Managername',
        message: `What is the team manager's name?`,
    },
    {
        type: 'input',
        name: 'Managerid',
        message: `What is the team manager's id?`,
    },
    {
        type: 'input',
        name: 'Managersemail',
        message: `What is the team manager's email?`,
    },
    {
        type: 'input',
        name: 'Managernumber',
        message: `What is the team manager's office number?`,
    },
];

const employeeQuestions = [
    {
        type: 'checkbox',
        name: 'membertype',
        message: 'Which type of team member would you like to add?',
        choices: [`Engineer`, `Intern`, `I don't want to add any more team members`],
    },
    {
        type: 'input',
        name: 'XXXXXname',
        message: `What is your XXXXXX name?`,
    },
    {
        type: 'input',
        name: 'XXXXXid',
        message: `What is you XXXXXX id? `,
    },
    {
        type: 'input',
        name: 'XXXXXemail',
        message: `What is you XXXXX email? `,
    },
    {
        type: 'input',
        name: 'XXXXgithub',
        message: `What is you XXXXXX Github userman? `,
    },
    {
        type: 'checkbox',
        name: 'membertype',
        message: 'Which type of team member would you like to add?',
        choices: [`Engineer`, `Intern`, `I don't want to add any more team members`],
    },
    {
        type: 'input',
        name: 'XXXXXname',
        message: `What is your XXXXXX name?`,
    },
    {
        type: 'input',
        name: 'XXXXXid',
        message: `What is you XXXXXX id? `,
    },
    {
        type: 'input',
        name: 'XXXXXemail',
        message: `What is you XXXXX email? `,
    },
    {
        type: 'input',
        name: 'XXXXgithub',
        message: `What is you XXXXXX Github userman? `,
    },
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Successfully created the Team Profile Generator page!')
    });
};

function init() { 
    inquirer.prompt(questions)
    .then(function (userAnswer) {
        console.log(userAnswer)
        writeToFile("index.html", generateMarkdown(userAnswer));
    });
}


init();