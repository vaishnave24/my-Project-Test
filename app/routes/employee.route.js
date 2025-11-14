const { getUser } = require("../controller/user.controller");

const route = require("express").Router();

route.get("/test",getUser)


module.exports = {employeeRoutes:route};