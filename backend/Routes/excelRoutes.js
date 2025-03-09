const express = require('express');
const router = express.Router();
const { excelToJson } = require('../Controller/excelToJsonController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), excelToJson);
module.exports = router;