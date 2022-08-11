const inquirer = require('inquirer');
const fs = require('fs');

function readmeOutput (data) {
    return '
    $(data.title)
    
    $(data.description)
    
    $(data.contentTable)
    
    $(data.installation)
    
    $(data.usage)
    
    $(data.license)

    $(data.contributing)
    
    $(data.tests)
    
    $(data.questions)'
}