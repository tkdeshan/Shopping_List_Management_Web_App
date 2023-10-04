const express = require('express');
const cors = require('cors');
const itemRoutes = require('./routes/itemRoutes');

const app = express();

const PORT = 5000;

app.use(cors());
app.use(express.json());
app.use('/api', itemRoutes);


app.listen(PORT, () => {
  console.log(`The server is running http://localhost:${PORT}`);
});
