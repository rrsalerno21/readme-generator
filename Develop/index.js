const inquirer = require('inquirer');

const questions = [
    {
        type: 'input',
        name: 'username',
        message: "What's your GitHub username?"
    },
    {
        type: 'input',
        name: 'repo',
        message: "What's your project's repo name (include hyphens)?"
    },
    {
        type: 'input',
        name: 'title',
        message: "What's your project's title?"
    },
    {
        type: 'input',
        name: 'description',
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

function init() {
    
}

init();
