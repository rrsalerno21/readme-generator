const axios = require('axios');

async function generateMarkdown(data) {
  try {
    var userEmail;
    var licenseOption;

    const gitHubGet = await axios.get(`https://api.github.com/users/${data.username}`)
    if (gitHubGet.email === null || gitHubGet.email === undefined) {
      userEmail = '';
    } else {
      userEmail = `My Email: ${gitHubGet.email}`;
    };

    if (data.license === 'none') {
      licenseOption = ''
    } else {
      licenseOption = `![GitHub License](https://img.shields.io/github/license/${data.username}/${data.repo})`
    }
 
    return `# ${data.title}

![GitHub Last Commit](https://img.shields.io/github/last-commit/${data.username}/${data.repo})
${licenseOption}

## Description 

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## Installation

What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.


## Usage 

${data.usage}

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.



## License

${data.license}


## Contributing

${data.contribution}

## Tests

Go the extra mile and write tests for your application. Then provide examples on how to run them.

##  Questions

Feel free to contact me!

[![My Profile Photo](https://github.com/rrsalerno21.png)](https://github.com/rrsalerno21)
${userEmail}

`;
  } catch (error) {
    console.log(error)
  }
}

module.exports = generateMarkdown;
