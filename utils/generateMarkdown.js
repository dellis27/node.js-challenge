// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license){
    if (license == 'Apache 2.0 License'){
        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    } else if (license == 'Boost Software License 1.0'){
        return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
    } else if (license == 'BSD 3-Clause License'){
        return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    } else{
        return '';
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license){
    if (license == 'Apache 2.0 License'){
        return '[Link](https://opensource.org/license/apache-2-0)'
    } else if (license == 'Boost Software License 1.0'){
        return '[Link](https://www.boost.org/LICENSE_1_0.txt)'
    } else if (license == 'BSD 3-Clause License'){
        return '[Link](https://opensource.org/license/BSD-3-Clause)'
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){
    return `This project uses the ${license} license`;
  } else{
    return '';
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
  return `# ${responses.title}

  ## Description
  ${responses.description}

  ## Installation Guide
  ${responses.installation}

  ## Usage Information
  ${responses.usage}

  ## Contribution Guidelines
  ${responses.contributions}

  ## Testing
  ${responses.testing}

  ## License
  ${renderLicenseBadge(responses.license)}
  ${renderLicenseLink(responses.license)}
  ${renderLicenseSection(responses.license)}



`;
}

export default generateMarkdown;
