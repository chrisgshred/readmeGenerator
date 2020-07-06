var inquirer = require("inquirer");
var fs = require('fs');

// array of questions for user
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is your name?"
      },
      {
        type: "input",
        name: "emailAddress",
        message: "What is your email address?"
      },

];

function newReadme(data) {
return `
1. [#Name](#Name)
2. [#Email](#Email)

# Name :

### My name is: ${data.name}

# Email :

###  My email is: ${data.emailAddress}
`


};

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName,data, function(err){
        if (err) throw err
        console.log("Done");
        
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(answers){
       
       writeToFile("newreadme.md",newReadme(answers) )
    });

}

// function call to initialize program
init();
