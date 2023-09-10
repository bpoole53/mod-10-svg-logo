const inquirer = require('inquirer');
const fs = require('fs');

function generateSVG(text, textcolor, shape, shapecolor) {
    let svgInit = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">`
}

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
]).then(answers => {
    const svgGenerate = generateSVG(answers.text, answers.textcolor, answers.shape, answers.shapecolor);
    fs.writeFile('logo.svg', svgGenerate);
    console.log('Generated logo.svg')
})