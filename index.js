const inquirer = require('inquirer');
const fs = require('fs');
const {Shape, Triangle, Circle, Square} = require ('./lib/shape')

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
    choices: ['Circle', 'Triangle', 'Square'],
    },
    {
    type: 'input',
    message: 'Please enter the shape color',
    name: 'shapeColor',
    },
])
.then(answers => {
    console.log(answers.shape)
    let shape;
    if(answers.shape === 'Triangle'){
        shape = new Triangle(answers.shapeColor);
    }else if(answers.shape === 'Circle'){      
        shape = new Circle(answers.shapeColor);
    }else{
        shape = new Square(answers.shapeColor);
    };
    console.log(shape)
    const svgGenerate = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"> ${shape.render()} <text x="50" y="80" font-size="30" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text></svg>`

    fs.writeFileSync('logo.svg', svgGenerate, (err) =>
    err ? console.error(err) : console.log('Success!'));
})
.catch(error => {
    console.error(error);
})