function generateMark(data) {
  const fs = require("fs");
 
  let filename = "README".toLowerCase().split(" ").join("") + ".md";

  // console.log(data.username);

  fs.writeFile(
    filename,

    ` [![Generic badge](https://img.shields.io/badge/Github-Profile-<COLOR>.svg)](${data.githubUrl})\n\n${
      "# " + data.title
    }\n\n[${data.tableOfContents[0]}](#Installation)\n\n[${
      data.tableOfContents[1]
    }](#Usage)\n\n[${data.tableOfContents[2]}](#Credits)\n\n[${
      data.tableOfContents[3]
    }](#License)
      \n\n ## Description \n ${data.description} \n\n ## Installation \n ${
      data.installation
    } \n\n ## Credits \n ${data.credits} \n\n ## Usage \n ${
      data.usage
    } \n\n ## License \n ${
      data.license
    } \n\n ### GithubProfileImage \n ![githubimage](${
      data.githubImage
    }) \n ### GithubUsername:${data.githubUserName} 
      
    `,

    function (err) {
      if (err) {
        return console.log(err);
      }

      console.log("Success!");
    }
  );
}

module.exports = generateMark;
