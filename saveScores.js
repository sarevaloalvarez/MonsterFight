



const fs = require('fs');


  
  const writeFile = fs.writeFile('Scores.json',scores,(err) => {
      if (err) {
          throw err;
      }
      console.log("JSON Scores is saved.");
    });





