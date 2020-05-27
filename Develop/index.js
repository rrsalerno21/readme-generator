const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');
const fs = require('fs');

const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
    {
        type: 'input',
        name: 'username',
        default: 'rrsalerno21',
        message: "What's your GitHub username?"
    },
    {
        type: 'input',
        name: 'repo',
        default: 'readme-generator',
        message: "What's your project's repo name (include hyphens)?"
    },
    {
        type: 'input',
        name: 'title',
        default: 'README Generator',
        message: "What's your project's title?"
    },
    {
        type: 'input',
        name: 'description',
        default: "Command-line app that dynamically generates a README.md from a user's input.  The app is invoked with the following command: node index.js",
        message: "What's your project's description?"
    },
    {
        type: 'list',
        name: 'license',
        message: "Which license would you like to use?",
        choices: ['MIT', 'Apache', 'GNU', 'ISC']
    }
];

async function promptUser() {
    try {
        const answers = await inquirer
        .prompt(questions);

        console.log('Success');
        return answers
    }
    catch(err) {
        console.log(err);
    }
}

function writeToFile(fileName, data) {

}

async function init() {
    try {
        const answers = await promptUser();
        console.log(answers)
        const markdown = await generateMarkdown(answers);
        await writeFileAsync('README.md', markdown);
        console.log('Success; checkout the readme file');
    } catch (error) {
        console.log(error)
    }
}

init();
