const Joi = require("joi");

const saveMedicineValidaton = Joi.object({
  medicineName: Joi.string().min(2).required(),
  strip: Joi.number().integer().min(1).required(),
  categories: Joi.string().required(),
  quantityReceived: Joi.number().min(1).required(),
  expiryDate: Joi.date().required(),
});

module.exports = {saveMedicineValidaton};
