const axios = require('axios');

async function generateMarkdown(data) {
  try {
    var userEmail;
    const gitHubGet = await axios.get(`https://api.github.com/users/${data.username}`)
    if (gitHubGet.email === null || gitHubGet.email === undefined) {
      userEmail = '';
    } else {
      userEmail = `My Email: ${gitHubGet.email}`;
    };
 
    return `# ${data.title}

![GitHub Last Commit](https://img.shields.io/github/last-commit/${data.username}/${data.repo})
![GitHub License](https://img.shields.io/github/license/${data.username}/${data.repo})

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

Provide instructions and examples for use. Include screenshots as needed. 


## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.



## License

${data.license}


## Contributing

If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own.

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
