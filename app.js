const Employee = require('./lib/Employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const inquirer = require('inquirer');

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What title do they have, manager, engineer, or intern?'
    }
    
]).then(answers => {
    const role = answers.title.toLowerCase()
    if (role === 'manager') {
        new Manager();
    } else if (role === 'engineer') {
        new Engineer();
    } else if (role === 'intern') {
        new Intern();
    } else {
        return console.log('error')
    }
})