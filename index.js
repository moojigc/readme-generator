const fs = require('fs');
const userPrompt = require('./utils/inquirer.js');
const axios = require('axios');
const { markdown } = require('./utils/markdown.js');
const { token } = require('./utils/config.json') || process.env; 
const moment = require('moment');

async function getGitHubInfo() {
    try {
        const newInfo = await userPrompt.userInfo;
        const res = await axios({
            headers: { 'Authorization': `token ${token}`},
            url: `https://api.github.com/users/${newInfo.username}?access_token=${token}`,
            method: 'get',
        })
        console.log(res.data);
        const year = moment().format('YYYY');
        fs.writeFile('README.md', markdown(newInfo, res.data, year), function(err) {
            if (err) throw err;
            else console.log('Success!');
        });
    } catch (err) {
        console.log(err);
    }
}

getGitHubInfo();

