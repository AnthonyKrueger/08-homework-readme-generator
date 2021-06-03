// TODO: Include packages needed for this application

const inquirer = require('inquirer')
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "Enter a project description",
        name: "description",
    },
    {
        type: "input",
        message: "Describe installation instructions",
        name: "install",
    },
    {
        type: "input",
        message: "Enter usage information for your app",
        name: "usage",
    },
    {
        type: "input",
        message: "Enter guidelines for contributing to your code",
        name: "contribution",
    },
    {
        type: "input",
        message: "Enter instructions for testing your app",
        name: "testing",
    },
    {
        type: "checkbox",
        message: "What licenses protect your project?",
        choices: ["MIT", "GPLv3", "GPLv2", "ISC", "Apache", "BSD 3-Clause", "BSD 2-Clause"],
        name: "licenses",
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const { title, description, install, usage, contribution, testing, username, email, licenses } = data
    let licenseBadges = [];
    let licensesString = "This project is protected under the following licenses:\n"
    for(i = 0; i < licenses.length; i++){
        switch(licenses[i]) {
            case "MIT":
                licenseBadges.push("[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)");
                licensesString = licensesString.concat("- MIT\n");
                break;
            case "GPLv3":
                licenseBadges.push("[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)");
                licensesString = licensesString.concat("- GNU GPL v3\n");
                break;
            case "GPLv2":
                licenseBadges.push("[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)");
                licensesString = licensesString.concat("- GNU GPL v2\n");
                break;
            case "ISC":
                licenseBadges.push("[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)");
                licensesString = licensesString.concat("- ISC\n");
                break;
            case "Apache":
                licenseBadges.push("[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)");
                licensesString = licensesString.concat("- Apache 2.0\n");
                break;
            case "BSD 3-Clause":
                licenseBadges.push("[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)");
                licensesString = licensesString.concat("- BSD 3-Clause\n");
                break;
            case "BSD 2-Clause":
                licenseBadges.push("[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)");
                licensesString = licensesString.concat("- BSD 2-Clause\n");
        }
    }
    fs.writeFile(fileName, 
`# ${title}

${licenseBadges}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [License](#license)
- [Questions](#questions)

## Installation

${install}

## Usage

${usage}

## Contributing

${contribution}

## Testing

${testing}

## Licenses

${licensesString}

## Questions

Contact me at my [Github Profile](https://github.com/${username})
or my email address: ${email}`, 
        (err) => err ? console.error(err) : console.log(''));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        let readmeTitle = `${response.title}_README.md`
        writeToFile(readmeTitle, response);
    })
}

// Function call to initialize app
init();
