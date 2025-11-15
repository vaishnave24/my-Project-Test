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
