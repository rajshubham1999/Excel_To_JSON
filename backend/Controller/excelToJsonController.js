
const xlsx = require('xlsx');
exports.excelToJson = (req, res) => {
    const file = req.file;
    const workbook = xlsx.readFile(file.path);
    const jsonData = workbook.SheetNames.map(sheet => ({
        sheetName: sheet,
        data: xlsx.utils.sheet_to_json(workbook.Sheets[sheet], {defval: null})
    }));
    res.json({ success: true, data: jsonData });
};