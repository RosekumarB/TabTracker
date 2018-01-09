const passport = require('passport')

module.exports = function(req, res, next) {
    passport.authenticate('jwt', function(err, user) {
        if(err ==="error" || !user) {
            res.status(403).send({
                error: 'you  do not have access'
            })
        } else {
            req.user = user
            console.log('user is ', user.email)
            next()
        }
    })(req, res, next)
}