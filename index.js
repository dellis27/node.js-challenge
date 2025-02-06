// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for your project?',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What are the contribution guidelines for your project?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What are the testing instructions for your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license are you using?',
        choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'BSD 3-Clause License']
    }
]

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
   fs.writeFile(fileName, data , (err) =>
                err ? console.error(err) : console.log('Success!'))
};
 
// TODO: Create a function to initialize app
function init() {
     inquirer
        .prompt(questions)

        .then ((responses)=> {
            writeToFile('./dist/README.md', generateMarkdown(responses));
           
        })
}

// Function call to initialize app
init();
