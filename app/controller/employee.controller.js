const { STATUSCODES } = require("../../constant");
const { saveEmployee, getUserById } = require("../service/employee.service");

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
  console.log("ID",emp_id)
  const data = await getUserById(emp_id);
  if (data) {
    return res.status(STATUSCODES.ok).json({
      message: "Employee fetched",
      statusCode: STATUSCODES.ok,
      res: data,
    });
  }
};
