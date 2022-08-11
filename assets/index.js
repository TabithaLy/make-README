// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Readme format function
function readmeOutput (data) {
    return `
# ${data.title}
    
## Description
    
${data.description}
    
## Table of Contents
    
${data.contentTable}
    
## Installation

${data.installation}
    
## Usage
    
${data.usage}
    
## License 

${data.license}

## Contributing

${data.contributing}
    
## Tests

${data.tests}
    
## Questions?

${data.email}
[GitHub URL](${data.github})`
}

// inquire prompt user input questions
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
        name: 'email',
        message: 'Email:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'GitHub URL:',
    },
])

// write readme file
.then((response) => {
    fs.writeFile('README.md', readmeOutput(response), (error) => {});
});