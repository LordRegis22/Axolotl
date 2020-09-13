const cookieController = {}

// CREATE SSID COOKIE
cookieController.setSSIDCookie = (req, res, next) => {
    res.cookie('ssid', res.locals.id, {httpOnly: true}, {secure: true})
    return next()
}

module.exports = cookieController
