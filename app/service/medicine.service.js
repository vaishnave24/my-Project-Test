const medicineSchemaModel = require("../model/medicineSchema.model");

exports.saveMedicines = async (
  medicineName,
  strip,
  categories,
  quantityReceived,
  expiryDate,
  medicineId
) => {
  try {
    const response = await medicineSchemaModel.create({
      medicineName,
      strip,
      categories,
      quantityReceived,
      expiryDate,
      medicineId,
    });
    return response;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

exports.getmedicinesById = async (medicineId) => {
  try {
    console.log("medicineId", medicineId);
    const response = await medicineSchemaModel.find({ medicineId });

    console.log("response", response);
    return response;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

exports.deleteMedicinesById = async (medicineId) => {
  try {
    const response = await medicineSchemaModel.deleteMany({
      medicineId: medicineId,
    });
    console.log("response", response);
    return response;
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};

exports.updateMedicineNames = async (medicineId, medicineName) => {
  try {
    const data = await medicineSchemaModel.updateMany(
      { medicineId: medicineId },
      { $set: { medicineName: medicineName } }
    );
    return data;
  } catch (error) {
    throw new Error("Failed to update name");
    
  }
};
