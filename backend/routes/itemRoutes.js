const express = require('express');
const router = express.Router();
const Items = require('../modules/itemModel');

router.get('/items', (req, res) => {
  Items.find({})
    .then((items) => res.json(items))
    .catch((err) => res.json(err));
});

// Read data from id
router.get('/items/:id', (req, res) => {
  const id = req.params.id;
  Items.findById({ _id: id })
    .then((items) => res.json(items))
    .catch((err) => res.json(err));
});

// Insert data
router.post('/item', (req, res) => {
  Items.create(req.body)
    .then((items) => res.json(items))
    .catch((err) => res.json(err));
});

module.exports = router;
