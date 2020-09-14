const express = require('express');
const path = require('path');

const apiController = require('../controllers/apiControllers.js');

const router = express.Router();

// get entry from database
// router.get('/',
//   apiController.getEntry,
//   (req, res)=>{ res.status(200).send('successful entry query')})

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

// get all technologies from database
router.get('/technology', apiController.getTechnologies, (req, res) => {
  res.status(200).send('successful technologies query');
});

// add new technology to database
router.post('/technology', apiController.addTechnology, (req, res) => {
  res.status(200).send('successful technology creation');
});

module.exports = router;
