



const inquirer = require('inquirer')

var questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?"
  }
]

var characers = ["Jean", "Diluc",]

const openingMessage = () => {
    console.log("Would you like to roll for a character?")
}

inquirer.prompt(questions).then(answers => {
  console.log(`Hi ${answers['name']}!`)
})