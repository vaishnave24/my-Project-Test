const Joi = require("joi");

const saveMedicineValidaton = Joi.object({
  medicineId: Joi.number().required(),
  medicineName: Joi.string().min(2).required(),
  strip: Joi.number().integer().min(1).required(),
  categories: Joi.string().required(),
  quantityReceived: Joi.number().min(1).required(),
  expiryDate: Joi.date().required(),
});

const getmedicinesByIdValidation = Joi.object({
  medicineId: Joi.number().required(),
});
module.exports = {
  saveMedicineValidaton,
  getmedicinesByIdValidation,
};
