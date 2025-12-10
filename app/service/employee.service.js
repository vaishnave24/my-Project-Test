const { employee } = require("../model/employee.model");
const bcrypt = require("bcrypt");

exports.saveEmployee = async (
  emp_id,
  password,
  first_name,
  last_name,
  email,
  phone,
  hire_date
) => {
  const hashpassword = await bcrypt.hash(password, 10);
  console.log("called");

  console.log(
    emp_id,
    first_name,
    last_name,
    email,
    phone,
    hire_date,
    hashpassword
  );
  const saveData = employee.create({
    emp_id,
    password: hashpassword,
    first_name,
    last_name,
    email,
    phone,
    hire_date,
  });
  console.log("saveData", saveData);
  return saveData;
};

exports.getUserById = async (Id) => {
  const getUser = await employee.findOne({
    where: { emp_id: Id },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
  return getUser;
};

exports.updateName = async (emp_id, first_name, last_name) => {
  console.log("emp", emp_id, first_name, last_name);

  const updateData = await employee.update(
    { first_name: first_name, last_name: last_name },
    { where: { emp_id: emp_id } }
  );
  return updateData;
};

exports.findEmployeeById = async (emp_id) => {
  const empData = await employee.findOne({
    where: { emp_id: emp_id },
    logging: console.log,
  });

  return empData;
};

exports.removeEmployeeById = async (emp_id) => {
  const data = await employee.destroy({
    where: { emp_id: emp_id },
  });
  return data;
};

exports.findEmployeeByPhone = async (phoneNumber) => {
  console.log("service", phoneNumber);
  const empData = await employee.findOne({
    where: { phone: phoneNumber },
    logging: console.log,
  });

  return empData;
};

exports.verifyPassword = async (dBpassword, password) => {
  try {
    console.log("dBpassword,password", dBpassword, password);

    const passwordMatch = await bcrypt.compare(password, dBpassword);
    return passwordMatch;
  } catch (error) {
    console.log("error", error);
    throw new Error("Invalid password");
    
  }
};
