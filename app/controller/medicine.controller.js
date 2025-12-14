const constant = require("../../constant");
const {
  saveMedicineValidaton,
  getmedicinesByIdValidation,
} = require("../middelware/validationWithJOI");
const {
  saveMedicines,
  getmedicinesById,
  deleteMedicinesById,
  updateMedicineNames,
} = require("../service/medicine.service");

exports.addMedicines = async (req, res) => {
  //added joi library for validation for validation
  const { error } = saveMedicineValidaton.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const {
    medicineName,
    strip,
    categories,
    quantityReceived,
    expiryDate,
    medicineId,
  } = req.body;

  const saveData = await saveMedicines(
    medicineName,
    strip,
    categories,
    quantityReceived,
    expiryDate,
    medicineId
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

exports.getMedicineById = async (req, res) => {
  const id = req.query.medicineId;
  console.log("id", id);

  const response = await getmedicinesById(id);
  console.log("response", response);
  return res.status(constant.STATUSCODES.ok).json({
    message: "Medicines fetched successfully",
    response,
  });
};

exports.deleteMedicines = async (req, res) => {
  const id = req.query.medicineId;
  console.log("id", id);

  if (!id) {
    return res.status(constant.STATUSCODES.BAD_REQUEST).json({
      message: "MedicineId is required",
    });
  }
  const response = await deleteMedicinesById(id);
  console.log("response", response);
  if (!response) {
    return res.status(constant.STATUSCODES.BAD_REQUEST).json({
      message: "Failed to delete medicines",
    });
  }
  console.log("response", response);
  return res.status(constant.STATUSCODES.ok).json({
    message: "Medicines fetched successfully",
    response,
  });
};

exports.updateMedicines = async (req, res) => {
  const { medicineId, medicineName } = req.body || {};
  console.log("called api");
  if (!medicineId || !medicineName) {
    return res.status(constant.STATUSCODES.BAD_REQUEST).json({
      message: "All filds are required",
    });
  }
  const response = await updateMedicineNames(medicineId, medicineName);

  if (!response) {
    return res.status(constant.STATUSCODES.BAD_REQUEST).json({
      message: "Failed to update names ",
    });
  }

  return res.status(constant.STATUSCODES.ok).json({
    message: " Updated sucessfully",
    response,
  });
};
