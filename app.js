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
        const newManager = new Manager();
        newManager.getName();
    } else if (role === 'engineer') {
        const newEngineer = new Engineer();
        newEngineer.getName();
    } else if (role === 'intern') {
        const newIntern = new Intern();
        newIntern.getName();
    } else {
        return console.log('error')
    }
    
})



