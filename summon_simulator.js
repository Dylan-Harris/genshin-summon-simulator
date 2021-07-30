



const inquirer = require('inquirer')


var questions = [
  {
    type: 'input',
    name: 'name',
    message: "What's your name?"
  }
]

var characers = ["Jean", "Diluc", "Keqing", "Qiqi", "Venti", "Klee", "Tartaglia", "Zhongli", "Albedo", "Ganyu", "Xiao", "Hu Tao", "Eula", "Kazuha", "Ayaka"]

const openingMessage = () => {
    console.log("Would you like to roll for a character?")
}
var randChar = characers[Math.floor(Math.random() * characers.length)];
inquirer.prompt(questions).then(answers => {
  console.log(`Congrats ${answers['name']}! You rolled ${randChar}!`)
})

