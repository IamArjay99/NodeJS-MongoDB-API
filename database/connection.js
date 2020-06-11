const mongoose = require("mongoose");

/* Connection to MongoDB */
const dbConfig = "mongodb://127.0.0.1:27017";
const dbName = "nodejs-mongodb";

// Database Connection
const connectionOptions = { useNewUrlParser: true, useUnifiedTopology: true };

module.exports = mongoose.connect(
  `${dbConfig}/${dbName}`,
  connectionOptions,
  (err) => {
    if (err) {
      console.log(`Connection failed... ${err}`);
    } else {
      console.log("Connected to database");
    }
  }
);
