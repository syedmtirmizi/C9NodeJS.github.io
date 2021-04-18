// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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

  if (licenseType === 'GNU GPLv3') {
    licenseString = `![License: GNU GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  };

  return licenseString;
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

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
  ${data.license}

`;
}

module.exports = generateMarkdown;
