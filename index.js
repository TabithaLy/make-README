const inquirer = require('inquirer');
const fs = require('fs');

function readmeOutput (data) {
    return `
    $(data.title)
    
    $(data.description)
    
    $(data.contentTable)
    
    $(data.installation)
    
    $(data.usage)
    
    $(data.license)

    $(data.contributing)
    
    $(data.tests)
    
    $(data.questions)`
}

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project.',
    },
    {
        type: 'input',
        name: 'contentTable',
        message: 'Table of Contents',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please list installation instructions.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please list usage instructions.',
    },
    {
        type: 'checkboxinput',
        name: 'license',
        message: 'Please select a license.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How could other developers contribute to your project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How may users test your application?',
    },
    {
        type: 'input',
        name: 'question',
        message: 'Contact Information:',
    },
])