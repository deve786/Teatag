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
    
    const fetchedData=await mongoose.connection.db.collection('food_items')
    console.log(fetchedData.dbName)
    const foodCategory=await mongoose.connection.db.collection('foodCategory')
    const catData=await foodCategory.find({}).toArray()
    const data = await fetchedData.find({}).toArray();
    global.food_items = data;
    global.foodCategory=catData;
    //console.log('Retrieved data:', global.food_items);

  } catch (error) {
    console.error("Error connnecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
