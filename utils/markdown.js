const markdown = function(inquirerInfo, GitHubInfo, license) {
    const { title, description, installation, usage } = inquirerInfo;
    const { name, avatar_url, email } = GitHubInfo;

    return `
# ${title}
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](https://www.contributor-covenant.org/version/2/0/code_of_conduct/) 

Developed by ${name}. 

<img src='${avatar_url}' style='width: 100px'>

Contact at ${email}.

## Description 

${description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)


## Installation

${installation}

## Usage 

${usage}


## License

${license}
`

}

module.exports = {
    markdown: markdown
}