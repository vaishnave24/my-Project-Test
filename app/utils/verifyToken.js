// const jwt = require("jsonwebtoken");
// const { STATUSCODES } = require("../../constant");
// require("dotenv").config();

// const jwtVerify = (req, res, next) => {
//   try {
//     const accessToken = req.headers["x-access-token"];
//     if (!accessToken) {
//       return res
//         .status(STATUSCODES.UNAUTHORIZED)
//         .json({ message: "Access Denied: No access token provided!" });
//     }
//     const token = jwt.verify(
//       accessToken,
//       process.env.JWT_SECRET_KEY,
//       (error, decoded) => {
//         if (error) {
//           console.log("TokenExpired", error);

//           if (error.name == "TokenExpiredError") {
//             console.log("TokenExpired", error);
//             return res
//               .status(STATUSCODES.UNAUTHORIZED)
//               .send({ message: "Session expired: Token has expired!" });
//           } else
//             return res
//               .status(STATUSCODES.UNAUTHORIZED)
//               .send({ message: "Access Denied: Unauthorized!" });
//         }

//         next();      }
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

// module.exports = { jwtVerify };

const jwt = require("jsonwebtoken");
const { STATUSCODES } = require("../../constant");
const { json } = require("sequelize");

const jwtVerify = (req, res, next) => {
  try {
    const accessToken = req.headers["x-access-token"];

    if (!accessToken) {
      return res.status(STATUSCODES.UNAUTHORIZED).json({
        message: "Access denied",
        statusCode: STATUSCODES.UNAUTHORIZED,
      });
    }

    const token = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
    console.log("token", token);
    req.role = token.payload.role;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(STATUSCODES.UNAUTHORIZED).json({
        message: "Token Expired",
        statusCode: STATUSCODES.UNAUTHORIZED,
      });
    } else {
      return res.status(STATUSCODES.UNAUTHORIZED).json({
        message: "Invalid Token",
        statusCode: STATUSCODES.UNAUTHORIZED,
      });
    }
  }
};
module.exports = { jwtVerify };
