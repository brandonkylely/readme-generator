
// function renderLicenseBadge(license) {}


// function renderLicenseLink(license) {}


// function renderLicenseSection(license) {}

function generateMarkdown(data) {
  return `# ${data.title}

  ${data.license}

  ## Table of Contents

  [Description](#description)

  [Installation](#installation)

  [Usage](#usage)

  [Contribution](#contribution)

  [Testing](#testing)

  [Questions](#questions)

  ## Description

  ${data.description}

  ## Installation

  ${data.installationInstructions}

  ## Usage

  ${data.usageInformation}

  ## Contribution

  ${data.contributionGuidelines}

  ## Testing

  ${data.testInstructions}

  ## Questions

  Contact Me:

  Github: https://github.com/${data.github}
  
  Email: ${data.email} 

  `;
}

module.exports = generateMarkdown;
