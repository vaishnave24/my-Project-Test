const mongoose = require("mongoose");
require("dotenv").config();

const mongoDbConnection = async () => {
  try {
    const connctionDB = await mongoose.connect(
      `${process.env.MONGODB_URL}/${process.env.DBNAME}`
    );
    console.log(
      `MongoDB connected !! DB Host ${connctionDB.connection.host}`
    );
  } catch (error) {
    console.log(`error to connect mongodb`, error);
  }
};

module.exports ={mongoDbConnection}