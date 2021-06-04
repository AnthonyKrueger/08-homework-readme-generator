// TODO: Include packages needed for this application

const inquirer = require('inquirer')
const chalk = require('chalk')
const generate = require('./utils/generateMarkdown.js')
const fs = require('fs');
const blue = chalk.blue;
const yellow = chalk.yellow;
const green = chalk.green;

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: green("What is the title of your project?"),
        name: "title",
    },
    {
        type: "input",
        message: green("Enter a project description"),
        name: "description",
    },
    {
        type: "input",
        message: green("Describe installation instructions"),
        name: "install",
    },
    {
        type: "input",
        message: green("Enter usage information for your app"),
        name: "usage",
    },
    {
        type: "input",
        message: green("Enter guidelines for contributing to your code"),
        name: "contribution",
    },
    {
        type: "input",
        message: green("Enter instructions for testing your app"),
        name: "testing",
    },
    {
        type: "checkbox",
        message: blue("What licenses protect your project?"),
        choices: ["MIT", "GPLv3", "GPLv2", "ISC", "Apache", "BSD 3-Clause", "BSD 2-Clause"],
        name: "licenses",
    },
    {
        type: "input",
        message: blue("What is your github username?"),
        name: "username",
    },
    {
        type: "input",
        message: blue("What is your email address?"),
        name: "email",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log(yellow('Generating README...')));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        let readmeTitle = `${response.title}_README.md`
        let markdown = generate.generateMarkdown(response)
        writeToFile(readmeTitle, markdown);
    })
}

// Function call to initialize app
init();
