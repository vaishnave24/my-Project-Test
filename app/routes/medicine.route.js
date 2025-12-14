const { BASE_URL } = require('../../constant');
const { addMedicines, getMedicineById, deleteMedicines, updateMedicines } = require('../controller/medicine.controller');
const { valdateResult } = require('../middelware/validateResult');
const { savemMedicineValidator } = require('../middelware/validationWithExpressValidator');

const route = require('express').Router();


// route.post(`${BASE_URL}/medicine/save-medicine`,[savemMedicineValidator,valdateResult],addMedicines)

route.post(`${BASE_URL}/medicine/save-medicine`,addMedicines)

route.get(`${BASE_URL}/medicine/get-medicine/:medicineId`,getMedicineById);

route.delete(`${BASE_URL}/medicine/delete-medicine`,deleteMedicines);

route.put(`${BASE_URL}/medicine/update-medicine`,updateMedicines);







module.exports = {medicineRoutes:route};