const userController = {}

// create user
userController.createUser = (req, res, next) => {
    console.log('inside userController.createUser')
    return next()
}

// login user 
userController.loginUser = (req, res, next) => {
    console.log('inside userController.loginUser')
    return next()
} 

// logout user
userController.logoutUser = (req, res, next) => {
    console.log('inside userController.logoutUser')
    return next()
} 


module.exports = userController