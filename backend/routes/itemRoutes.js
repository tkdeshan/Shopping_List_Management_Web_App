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

// Update data
router.put('/item/:id', (req, res) => {
  const id = req.params.id;
  Items.findByIdAndUpdate(
    { _id: id },
    {
      itemId: req.body.itemId,
      itemName: req.body.itemName,
      quentity: req.body.quentity,
    }
  )
    .then((items) => res.json(items))
    .catch((err) => res.json(err));
});

// Delete data
router.delete('/item/:id', (req, res) => {
  const id = req.params.id;
  Items.findByIdAndDelete({ _id: id })
    .then((res) => res.json(res))
    .catch((err) => res.json(err));
});

module.exports = router;
