// const mysql = require('mysql');
// require('dotenv').config();

// const connectDB = mysql.createConnection({
// port:process.env.DB_PORT,
// host:process.env.DB_HOST,
// user:process.env.DB_USERNAME,
// password:process.env.DB_PASSWORD,
// database:process.env.DB_NAME,

// })

// connectDB.connect((err)=>{
// if(!err)
// {
//     console.log(`Server connected to SQL db......................✅ ${process.env.DB_NAME}`)
// }
// else{
//     console.log("error to connect database",err)
// }
// })

// module.exports = {connectDB}

const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,      // database
  process.env.DB_USERNAME,  // username
  process.env.DB_PASSWORD,  // password
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    logging: false,  // optional: disables SQL logs

    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
  }
);

module.exports = { sequelize };

