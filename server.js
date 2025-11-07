const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userRoute = require("./app/routes/user.route");
const { employeeRoutes } = require("./app/routes/employee.route");

require("dotenv").config();

const app = express();

// build in midderlwares
app.use(express.json()); // understand & handel incoming json request
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //encoded data form html form (not json)
app.use(express.static("public")); // server all files publicly
app.use(cookieParser()); // parses cookies from incoming http request
app.use(cors); // allows cors origins

app.use("app/v1", userRoute);
app.use("app/v2", employeeRoutes);

const PORT = process.env.PORT || 8080;

app.get("/home", (req, res) => {
  res.end("hello from Express");
});

app.listen(PORT, () => {
  console.log(`express server lisning on port ${PORT}`);
});
