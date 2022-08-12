// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Readme format function
function readmeOutput (data) {
    for (let i = 0; i < 8; i++) {
        if (!data.contentTable[i]) {
            data.contentTable[i] = "";
        }
    }
    for (let j = 0; j < 8; j++) {
        if (!data.license[j]) {
            data.license[j] = "";
        }
        switch (j) {
            case (data.license[0]):
                data.license[0] = "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
            break;
            case (data.license[1]):
                data.license[1] = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            break;
            case (data.license[2]):
                data.license[2] = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
            break;
            case (data.license[3]):
                data.license[3] = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
            break;
            case (data.license[4]):
                data.license[4] = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            break;
            case (data.license[5]):
                data.license[5] = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            break;
            case (data.license[6]):
                data.license[6] = "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
            break;
            case (data.license[7]):
                data.license[7] = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
            break;
        }
    }
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

${data.license[0]}
${data.license[1]}
${data.license[2]}
${data.license[3]}
${data.license[4]}
${data.license[5]}
${data.license[6]}
${data.license[7]}

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
        type: 'checkbox',
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
    fs.writeFile('README.md', readmeOutput(response), (error) => {});
});