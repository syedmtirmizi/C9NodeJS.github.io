// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const fs = require('fs')

function renderLicenseBadge(data) {
  const licenseType = data.license;

  let licenseString = ' '

  if (licenseType === 'MIT') {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };

  if (licenseType === 'Apache 2.0') {
    licenseString = `![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  };

  if (licenseType === 'ISC') {
    licenseString = `![License: ISC](https://img.shields.io/badge/License-ISC-green.svg)`
  };

  if (licenseType === 'GNU GPLv2') {
    licenseString = `![License: GNU GPLv2](https://img.shields.io/badge/License-GPLv2-blue.svg)`
  };

  if (licenseType === 'GNU GPLv3') {
    licenseString = `![License: GNU GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  };
  if (licenseType === 'No License') {
    licenseString = ''
  };

  return licenseString;
};


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  const licenseType = data.license;

  var licenseString = ' '

  if (licenseType === 'MIT') {
    licenseString = `[MIT License](MIT.txt)`
    // fs.readFile('MIT.txt', (err, data) => {
    //   if (err) throw err;

    //   console.log(data.toString());
    // });
  };

  if (licenseType === 'Apache 2.0') {
    licenseString = `[Apache 2.0 License](Apache2.0.txt)`
  //   fs.readFile('Apache2.0.txt', (err, data) => {
  //     if (err) throw err;
    
  //     console.log(data.toString());
  // });
  };

  if (licenseType === 'ISC') {
    licenseString = `[ISC License](ISC.txt)`
  //   fs.readFile('ISC.txt', (err, data) => {
  //     if (err) throw err;
    
  //     console.log(data.toString());
  // });
  };

  if (licenseType === 'GNU GPLv2') {
    licenseString = `[GNU CPLv2 License](GNU2.txt)`
  //   fs.readFile('GNU2.txt', (err, data) => {
  //     if (err) throw err;
    
  //     console.log(data.toString());
  // });
  };

  if (licenseType === 'GNU GPLv3') {
    licenseString = `[GNU GPLv3 License](GNU3.txt)`
  //   fs.readFile('GNU3.txt', (err, data) => {
  //     if (err) throw err;
    
  //     console.log(data.toString());
  // });
  };

  if (licenseType === 'No License') {
    licenseString = 'No License.'
  };

  return licenseString;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#Usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions) 
  * [License](#license)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.testing}

  ## Questions
  GitHub Profile: https://github.com/${data.github}

  E-mail: ${data.email}

  ## License
  ${renderLicenseSection(data)}

`;
}

module.exports = generateMarkdown;
