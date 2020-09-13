const db = require('../models/models.js')
const bcrypt = require('bcrypt')
const saltRounds = 10


const userController = {}


// CREATE NEW USER
userController.createUser = (req, res, next) => {
    // generate bcrypt password
    bcrypt.hash(req.body.password, saltRounds)
    .then(hash => {
        // add new user to db
        const addUser = 'INSERT INTO Users(username, password) VALUES($1,$2) RETURNING *'
        const userInfo = [req.body.username, hash]
        db.query(addUser, userInfo, (err, newUser) => {
            if (err) return next(err)
            else {
                // pass db user ID to generate SSID cookie 
                res.locals.id = newUser.rows[0].id
                return next()
            }
          })
    })
}

// LOGIN USER
userController.loginUser = (req, res, next) => {
    const text = 'SELECT * FROM Users WHERE username=($1)'
    const username = [req.body.username]
    // verify username in db
    db.query(text, username, (err, result) => {

        if (err) return next(err)
        else if (result.rows.length === 0) res.send('User does not exist. Try again!')
        else if (result.rows[0].username !== req.body.username) res.send('Incorrect username. Try again!')
        else {
            res.locals.id = result.rows[0].id
            console.log(result)
            return next()
            }
        }  
    )
}
        
// LOGOUT USER
userController.logoutUser = (req, res, next) => {
    console.log('inside userController.logoutUser')
    return next()
} 

module.exports = userController