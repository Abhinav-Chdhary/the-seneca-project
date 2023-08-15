const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://abhinavchdhary:saymyname@cluster0.d4xeahs.mongodb.net/seneca?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    global.fetched_articles = await mongoose.connection
      .collection("articles")
      .find({})
      .toArray();
  } catch (error) {
    console.error("An unexpected error occured" + error);
  }
};

module.exports = mongoDB;
