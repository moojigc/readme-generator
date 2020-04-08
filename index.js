const fs = require('fs');
const axios = require('axios');
const userPrompt = require('./utils/inquirer.js');
const { markdown } = require('./utils/markdown.js');
const { license } = require('./utils/license.js');
const { token } = require('./utils/config.json') || process.env; 

async function getGitHubInfo() {
    try {
        const newInfo = await userPrompt.response;
        const github = await axios({
            headers: { 'Authorization': `token ${token}`},
            url: `https://api.github.com/users/moojigc`,
            method: 'get',
        });
        console.log(newInfo);
        console.log(github.data);

        const userLicense = license(newInfo.license, github.data.name);

        fs.writeFile('README.md', markdown(newInfo, github.data, userLicense), function(err) {
            if (err) throw err;
            else console.log('Success!');
        });
    } catch (err) {
        console.log(err);
    }
}

getGitHubInfo();

