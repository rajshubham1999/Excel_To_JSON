const express = require('express');
const router = express.Router();
const { jsonToExcel } = require('../Controller/jsonToExcelController');
router.post('/convert', jsonToExcel);
module.exports = router;