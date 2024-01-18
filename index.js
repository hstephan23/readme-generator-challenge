// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "Title:",
  },
  {
    type: "input",
    name: "description",
    message: "Description",
  },
  {
    type: "input",
    name: "installation",
    message: "Installation",
  },
  {
    type: "input",
    name: "usage",
    message: "Usage Information:",
  },
  {
    type: "input",
    name: "contribution",
    message: "Contributing:",
  },
  {
    type: "input",
    name: "test",
    message: "Test:",
  },
  {
    type: "list",
    name: "license",
    message: "License Type:",
    choices: ["MIT", "APACHE", "GPL", "None"]
  }, 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("Generating README...");
    writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    })
}

// Function call to initialize app
init();
