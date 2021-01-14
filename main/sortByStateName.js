const jasonConverter = require('../main/CsvtoJason')
const { rejects } = require("assert");
const { resolve } = require("path");

function sortByStateNameFunc(file) {
    return new Promise((resolve, rejects) => {
        jasonConverter(file).then(function (data) {
            data.sort(function (obj1 , obj2) {
                obj2.State.localeCompare(obj1.State);
                resolve(data)            
            });
        })
    });
}

module.exports = sortByStateNameFunc;