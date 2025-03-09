const express = require('express');
const cors = require('cors');
const app = express();
const excelRoutes = require('./Routes/excelRoutes');
const jsonRoutes = require('./Routes/jsonRoutes');
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api/excel', excelRoutes);
app.use('/api/json', jsonRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



