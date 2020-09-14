const { json } = require('express');
const db = require('../models/models.js');

const helperFunctions = {};

helperFunctions.createObjArrayFromString = (data) => {
  const rows = data.rows;
  // iterate through all tech_stack items, create array of tech name and tech URL pairs
  for (let technology of rows) {
    // split each item pair into array
    const newTechsArr = technology.tech_stack.split(';');
    // create new object for each nested array that has descriptive properties
    for (let i = 0; i < newTechsArr.length; i++) {
      const temporaryArr = newTechsArr[i].split(',');
      const newTechObj = {};
      newTechObj.technologyName = temporaryArr[0];
      newTechObj.technologyUrl = temporaryArr[1];
      // update newTechsArr to hold new object
      newTechsArr[i] = newTechObj;
    }
    // update tech_stack property to array of objects holding technology name and url
    technology.tech_stack = newTechsArr;
  }
  return rows;
};

helperFunctions.getLatestUser = (resLocalsProperty, id, req, res, next) => {
  const specifyQueryById = id > 0 ? 'WHERE error_entries.id = $1' : '';
  // stringAgg join relationships in error_technologies table to error_entries data
  const getLatestUserQuery = `SELECT error_entries.*, STRING_AGG(technologies.technology_name ||','|| technologies.documentation, ';' ) tech_stack FROM error_entries JOIN error_technologies ON error_entries.id = error_technologies.error_entry_id JOIN technologies ON technologies.id = error_technologies.technology_id ${specifyQueryById} GROUP BY error_entries.id `;
  const idValue = specifyQueryById ? [id] : undefined;
  db.query(getLatestUserQuery, idValue, (err, results) => {
    if (err) {
      return next(err);
    }
    // set res.locals.createdUser to the object formatted by helper func
    res.locals[resLocalsProperty] = helperFunctions.createObjArrayFromString(
      results
    );
    return next();
  });
};

module.exports = helperFunctions;
