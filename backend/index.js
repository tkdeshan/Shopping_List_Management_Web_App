const express = require('express');

const app = express();

const PORT = 5000;

app.get('/api/get', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`The server is running http://localhost:${PORT}`);
});
