const express = require('express');
const router = express.Router();

router.get('/items', (req, res) => {
  res.send('hello world');
});

module.exports = router;
