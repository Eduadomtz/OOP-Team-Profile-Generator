const inquirer = require('inquirer');
const fs = require('fs');
const render = require('./src/generateHTML.js');

const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const Manager = require("./lib/Manager.js");

const teamMembers = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'ManagerName',
        message: `What is the team manager's name?`,
    },
    {
        type: 'input',
        name: 'ManagerId',
        message: `What is the team manager's id?`,
    },
    {
        type: 'input',
        name: 'ManagerEmail',
        message: `What is the team manager's email?`,
    },
    {
        type: 'input',
        name: 'ManagerNumber',
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
            name: 'EngenieerGithub',
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
            message: `What is your Intern id? `,
        },
        {
            type: 'input',
            name: 'InternEmail',
            message: `What is your Intern email? `,
        },
        {
            type: 'input',
            name: 'InternGithub',
            message: `What is your Intern Github userman? `,
        }
    ];


function addManager(data) {
    const manager = new Manager(
        data.ManagerName,
        data.ManagerId,
        data.ManagerEmail,
        data.ManagerNumber);
    teamMembers.push(manager);
    newMember()
}

function addEngenieer(data) {
    const engineer = new Engineer(
        data.EngineerName,
        data.EngineerId,
        data.EngineerEmail,
        data.EngenieerGithub);
    teamMembers.push(engineer);
    writeToFile("index.html", render(teamMembers))
    newMember();
}

function addIntern(data) {
    const intern = new Intern(
        data.InternName,
        data.InternId,
        data.InternEmail,
        data.InternGithub);
    teamMembers.push(intern);
    writeToFile("index.html", render(teamMembers))
    newMember();
}


function newMember() {
    inquirer.prompt(employeeQuestions)
        .then((data) => {

            switch (data.memberType) {
                case "Engineer":
                    inquirer.prompt(engineerQuestions).then((data) => addEngenieer(data));
                    break;
                case "Intern":
                    inquirer.prompt(internQuestions).then((data) => addIntern(data));
                    break;
                case "I don't want to add any more team members":
                    break;
                default:
                    break;
            }
        });

}

function init() {
    inquirer.prompt(managerQuestions)
        .then(function (data) {
            console.log(data);
            addManager(data)
        });

}

function writeToFile(fileName, userAnswer) {
    fs.writeFile(fileName, userAnswer, err => {
        if (err) {
            return console.log(err);
        }
        console.log('Successfully created the Team Profile Generator page!')
    });
};

init();