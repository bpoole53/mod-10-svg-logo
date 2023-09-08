const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
    type: 'input',
    message: 'Please enter your project title.',
    name: 'title',
    },

])