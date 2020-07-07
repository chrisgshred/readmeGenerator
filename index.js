var inquirer = require("inquirer");
var fs = require('fs');

// array of questions for user
const questions = [
      {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
      },
      {
        type: "input",
        name: "description",
        message: "What is your project description?"
      },
      {
        type: "input",
        name: "tableofcontents",
        message: "Please enter your table of contents."
      },
      {
        type: "input",
        name: "installation",
        message: "Enter installation instructions."
      },
      {
        type: "input",
        name: "usage",
        message: "Please enter usage details."
      },

];

function newReadme(data) {
return `
1. [#Title](#Title)
2. [#Description](#Description)
3. [#Tableofcontents](#Tableofcontents)
4. [#Installation](#Installation)
5. [#Usage](#Usage)

# ${data.title}

## Description :

### ${data.description}

## Table of Contents :

### ${data.tableofcontents}

## Installation :

### ${data.installation}

## Usage :

### ${data.usage}
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
