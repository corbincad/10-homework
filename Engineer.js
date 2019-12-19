const inquirer = require("inquirer");

class Engineer {

    constructor (roll, github,) {

        this.github = github
    
    }

    getRoll() {

       this.roll = "Engineer"
       this.getGethub()
       
    }

    getGethub() {

        inquirer.prompt([

            {
                name: "username",
                message: "What is your github?"
            }

        ]).then (answers => { 
            
            this.name = answers.name
            

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
            console.log(this)
        })
    }
 
}

const e = new Employee();

e.getName()