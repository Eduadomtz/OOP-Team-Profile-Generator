const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./dist/generateMarkdown');
//const generateHTML = require('./dist/index');

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
const employeeQuestions =
    [
        {
            type: 'list',
            name: 'memberType',
            message: 'Which type of team member would you like to add?',
            choices: ["Engineer", "Intern", "I don't want to add any more team members"],
        },
    ];

const engineerQuestions =
    [
        {
            type: 'input',
            name: 'EngineerName',
            message: `What is your Engineer name?`,
        },
        {
            type: 'input',
            name: 'EngineerId',
            message: `What is you Engineer id? `,
        },
        {
            type: 'input',
            name: 'EngineerEmail',
            message: `What is you Engineer email? `,
        },
        {
            type: 'input',
            name: 'EmployeesGithub',
            message: `What is you Engineer Github userman? `,
        },
    ];

const internQuestions =
    [
        {
            type: 'input',
            name: 'InternName',
            message: `What is your Intern name?`,
        },
        {
            type: 'input',
            name: 'InternId',
            message: `What is you Intern id? `,
        },
        {
            type: 'input',
            name: 'InternEmail',
            message: `What is you Intern email? `,
        },
        {
            type: 'input',
            name: 'InternGithub',
            message: `What is you Intern Github userman? `,
        }
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
    inquirer.prompt(managerQuestions)
        .then(function (userAnswer) {
            console.log(userAnswer)
            //writeToFile("index.html", generateMarkdown(userAnswer));
            newMember();
        });
}

function newMember() {
    inquirer.prompt(employeeQuestions)
        .then((userAnswer) => {

            switch (userAnswer.memberType) {
                case "Engineer":
                    inquirer.prompt(engineerQuestions).then(userAnswer);
                    break;
                    console.log(userAnswer)
                case "Intern":
                    inquirer.prompt(internQuestions).then(userAnswer);
                    console.log(userAnswer)
                default:
                    break;

            }

            // writeToFile("index.html", generateMarkdown(userAnswer));
        });

}


init();