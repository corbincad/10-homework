const inquirer = require("inquirer");

class Manager {

    constructor (officeNumber) {

        this.officeNumber = officeNumber
    
    }

    getRoll() {

       this.roll = "Manager"
       this.getGethub()

    }

    getofficeNumber() {

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
