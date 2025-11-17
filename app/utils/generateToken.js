const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = async (data) => {
  console.log("data in generate token", data);
  let payload = {
    emp_id: data.emp_id,
    first_name: data.first_name,
    phone:data.phone
  };

  const token = await jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "24h" });
  return token;
};

module.exports = { generateToken };
