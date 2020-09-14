const { json } = require('express');
const db = require('../models/models.js');
const apiController = {};
const helperFunctions = require('./helperFunctions.js');

// create new array of objects with properties of technologyName and technologyURL for each item in tech_stack array

// return all entries in database
apiController.getAllEntries = (req, res, next) => {
  helperFunctions.getLatestUser('allEntries', 0, req, res, next);
  //console.log('inside apiController.getEntry');
};

apiController.createEntry = (req, res, next) => {
  // create entry and add to database
  const createErrorEntry = `INSERT into error_entries (creator, error_message, resolution, documentation, created_at) VALUES ($1, $2, $3, $4, $5) RETURNING *`;
  // query database to create new error_entries row with values sent from front end
  const valuesFromClient = [
    req.body.creator,
    req.body.error_message,
    req.body.resolution,
    req.body.documentation,
    new Date().toLocaleString(),
  ];
  // db will respond copy of that new entry
  db.query(createErrorEntry, valuesFromClient, (err, data) => {
    if (err) {
      return next(err);
    }
    // pull id from new entry in error_entries table
    res.locals.newId = data.rows[0].id;
    // query database to create relation row with each technology id in tech_stack array that came from front end in error_technologies
    for (let el of req.body.tech_stack) {
      const createErrorTechnolgiesRelationship = `INSERT into error_technologies (technology_id, error_entry_id) VALUES ($1, $2)`;
      const valuesForErrorTechnologiesRelationship = [el, res.locals.newId];
      db.query(
        createErrorTechnolgiesRelationship,
        valuesForErrorTechnologiesRelationship,
        (err, data) => {
          if (err) {
            return next(err);
          }
        }
      );
    }
    // stringAgg join relationships in error_technologies table to error_entries data
    helperFunctions.getLatestUser(
      'createdUser',
      res.locals.newId,
      req,
      res,
      next
    );
  });
  console.log('inside apiController.createEntry');
};

apiController.updateEntry = (req, res, next) => {
  // create entry and add to database
  const updateErrorEntry = `UPDATE error_entries SET creator = $1, error_message = $2, resolution = $3, documentation=$4, created_at=$5 WHERE id = $6 RETURNING *`;
  // query database to create new error_entries row with values sent from front end
  const valuesFromClient = [
    req.body.creator,
    req.body.error_message,
    req.body.resolution,
    req.body.documentation,
    new Date().toLocaleString(),
    req.body.id,
  ];
  // db will respond copy of that new entry
  db.query(updateErrorEntry, valuesFromClient, (err, data) => {
    if (err) {
      return next(err);
    }

    // query error_technologies table and return all relationships
    const deleteAllErrorTechnologyEntries = `DELETE from error_technologies WHERE error_entry_id = $1`;
    const updatedEntryId = [req.body.id];
    db.query(
      deleteAllErrorTechnologyEntries,
      updatedEntryId,
      (err, results) => {
        if (err) {
          return next(err);
        }

        console.log(results.rows);
        // query database to create relation row with each technology id in tech_stack array that came from front end in error_technologies
        for (let el of req.body.tech_stack) {
          const createErrorTechnolgiesRelationship = `INSERT into error_technologies (technology_id, error_entry_id) VALUES ($1, $2)`;
          const valuesForErrorTechnologiesRelationship = [el, req.body.id];
          db.query(
            createErrorTechnolgiesRelationship,
            valuesForErrorTechnologiesRelationship,
            (err, data) => {
              if (err) {
                return next(err);
              }
            }
          );
        }
        helperFunctions.getLatestUser(
          'updatedUser',
          req.body.id,
          req,
          res,
          next
        );
      }
    );
  });
};

apiController.deleteEntry = (req, res, next) => {
  // create entry and add to database
  const deleteErrorEntry = `DELETE FROM error_entries WHERE id = $1 RETURNING *`;
  const idToBeDeleted = [req.body.id];
  db.query(deleteErrorEntry, idToBeDeleted, (err, deletedEntry) => {
    if (err) {
      return next(err);
    }
    res.locals.deletedEntry = deletedEntry;
    return next();
  });
  console.log('inside apiController.deleteEntry');
};

// Get ALL technologies from database
apiController.getTechnologies = (req, res, next) => {
  db.query('SELECT * FROM Technologies', null, (err, result) => {
    if (err) return next(err);
    res.send(result.rows);
  });
};

apiController.addTechnology = (req, res, next) => {
  const query =
    'INSERT INTO Technologies(technology_name, documentation) VALUES($1,$2) RETURNING *';
  const values = [req.body.technology_name, req.body.documentation];
  db.query(query, values, (err, result) => {
    if (err) return next(err);
    res.send(result.rows);
  });
};

module.exports = apiController;
module.exports = apiController;
