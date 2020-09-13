const { json } = require('express')
const db = require('../models/models.js')
const apiController = {}


apiController.getEntry = (req, res, next) => {
    // insert query
   
    console.log('inside apiController.getEntry')
    return next()
}

apiController.createEntry = (req, res, next) => {
    // create entry and add to database
    console.log('inside apiController.createEntry')
    return next()
}

apiController.updateEntry = (req, res, next) => {
    // create entry and add to database
    console.log('inside apiController.updateEntry')
    return next()
}

apiController.deleteEntry = (req, res, next) => {
    // create entry and add to database
    console.log('inside apiController.deleteEntry')
    return next()
}

module.exports = apiController