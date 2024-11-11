// const mongoose = require('mongoose');

// const mongoURI = "mongodb+srv://faizansari0621:Darknight123@cluster0.7iobkzc.mongodb.net/FoodApp?retryWrites=true&w=majority";

// const mongoDBS = async () => {
//     try {
//         await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//         console.log("Connected To Server");

//         const db = mongoose.connection;

//         // Assuming "food_items" is the name of your collection
//         const collection = db.collection("food_item");

//         // Use find to get a cursor, then use toArray to get the documents as an array
//         const data = await collection.find({}).toArray( err,data);
//           const foodCategeory=db.collection("food_category");
//           food_category= await collection.find({}).toArray(err,catData);
//           global.food_item=data;
//           global.food_category=catData;
//           console.log(global.food_item);

//     } catch (err) {
//         console.error("Error:", err);
//     }
// };

// module.exports = mongoDBS;
// const mongoose = require('mongoose');

// const mongoURI = "mongodb+srv://faizansari0621:Darknight@cluster0.7iobkzc.mongodb.net/FoodApp?retryWrites=true&w=majority";
// // const mongoURI="mongodb+srv://faizansari0621:Darknight@cluster0.7iobkzc.mongodb.net/FoodApp"

// const mongoDBS = async () => {
//     try {
//         await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
//         console.log("Connected To Server");

//         const db = mongoose.connection;

//         // Assuming "food_items" is the name of your collection
//         const collection = db.collection("food_item");

//         // Use find to get a cursor, then use toArray to get the documents as an array
//         const data = await collection.find({}).toArray();
//         const foodCategeory = db.collection("food_category");
//         const catData = await foodCategeory.find({}).toArray();
//         global.food_item = data;
//         global.food_category = catData;
//         // console.log(global.food_item);

//     } catch (err) {
//         console.error("Error:", err);
//     }
// };

// module.exports = mongoDBS;

const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://faizansari0621:FaizAnsari@cluster0.7iobkzc.mongodb.net/FoodApp?retryWrites=true&w=majority";

const mongoDBS = async () => {
    try {
        // Connect to the MongoDB database
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB server");

        // Get the default connection
        const db = mongoose.connection;

        // Check for connection errors
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));

        // Get the food_item collection and retrieve data
        const foodItemCollection = db.collection("food_item");
        const foodItems = await foodItemCollection.find({}).toArray();
        
        // Get the food_category collection and retrieve data
        const foodCategoryCollection = db.collection("food_category");
        const foodCategories = await foodCategoryCollection.find({}).toArray();

        // Set global variables for food items and categories
        global.food_item = foodItems;
        global.food_category = foodCategories;
        
        console.log("Data loaded into global variables");

    } catch (err) {
        console.error("Error connecting to MongoDB or retrieving data:", err);
    }
};

module.exports = mongoDBS;
