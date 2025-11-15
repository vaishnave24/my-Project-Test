const { registerEmployee, getEmployee } = require("../controller/employee.controller");
const { getUser } = require("../controller/user.controller");

const route = require("express").Router();

route.post("/employee/register",registerEmployee)

route.get("/employee/getEmployeeById",getEmployee)


module.exports = {employeeRoutes:route};