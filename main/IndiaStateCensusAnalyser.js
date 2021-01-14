const { rejects } = require("assert");
const { resolve } = require("path");
const csv = require("csv-parser");                     //import csv-parser
const fs = require("fs");                             //reading from the file system
const path = require("path"); 
let results = [];                                    //empty array

function indiaStateCensusAnalyser(file){               //function taking the file path

  return new Promise((resolve, rejects) => {            //have a promise
   
    var extension = path.extname(file);                  //file type check using extension
    if (extension != ".csv") {
      let reason = new Error("Wrong File Type Exception");
      rejects(reason);
    }

    fs.createReadStream(file)
      .pipe(csv())
      .on("headers", (header) => {                      //to check headers of csv file
        if (header[ 0 ] != "State" || 
            header[ 1 ] != "Population" || 
            header[ 2 ] != "AreaInSqKm" || 
            header[ 3 ] != "DensityPerSqKm") {
              let reason = new Error("Wrong Header Exception");
              rejects(reason);
        }
      })
      .on("data", (data) => results.push(data))   //pushing data to the array
      .on("end", () => {
        resolve(results.length);               //returning array lenght
      });
  });
}

module.exports = indiaStateCensusAnalyser;
