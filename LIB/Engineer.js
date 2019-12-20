const inquirer = require("inquirer");
const Employee = require('./employee');

class Engineer extends Employee {

    constructor (name, id, email, github,) {

        super(name, id, email)
        this.github = github
    
    }

    getRole() {

       this.role = "Engineer"
       this.getGethub()
       
    }

    getGethub() {

        inquirer.prompt([

            {
                name: "userName",
                message: "What is your github?"
            }

        ]).then (answers => { 
            
            this.name = answers.userName
            console.log(this)

        })
    }
 
}

module.exports = Engineer