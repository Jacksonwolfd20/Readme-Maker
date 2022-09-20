//const inquirer = require('inquirer');

const {writeFile} = require('fs').promises;


const inquirer = require('inquirer');
const fs = require('fs');

const generateReadme = ({
        title,
        Description,
        Installation,
        Tests,
        Questions,
        Contributing,
        License
    }) =>
    `#  ${title}

  ## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Tests](#Tests)
  * [Questions](#Questions)
  * [License](#License)
  * [Contributing](#Contributing)
  
  
  ## Description
  
  ${Description}
  
  ## Installation
  
  ${Installation}
  
  ## Tests
  
  ${Tests}
  
  ## Questions
  
  Find me on GitHub: [${Questions}](https://github.com/${Questions})
  
  ## Contributing
  
  ${Contributing}
  
  ---
  ## License
  ![badge](https://img.shields.io/badge/license-${License}-brightgreen)
<br />
This application is covered by the ${License} license. 
  `;

inquirer
    .prompt([{
            type: 'input',
            name: 'title',
            message: 'What is the title of the project?',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Enter your description',
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'Enter your test instructions',
        },
        {
            type: 'input',
            name: 'Questions',
            message: 'Enter your GitHub Username',
        },
        {
            type: 'input',
            name: 'Contributing',
            message: 'Enter your Contributing members',
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'How to install the program',
        },
        {
            type: "list",
            name: "License",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        
    ])
    .then((answers) => {
        const ReadMeContent = generateReadme(answers);

        fs.writeFile('README.md', ReadMeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });