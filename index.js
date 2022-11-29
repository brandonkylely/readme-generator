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
        message: "What is the usage information?",
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
        message: "What is the license?",
        name: "license",
        choices: ["MIT", "Apache", "GPLv3", "GPLv2", "BSD 3-clause", "BSD 2-clause", "LGPLv3", "AGPLv3", "Unlicensed"]
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
