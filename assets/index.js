// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Readme format function
function readmeOutput (data) {
    console.log(data.license);
    // control for if not selected
    for (let i = 0; i < 8; i++) {
        if (!data.contentTable[i]) {
            data.contentTable[i] = "";
        }
    }
    // license badges and links
    switch (data.license) {
        case "GNU AGPLv3":
            data.license = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
        break;
        case "GNU GPLv3":
            data.license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        break;
        case "GNU LGPLv3":
            data.license = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
        break;
        case "Mozilla Public License 2.0":
            data.license = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        break;
        case "Apache License 2.0":
            data.license = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
        case "MIT License":
            data.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
        case "Boost Software License 1.0":
            data.license = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
        break;
        case "The Unlicense":
            data.license = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
        break;
    }
    return `
# ${data.title}
    
## Description
    
${data.description}
    
## Table of Contents

[${data.contentTable[0].substring(0, 1).toUpperCase() + data.contentTable[0].substring(1)}](#${data.contentTable[0]})\n
[${data.contentTable[1].substring(0, 1).toUpperCase() + data.contentTable[1].substring(1)}](#${data.contentTable[1]})\n
[${data.contentTable[2].substring(0, 1).toUpperCase() + data.contentTable[2].substring(1)}](#${data.contentTable[2]})\n
[${data.contentTable[3].substring(0, 1).toUpperCase() + data.contentTable[3].substring(1)}](#${data.contentTable[3]})\n
[${data.contentTable[4].substring(0, 1).toUpperCase() + data.contentTable[4].substring(1)}](#${data.contentTable[4]})\n
[${data.contentTable[5].substring(0, 1).toUpperCase() + data.contentTable[5].substring(1)}](#${data.contentTable[5]})\n
[${data.contentTable[6].substring(0, 1).toUpperCase() + data.contentTable[6].substring(1)}](#${data.contentTable[6]})\n
[${data.contentTable[7].substring(0, 1).toUpperCase() + data.contentTable[7].substring(1)}](#${data.contentTable[7]})\n

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

${data.email} \n
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
        choices: ['description',
        'installation', 'usage',
        'license', 'contributing', 'tests',
        'email', 'github'],
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
        type: 'list',
        name: 'license',
        message: 'Please select a license.',
        // lines 76-79 taken from lines 113-116 from:
        // https://github.com/JohnBanas/professional-README-generator/blob/main/index.js
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
    fs.writeFile('README.md', readmeOutput(response), (error) => {
        error ? console.error(error) : console.log('Yay! Check your folder for your dynamically generated README.md file');
    });
});