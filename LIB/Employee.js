const inquirer = require("inquirer");

class Employee {

    constructor (name, id, email) {

        this.name = name
        this.ID = id
        this.email = email
    }

    getName() {

        inquirer.prompt([

            {
                name: "name",
                message: "What is their name?"

            }
        ]).then (answers => { 

            this.name = answers.name.toLowerCase()
            this.getId()

         })
    }

    getId() {

        inquirer.prompt([

            {
                name: "ID",
                message: "ID #?"
            }

        ]).then (answers => { 
            
            this.ID = answers.ID
            this.getEmail()

        })
    }

    getEmail() {

        inquirer.prompt([

            {
                name: "email",
                message: "Please provide an email?"
            }

        ]).then (answers => { 

            this.email = answers.email
            this.getRole(); 
    
        })
    }
    getRole() {

        this.role = 'Employee'

    }
}



module.exports = Employee


