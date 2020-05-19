function generateMark(data) {
  const fs = require("fs");
  var filename = "README".toLowerCase().split(" ").join("") + ".md";

  // console.log(data.username);

  fs.writeFile(
    filename,
     "[![GitHub version](https://badge.f)](https://github.com/Naereen/StrapDown.js)"
      +
      "\n"
      + 
      "#"
       +
      data.title +
      "\n" +
      "#Description" +
      "\n" +
      data.description +
      "\n" +
      `[${data.tableOfContents}]` +
      "\n" +
      "#Installation" +
      "\n" +
      data.installation +
      "\n" +
      "##Credits" +
      "\n" +
      data.credits +
      "\n" +
      "##Usage" +
      "\n" +
      data.usage +
      "\n" +
      "##License" +
      "\n" +
      data.license,
    function (err) {
      if (err) {
        return console.log(err);
      }

      console.log("Success!");
    }
  );
}

module.exports = generateMark;
