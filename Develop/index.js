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
        choices: ['MIT', 'Apache', 'GNU', 'ISC', 'none']
    },
    {
        type: 'input',
        name: 'usage',
        default: `Provide instructions and examples for use. Include screenshots as needed.`,
        message: "What does the user need to know about using the repo?"
    },
    {
        type: 'input',
        name: 'contribution',
        default: `If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.`,
        message: "What does the user need to know about contributing to the repo?"
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
        await writeFileAsync('../README.md', markdown);
        console.log('Success; checkout the readme file');
    } catch (error) {
        console.log(error)
    }
}

init();
