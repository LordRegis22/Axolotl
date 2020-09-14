const express = require('express');
const path = require('path');

const apiController = require('../controllers/apiControllers.js');

const router = express.Router();

// retrieve entry from database
router.get('/', apiController.getAllEntries, (req, res) => {
  res.status(200).send(res.locals.allEntries);
});

// save entry to database
router.post('/', apiController.createEntry, (req, res) => {
  res.status(200).send(res.locals.createdUser);
});

// update entry in database
router.put('/', apiController.updateEntry, (req, res) => {
  res.status(200).send(res.locals.updatedUser);
});

// delete entry in database
router.delete('/', apiController.deleteEntry, (req, res) => {
  res.status(200).send(res.locals.deletedEntry);
});

module.exports = router;
