// import session model
const sessionControllers = {}

sessionControllers.startSession = () => {
    // create session obj with cookie id
    // create db record passing session obj

}

sessionControllers.isLoggedIn = () => {
    // if client has cookie 
        // query database for session with cookie id 
            // if session expired request sign in 
            // else return next 
    // else request sign in 
}


module.exports = sessionControllers