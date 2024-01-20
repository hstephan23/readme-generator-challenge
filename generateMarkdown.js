// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `https://img.shields.io/badge/MIT-blue?logo=unlicense`;
  } else if (license === "APACHE") {
    return "https://img.shields.io/badge/Apache-blue?logo=apache";
  } else if (license === "GPL") {
    return "https://img.shields.io/badge/GPL-blue?logo=unlicense";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/license/mit/";
  } else if (license === "APACHE") {
    return "https://www.apache.org/licenses/LICENSE-2.0";
  } else if (license === "GPL") {
    return "https://www.gnu.org/licenses/gpl-3.0.en.html";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return "This is an MIT license";
  } else if (license === "APACHE") {
    return "This is an Apache license";
  } else if (license === "GPL") {
    return "This is an GPL license";
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## License 
  ${data.license} 
  ![badge](${renderLicenseBadge(data.license)})

  ${renderLicenseSection(data.license)}

  ### Description

  ${data.description}

  ### Table of Contents
  * [Installation](##-Installation)
  * [Usage](##-Usage)
  * [Contributing](##-Contributing)
  * [Test](##-Test)
  * [Questions](##-Questions)

  ## Installation
  To install run the following commands:
  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage
  ${data.usage}

  ${data.license}

  ${renderLicenseLink(data.license)}

  ## Contributing
  ${data.contribution}

  ## Test

  \`\`\`
  ${data.test}
  \`\`\`

  ## Questions

  * ${data.email}
  * https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
