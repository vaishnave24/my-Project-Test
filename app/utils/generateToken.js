// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const generateToken = async (data) => {
//   console.log("data in generate token", data);
//   let payload = {
//     emp_id: data.emp_id,
//     first_name: data.first_name,
//     phone:data.phone
//   };

//   const token = await jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "24h" });
//   return token;
// };

// module.exports = { generateToken };

const jwt = require("jsonwebtoken");
require("dotenv").config();

const generatedToken = (data) => {
  console.log("data", data);
 try {
  const payload = {
    emp_id: data.emp_id,
    first_name: data.first_name,
    phone: data.phone,
    role:data.department_id,
  };

 
    const response = jwt.sign({ payload }, process.env.JWT_SECRET_KEY, {
      expiresIn: "24h",
    });
     return response;
  } catch (error) {
    console.log(error);
    throw new Error(`Error${error}`);
    
  }

 
};
module.exports = { generatedToken };
