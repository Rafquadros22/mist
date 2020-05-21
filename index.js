const inquirer = require("inquirer");
const fs = require("fs");
const generateMark = require("./gm");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What would you like the title to be?",
    },
    {
      type: "input",
      name: "description",
      message:
        "What was your motivation? Why did you build this project?  What problem does it solve? What did you learn? What makes your project stand out?",
    },
    {
      type: "checkbox",
      message: "What would you like in your table of contents?",
      name: "tableOfContents",
      choices: ["Installation", "Usage", "Credits", "License"],
    },
    {
      type: "input",
      name: "installation",
      message:
        "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.?",
    },
    {
      type: "input",
      name: "credits",
      message:
        "List your collaborators, if any, with links to their GitHub profiles If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.If you followed tutorials, include links to those here as well.",
    },

    {
      type: "input",
      name: "usage",
      message:
        "Provide instructions and examples for use. Include screenshots as needed.",
    },
    {
      type: "input",
      name: "license",
      message:
        "The last section of a good README is a license. If you need help choosing a license, use https://choosealicense.com/",
    },
  
    {
      type: "input",
      name: "githubImage",
      message:
        "Add your github profile image url.",
    },
  
    {
      type: "input",
      name: "githubUserName",
      message:
        "Add your github user name.",
    }
  
  ])

  .then(function (data) {
    generateMark(data);
  });
