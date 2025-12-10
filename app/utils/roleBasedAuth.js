const { STATUSCODES } = require("../../constant");

const checkRole = (...Userrole) => {
  return (req, res, next) => {
    const role = req.role;
    console.log("Userrole",Userrole),
    console.log("roleinroles",role)
    if (!role) {
      return res.status(STATUSCODES.UNAUTHORIZED).json({
        message: "UNAUTHORIZED",
      });
    }
    if (!Userrole.includes(role)) {
      return res.status(STATUSCODES.UNAUTHORIZED).json({
        message: "Access denied",
      });
    }
    next();
  };
};

module.exports = { checkRole };
