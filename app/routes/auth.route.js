const { loginUser } = require('../controller/employee.controller');

const route = require("express").Router();

route.post("/user/login",loginUser)

module.exports = {authRoutes:route};