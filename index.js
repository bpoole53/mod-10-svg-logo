const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
    type: 'input',
    message: 'Please enter 3 letters to put in the logo.',
    name: 'text',
    },
    {
    type: 'input',
    message: 'Please enter the text color',
    name: 'textColor',
    },  
    {
    type: 'list',
    message: 'Please choose a shape',
    name: 'shape',
    choices: ['circle', 'triangle', 'square'],
    },
    {
    type: 'input',
    message: 'Please enter the shape color',
    name: 'shapeColor',
    },
])
    