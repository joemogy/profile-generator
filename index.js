//  Classes to Import
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//  packages to Import
const inquirer = require('inquirer');
const fs = require('fs');
const { data } = require('browserslist');
const concatenateHTMLArray = require('./dist/concatenateHTMLArray');
const renderHTMLHead = require('./dist/renderHTMLHead');
const renderHTMLTail = require('./dist/renderHTMLTail');

// const initialPrompt = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             message: "What is your team\'s name?",
//             name: 'name',
//         },
//     ]).then((data) => {
//         fs.writeFileSync(`team.html`,concatenateHTMLArray(data));
//         managerPromt();
//     })
// };
// add manager
const managerPromt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the team manager\'s name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the team manager's ID",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the team manager's email?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is the team manager's office number?",
            name: 'officeNumber',
        },
    ]).then((data) => {
        fs.writeFileSync(`team.html`,renderHTMLHead());
        fs.appendFileSync(`team.html`,concatenateHTMLArray(data));
        teamMemberPromt();
    })
};
// add team member
const teamMemberPromt = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: "Which type of team member would you like to add?",
            name: 'teamMember',
            choices: ['Engineer', 'Intern', 'I don\'t want to add anymore team members']
        },
    ]).then((data) => {
        if(data.teamMember === 'Engineer') {
            engineerPrompt();
        } else if (data.teamMember === 'Intern') {
            internPrompt();
        } else {
            fs.appendFileSync(`team.html`,renderHTMLTail());
            console.log('team.html file successfully generated!')
        }
    })
};
// add engineer
const engineerPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the engineer\'s name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the engineer's ID",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the engineer's email?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What is the engineer's github username?",
            name: 'github',
        },
    ]).then((data) => {
        fs.appendFileSync(`team.html`,concatenateHTMLArray(data));
        teamMemberPromt();
    })
};
// add intern
const internPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the intern\'s name?",
            name: 'name',
        },
        {
            type: 'input',
            message: "What is the intern's ID",
            name: 'id',
        },
        {
            type: 'input',
            message: "What is the intern's email?",
            name: 'email',
        },
        {
            type: 'input',
            message: "What school did the intern attend?",
            name: 'school',
        },
    ]).then((data) => {
        fs.appendFileSync(`team.html`,concatenateHTMLArray(data));
        teamMemberPromt();
    })
};

const init = () => {
    managerPromt();
};

init();
