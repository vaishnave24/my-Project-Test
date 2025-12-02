const { STATUSCODES } = require("../../constant");

function errorhandler(error, req, res, next) {
  console.log("Error", error);

  return res.status(STATUSCODES.INTERNAL_SERVER_ERROR || 500).json({
    message: "Internal Server Error",
    error: error || error.message,
  });
}

module.exports = errorhandler;
