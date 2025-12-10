const { STATUSCODES } = require("../../constant");
const {
  saveEmployee,
  getUserById,
  updateName,
  findEmployeeById,
  removeEmployeeById,
  findEmployeeByPhone,
  checkUserNamePassword,
  checkUserPassword,
  verifyPassword,
} = require("../service/employee.service");
const { generateToken, generatedToken } = require("../utils/generateToken");

//register employee
exports.registerEmployee = async (req, res) => {
  try {
    const { emp_id, password, first_name, last_name, email, phone, hire_date } =
      req.body;
    console.log(req.body);

    const data = await saveEmployee(
      emp_id,
      password,
      first_name,
      last_name,
      email,
      phone,
      hire_date
    );

    return res.status(STATUSCODES.CREATED).json({
      message: "Employee Created",
      statusCode: STATUSCODES.CREATED,
      res: data,
    });
  } catch (error) {
    return res.status(STATUSCODES.BAD_REQUEST).json({
      message: "Error",
      statusCode: STATUSCODES.BAD_REQUEST,
      error,
    });
  }
};

exports.getEmployee = async (req, res) => {
  const emp_id = req.query.Id;
  // const emp_id = req.;
  const data = await getUserById(emp_id);
  if (data) {
    return res.status(STATUSCODES.ok).json({
      message: "Employee fetched",
      statusCode: STATUSCODES.ok,
      res: data,
    });
  }
};

//update employee name by id
exports.updateEmployee = async (req, res) => {
  try {
    const { emp_id, first_name, last_name } = req.body;

    // Validate emp_id
    if (!emp_id) {
      return res.status(STATUSCODES.BAD_REQUEST).json({
        message: "emp_id is required",
        statusCode: STATUSCODES.BAD_REQUEST,
      });
    }

    console.log("emp_id:", emp_id);

    const response = await findEmployeeById(emp_id);
    console.log("response", response);

    // If employee not found
    if (!response) {
      return res.status(STATUSCODES.NOT_FOUND).json({
        message: "Employee not found",
        statusCode: STATUSCODES.NOT_FOUND,
      });
    }

    // Update employee
    const data = await updateName(emp_id, first_name, last_name);

    return res.status(STATUSCODES.ok).json({
      message: "Employee updated successfully",
      statusCode: STATUSCODES.ok,
      res: data,
    });
  } catch (error) {
    console.error("Update Employee Error:", error);

    return res.status(STATUSCODES.BAD_REQUEST).json({
      message: "Error in updating Employee",
      statusCode: STATUSCODES.BAD_REQUEST,
      error: error?.message || error,
    });
  }
};

//delete employee by id
exports.deleteEmployeeById = async (req, res) => {
  try {
    console.log("req",req)
    const { emp_id } = req.body;
    const response = await findEmployeeById(emp_id);

    // If employee not found
    if (!response) {
      return res.status(STATUSCODES.NOT_FOUND).json({
        message: "Employee not found",
        statusCode: STATUSCODES.NOT_FOUND,
      });
    }

    // const deleteData = await removeEmployeeById(emp_id);
    return res.status(STATUSCODES.ok).json({
      message: "Employee deleted successfully",
      statusCode: STATUSCODES.ok,
      res: deleteData,
    });
  } catch (error) {
    return res.status(STATUSCODES.BAD_REQUEST).json({
      message: "Error in deleting Employee",
      statusCode: STATUSCODES.BAD_REQUEST,
      error,
    });
  }
};

//login employee
exports.loginEmployee = async (req, res) => {
  const { phoneNumber, password } = req.body;

  if (!phoneNumber || !password) {
    return res.status(STATUSCODES.BAD_REQUEST).json({
      message: "Phone number and password are required",
      statusCode: STATUSCODES.BAD_REQUEST,
    });
  }
  const response = await findEmployeeByPhone(phoneNumber);
  if (!response) {
    return res.status(STATUSCODES.NOT_FOUND).json({
      message: `Employee with  ${phoneNumber} is not found`,
      statusCode: STATUSCODES.NOT_FOUND,
    });
  }

  const data = await verifyPassword(response.password, password);
  console.log("data", data);

  if (!data) {
    return res.status(STATUSCODES.UNAUTHORIZED).json({
      message: "Invalid Username or Password",
      statusCode: STATUSCODES.UNAUTHORIZED,
    });
  }
  const generatedToken = await generateToken(response);
  if (!generatedToken) {
    return res.status(STATUSCODES.INTERNAL_SERVER_ERROR).json({
      message: "Token generation failed",
      statusCode: STATUSCODES.INTERNAL_SERVER_ERROR,
    });
  }

  return res.status(STATUSCODES.ok).json({
    message: "Login successful",
    statusCode: STATUSCODES.ok,
    res: data,
    generatedToken,
  });
};

exports.uploadFiledUsingMulter = async (req, res) => {};

exports.loginUser = async (req, res) => {
  const { phoneNumber, password } = req.body;

  try {
    if (!phoneNumber || !password) {
      return res.status(STATUSCODES.BAD_REQUEST).json({
        message: "Phone number and password are required",
        statusCode: STATUSCODES.BAD_REQUEST,
      });
    }
  
    const response = await findEmployeeByPhone(phoneNumber);
    if (!response) {
      return res.status(STATUSCODES.NOT_FOUND).json({
        message: `Employee with  ${phoneNumber} is not found`,
        statusCode: STATUSCODES.NOT_FOUND,
      });
    }
  
    const data = await verifyPassword(response.password, password);
    if (!data) {
      return res.status(STATUSCODES.UNAUTHORIZED).json({
        message: "Invalid Username or Password",
        statusCode: STATUSCODES.UNAUTHORIZED,
      });
    }
  
    const token = generatedToken(response);
    
    console.log(token)
      return res.status(STATUSCODES.ok).json({
    message: "Login successful",
    statusCode: STATUSCODES.ok,
    res: response,
    token,
  });
  } catch (error) {
    console.log(error)
   throw error(error)
  } 
};
