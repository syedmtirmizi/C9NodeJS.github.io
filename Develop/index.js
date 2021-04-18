// TODO: Create a function to initialize app
function init() {

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./utils/generateMarkdown');
const path = require('path');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage scenario for your project?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are your contribution guidelines?'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What are your testing instructions?'
    },
    {
        type:'list',
        name: 'license',
        message: 'What type of license does your applicaiton use?',
        choices: ['Community', 'MIT', 'GNU GPLv3']
    },
    {
        type:'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail address?'
    }
];

inquirer
    .prompt(questions)


// TODO: Create a function to write README file
.then(function (data) {
    const fileName =
        data.title
            .toLowerCase()
            .split(' ')
            .join('') + '.md';

    console.log(data);

    fs.writeFileSync(path.join (process.cwd(), fileName), generate(data));

    // fs.writeFile(fileName, JSON.stringify(data, null, '\t'), function(err) {
    //     if (err) {
    //         return console.log(err);
    //     }

    //     console.log('Success!');
    // })
}) 

};

// Function call to initialize app
init();
