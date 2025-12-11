const medicineSchemaModel = require("../model/medicineSchema.model");

exports.saveMedicines = async (
  medicineName,
  strip,
  categories,
  quantityReceived,
  expiryDate
) => {
  try {
    const response = await medicineSchemaModel.create({
      medicineName,
      strip,
      categories,
      quantityReceived,
      expiryDate,
    });
    return response;
  } catch (error) {
    console.log("error",error)
    throw error;
  }
};
