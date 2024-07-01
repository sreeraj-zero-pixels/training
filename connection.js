// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://sreerajr:KtbCc5vTC3ivVs1e@cluster0.wlcyjnz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// module.exports = client;

const mongoose = require("mongoose");

module.exports = mongoose;
