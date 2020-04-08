const inquirer = require('inquirer');

async function inquirerPrompt() {
    const res = await inquirer.prompt([
        {
            message: "What is your username?",
            name: "username"
        },
        {
            message: "What is your project titled?",
            name: "title"
        },
        {
            message: "Describe your project.",
            name: "description"
        },
        {
            message: "How do you install it?",
            name: "installation"
        },
        {
            message: "How do you use it?",
            name: "usage"
        },
        {
            type: "list",
            message: "What type of license do you want to apply?",
            name: "license",
            choices: [
                "MIT: Allow others to distribute open and closed source versions.",
                "GNU GPLv3: Only allow others to distribute open source versions.",
                "ISC: Functionally equivalent to MIT license."
            ]
        }
    ])
    return res;
}

module.exports = {
    response: inquirerPrompt()
}