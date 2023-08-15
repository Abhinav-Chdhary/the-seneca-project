const mongoose = require("mongoose");
const mongoURI = "";

const mongoDB = async () => {
  try {
    console.log("okay I guess");
  } catch (error) {
    console.error("An unexpected error occured" + error);
  }
};

module.exports = mongoDB;
