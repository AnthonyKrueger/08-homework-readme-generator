// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadges(licenses) {
  let licenseBadges = [];

  for(i = 0; i < licenses.length; i++){
    switch(licenses[i]) {
        case "MIT":
            licenseBadges.push("[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)");
            break;
        case "GPLv3":
            licenseBadges.push("[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)");
            break;
        case "GPLv2":
            licenseBadges.push("[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)");
            break;
        case "ISC":
            licenseBadges.push("[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)");
            break;
        case "Apache":
            licenseBadges.push("[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)");
            break;
        case "BSD 3-Clause":
            licenseBadges.push("[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)");
            break;
        case "BSD 2-Clause":
            licenseBadges.push("[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)");
    }
  }
  return licenseBadges;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenses) {
  let licensesString = "This project is protected under the following license(s):\n"
  for(i = 0; i < licenses.length; i++){
    switch(licenses[i]) {
        case "MIT":
            licensesString = licensesString.concat("- [MIT](https://opensource.org/licenses/MIT)\n");
            break;
        case "GPLv3":
            licensesString = licensesString.concat("- [GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)\n");
            break;
        case "GPLv2":
            licensesString = licensesString.concat("- [GNU GPL v2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)\n");
            break;
        case "ISC":
            licensesString = licensesString.concat("- [ISC](https://opensource.org/licenses/ISC)\n");
            break;
        case "Apache":
            licensesString = licensesString.concat("- [Apache 2.0](https://opensource.org/licenses/Apache-2.0)\n");
            break;
        case "BSD 3-Clause":
            licensesString = licensesString.concat("- [BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)\n");
            break;
        case "BSD 2-Clause":
            licensesString = licensesString.concat("- [BSD 2-Clause](https://opensource.org/licenses/BSD-2-Clause)\n");
    }
}
return licensesString;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseString) {
  if(licenseString != "This project is protected under the following license(s):\n"){
    let licenseSection = `## Licenses\n\n${licenseString}`;
    return licenseSection
  }
  else {
    return ""
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { title, description, install, usage, contribution, testing, username, email, licenses } = data
  const licenseBadges = renderLicenseBadges(licenses)
  const licenseLinks = renderLicenseLink(licenses)
  const licenseSection = renderLicenseSection(licenseLinks)



  return `# ${title}

  ${licenseBadges}
  
  ## Description
  
  ${description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Testing](#testing)
  - [Questions](#questions)
  - [Licenses](#licenses)
  
  ## Installation
  
  ${install}
  
  ## Usage
  
  ${usage}
  
  ## Contributing
  
  ${contribution}
  
  ## Testing
  
  ${testing}
  
  ## Questions
  
  Contact me at my [Github Profile](https://github.com/${username})
  or my email address: ${email}
  
  ${licenseSection}`;
}

module.exports = {
  generateMarkdown
};
