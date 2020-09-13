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

// Get ALL technologies from database
apiController.getTechnologies = (req, res, next) => {
    db.query('SELECT * FROM Technologies', null, (err, result) => {
        if (err) return next(err)
        res.send(result.rows)
    })
}


apiController.addTechnology = (req, res, next) => {
    const query = 'INSERT INTO Technologies(technology_name, documentation) VALUES($1,$2) RETURNING *'
    const values = [req.body.technology_name, req.body.documentation]
    db.query(query, values, (err, result) => {
        if (err) return next(err)
        res.send(result.rows)
    })
}


module.exports = apiController