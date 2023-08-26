const mongoose = require("mongoose");
const MongoURI =
  'mongodb+srv://ijasahmediku987:Id18COy0rdVSRHLL@cluster0.tjc7p87.mongodb.net/testDB'; // Add the name of your database at the end of the URL
const mongoDB = async () => {
  try {
    await mongoose.connect(MongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
