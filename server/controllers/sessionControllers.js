const db = require('../models/models.js')

const sessionControllers = {}
// create new session
sessionControllers.startSession = (req, res, next) => {
    // add new session to db
    // const addSession = 'INSERT INTO Sessions (ssid) VALUES($1)'
    // const sessionId = [res.locals.id]
    //     db.query(addSession, sessionId, (err, newSession) => {
    //         if (err) {
    //             return next(err)
    //             } else {
    //                 return next()
    //             }
    //         }
    //     )
    return next()
    }

sessionControllers.isLoggedIn = (req, res, next) => {
    // if req.cookies has ssid 
        // query database for session with ssid
            // if session expired request sign in 
            // else return next 
    // else request sign in 
    return next()
}


module.exports = sessionControllers