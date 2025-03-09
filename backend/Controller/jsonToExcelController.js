const ExcelJS = require('exceljs');
exports.jsonToExcel = async (req, res) => {
    const { json } = req.body;
    const workbook = new ExcelJS.Workbook();
    json.forEach(sheet => {
        const worksheet = workbook.addWorksheet(sheet.sheetName);
        if (sheet.data.length > 0) {
            worksheet.columns = Object.keys(sheet.data[0]).map(key => ({ header: key, key }));
            worksheet.addRows(sheet.data);
        }
    });
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=data.xlsx');
    await workbook.xlsx.write(res);
    res.end();
};