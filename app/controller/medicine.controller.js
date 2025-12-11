const constant = require("../../constant");
const { saveMedicineValidaton } = require("../middelware/validationWithJOI");
const { saveMedicines } = require("../service/medicine.service");

exports.addMedicines = async (req, res) => {
  
  //added joi library for validation for validation
  const { error } = saveMedicineValidaton.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const { medicineName, strip, categories, quantityReceived, expiryDate } =
    req.body;

  const saveData = await saveMedicines(
    medicineName,
    strip,
    categories,
    quantityReceived,
    expiryDate
  );
  if (!saveData) {
    return res.status(constant.STATUSCODES.BAD_REQUEST).json({
      message: "Error in saving medicines",
    });
  }

  return res.status(constant.STATUSCODES.ok).json({
    message: "Medicines added successfully",
    data: saveData,
  });
};
