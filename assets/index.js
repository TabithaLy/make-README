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
    
[${data.contentTable[0]}](#${data.contentTable[0]})\n
[${data.contentTable[1]}](#${data.contentTable[1]})\n
[${data.contentTable[2]}](#${data.contentTable[2]})\n
[${data.contentTable[3]}](#${data.contentTable[3]})\n
[${data.contentTable[4]}](#${data.contentTable[4]})\n
[${data.contentTable[5]}](#${data.contentTable[5]})\n
[${data.contentTable[6]}](#${data.contentTable[6]})\n
[${data.contentTable[7]}](#${data.contentTable[7]})\n

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
[${data.github}](${data.github})`
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
        type: 'checkbox',
        name: 'contentTable',
        message: 'Table of Contents',
        choices: ['title', 'description',
        'installation', 'usage',
        'license', 'contributing', 'tests',
        'question'],
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
        type: 'checkbox',
        name: 'license',
        message: 'Please select a license.',
        // lines 76-79 taken from lines 113-116 from https://github.com/JohnBanas/professional-README-generator/blob/main/index.js
        // credit - JohnBana
        choices: ['GNU AGPLv3', 'GNU GPLv3',
        'GNU LGPLv3', 'Mozilla Public License 2.0',
        'Apache License 2.0', 'MIT License', 'Boost Software License 1.0',
        'The Unlicense'],
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