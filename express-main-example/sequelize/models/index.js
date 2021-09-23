"use strict";
const { Sequelize } = require("sequelize");

const db = {};
const fs = require("fs");
const path = require("path");

const sequelize = new Sequelize("xxxx", "xxxx", "xxxx", {
  host: "xxxx",
  port: "xxxx",
  dialect: "xxxx",
  logging: console.log,
  benchmark: true,
  timezone: "+00:00",
});

//Read all models in models folder
const modelDir = require("./");
log(
  "\u001b[33m",
  "CRAWLING DATABASE MODEL DEFINITION in ",
  modelDir,
  "\u001b[39m"
);

fs.readdirSync(modelDir)
  .filter((file) => {
    return file.indexOf(".") !== 0 && file.slice(-8) === "model.js";
  })
  .forEach((file) => {
    let modelPath = path.join(modelDir, file);
    let model = require(modelPath)(sequelize, Sequelize.DataTypes);
    log(
      "\u001b[36m",
      "[MODEL FOUND]",
      model,
      " (",
      modelPath,
      ")",
      "\u001b[39m"
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  console.log(db[modelName].associate);
  // call the custom function
  if (db[modelName].associate) db[modelName].associate(db);
});

// exports sequelize connection and Object
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
