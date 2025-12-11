const { BASE_URL } = require('../../constant');
const { addMedicines } = require('../controller/medicine.controller');
const { valdateResult } = require('../middelware/validateResult');
const { savemMedicineValidator } = require('../middelware/validationWithExpressValidator');

const route = require('express').Router();


// route.post(`${BASE_URL}/medicine/save-medicine`,[savemMedicineValidator,valdateResult],addMedicines)

route.post(`${BASE_URL}/medicine/save-medicine`,addMedicines)



module.exports = {medicineRoutes:route};