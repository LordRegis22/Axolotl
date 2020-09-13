const db = require('../models/models.js')
const bcrypt = require('bcrypt')
const saltRounds = 10


const userController = {}
// create new user
userController.createUser = (req, res, next) => {
    // generate bcrypt password
    bcrypt.hash(req.body.password, saltRounds)
    .then(hash => {
        // add new user to db
        const addUser = 'INSERT INTO Users(username, password) VALUES($1,$2) RETURNING *'
        const userInfo = [req.body.username, hash]
        db.query(addUser, userInfo, (err, newUser) => {
            if (err) {
              return next(err)
            } else {
                // pass db user ID to generate SSID cookie 
                res.locals.id = newUser.rows[0].id
                return next()
            }
          })
    })
}

// login user 
userController.verifyUser = (req, res, next) => {
    
    db.query('SELECT * FROM Users')
    .then(result => console.log(result.rows))

    // query database for user with req.body user data
        // err handler 
        // if username does not exists - send no username found, request signup
        // if user exists 
            // compare query password to req.body user data.password
                // if passwords match - return next()
                // else send incorrect password 
    console.log('inside userController.loginUser')
    return next()
} 

// logout user
userController.logoutUser = (req, res, next) => {
    console.log('inside userController.logoutUser')
    return next()
} 

module.exports = userController