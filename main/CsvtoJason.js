const { rejects } = require("assert");
const { resolve } = require("path");
const csv = require("csvtojson");
const fs = require("fs");

function jasonConverter(file) {
  return new Promise((resolve, rejects) => {
    let jsonOb = csv().fromFile(file);
    resolve(jsonOb);
  });
}

module.exports = jasonConverter;