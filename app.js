const express = require('express');
const app = express();
const downloadRoutes = require('./routes/download');
const convertRoutes = require('./routes/convert');

app.use(express.static('public'));
app.use(express.json());

app.use('/download', downloadRoutes);
app.use('/convert', convertRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
