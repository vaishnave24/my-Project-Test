const { validationResult } = require("express-validator");

//request validator for validate request
exports.valdateResult = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    // !error.isEmpty() because error is getting object so if not error then its not to go next function
    console.log("error", error);
    return res.status(400).json(error);
  }
  next();
};
