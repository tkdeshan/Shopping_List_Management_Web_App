const express = require('express');
const router = express.Router();
const Items = require('../modules/itemModel');

router.get('/items', (req, res) => {
    Items.find({})
    .then((items) => res.json(items))
    .catch((err) => res.json(err));
});

module.exports = router;
