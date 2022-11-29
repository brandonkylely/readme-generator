// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What do you want your README file to be named?",
        name: "fileName",
    },
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is the description?",
        name: "description",
    },
    {
        type: "input",
        message: "What are the installation instructions?",
        name: "installationInstructions",
    },
    {
        type: "input",
        message: "How do you use your project?",
        name: "usageInformation",
    },
    {
        type: "input",
        message: "What are the contribution guidelines?",
        name: "contributionGuidelines",
    },
    {
        type: "input",
        message: "What are the test instructions?",
        name: "testInstructions",
    },
    {
        type: "list",
        message: "What kind of license would you like to use?",
        name: "license",
        choices: [
            {value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", name: "MIT"}, 
            {value: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", name: "Apache"},
            {value: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)", name: "MPL"},
            {value: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)", name: "ISC"}, 
            {value: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)", name: "Unlicensed"},
        ]
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "github",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(response => {
            const md = generateMarkdown(response)
            // console.log(md)
            // writeToFile('REAME.md', md)
            writeToFile(`${response.fileName}.md`, md)
        })

}

// Function call to initialize app
init();
