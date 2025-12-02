const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRoute = require("./app/routes/user.route");
const { employeeRoutes } = require("./app/routes/employee.route");
const { BASE_URL } = require("./constant");
const { connectDB, sequelize } = require("./db/dbSqlConnection");
const { mongoDbConnection } = require("./db/dbMongoDBConnection");
const errorhandler = require("./app/middelware/errorHandler");

require("dotenv").config();

const app = express();

// build in midderlwares
app.use(express.json()); // understand & handel incoming json request
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //encoded data form html form (not json)
app.use(express.static("public")); // server all files publicly
app.use(cookieParser()); // parses cookies from incoming http request
app.use(cors()); // allows cors origins

// routes
app.use(`${BASE_URL}`, userRoute);
app.use(`${BASE_URL}`, employeeRoutes);
app.use(errorhandler)

const PORT = process.env.PORT || 8080;

app.get("/home", (req, res) => {
  res.end("hello from Express");
});

// connectDB;

//sequlaize connection
sequelize
  .authenticate()
  .then((res) =>
    console.log(`Database connected successfully,${sequelize.config.database}`)
  )
  .catch((error) => {
    console.log("error in sequalize connection ", error);
  });

//mongoDB connection
mongoDbConnection();
app.listen(PORT, () => {
  console.log(`express server lisning on port ${PORT}`);
});
