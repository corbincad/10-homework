const inquirer = require("inquirer");
const Employee = require('./employee');

class Manager extends Employee {

    constructor (name, id, email, officeNumber) {

        super(name, id, email)
        this.officeNumber = officeNumber
    
    }

    getRole() {

       this.role = "Manager"
       this.getOfficeNumber()

    }

    getOfficeNumber() {

        inquirer.prompt([

            {
                name: "officeNumber",
                message: "What is the office number?"
            }

        ]).then (answers => { 
            
            this.officeNumber = answers.officeNumber
    
        })
    }

}

module.exports = Manager
