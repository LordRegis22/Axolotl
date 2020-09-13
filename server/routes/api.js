const express = require('express')
const path = require ('path')

const apiController = require('../controllers/apiControllers.js')

const router = express.Router()


// get entry from database
router.get('/', 
  apiController.getEntry,
  (req, res)=>{ res.status(200).send('successful entry query')})

// save entry to database
router.post('/', 
  apiController.createEntry,
  (req, res)=>{ res.status(200).send('successful entry creation')})

// update entry in database
router.put('/',
  apiController.updateEntry, 
  (req, res)=>{ res.status(200).send('successful entry updated')})

// delete entry in database
router.delete('/',
  apiController.deleteEntry, 
  (req, res)=>{ res.status(200).send('successful entry deleted')})

// get all technologies from database
router.getTechnologies('/technology',    
(req, res)=>{ res.status(200).send('successful technologies query')}))

// add new technology to database
router.addTechnology('/technology',   
(req, res)=>{ res.status(200).send('successful technology creation')})

module.exports = router