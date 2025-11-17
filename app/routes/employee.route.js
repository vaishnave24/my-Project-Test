const { registerEmployee, getEmployee, updateEmployee, deleteEmployeeById, loginEmployee } = require("../controller/employee.controller");
const { getUser } = require("../controller/user.controller");

const route = require("express").Router();

route.post("/employee/register",registerEmployee)

route.get("/employee/getEmployeeById",getEmployee) //with query

route.get("/employee/getEmployeeById/:ID",getEmployee)//with param

route.put("/employee/updateEmployee",updateEmployee)

route.delete("/employee/deleteEmployee",deleteEmployeeById)//with param

route.patch("/employee/updateEmployee",updateEmployee)

route.post("/employee/login",loginEmployee);

module.exports = {employeeRoutes:route};