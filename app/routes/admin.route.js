const { uploadFiledUsingMulter } = require("../controller/employee.controller");

const adminRoute = require("express").Router();

adminRoute.get("/upload", uploadFiledUsingMulter);

module.exports = adminRoute;
