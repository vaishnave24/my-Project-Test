const { body } = require("express-validator");

const savemMedicineValidator = [
  body("medicineName").notEmpty().withMessage("medicineName is required"),
  body("strip").notEmpty().isNumeric().withMessage("strip must be a number"),
  body("categories").notEmpty().withMessage("categories is required"),
  body("quantityReceived")
    .notEmpty()
    .isNumeric()
    .withMessage("strip must be a number"),
  body("expiryDate")
    .notEmpty()
    .toDate()
    .withMessage("expiryDate must be a number"),
];

module.exports = {
    savemMedicineValidator
}