const Employee = require('./employee');
const inquirer = require("inquirer");

class Intern extends Employee {

    constructor (name, id, email, school) {

        super(name, id, email)
        this.school = school
    
    }
    getRole(){

        this.role = 'Intern'
        this.getSchool();
    
    }
    getSchool() {

       inquirer.prompt([

        {
            name: "name",
            message: "What school do you attend?"
        }

       ]).then (answers => { 
            
            this.name = answers.name

        })

    }

}

module.exports = Intern
