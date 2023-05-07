const mongoose = require("mongoose");

// Create a function to connect to a database
async function connectToDatabase(url) {
  try {
    await mongoose.connect(url);
    console.log(`Connected to ${url}`);
  } catch (error) {
    console.error(`Failed to connect to ${url}: ${error}`);
  }
}

exports.connectToDatabase = connectToDatabase;
