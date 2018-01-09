const passport = require('passport')
const  { User} = require('./models')
const config = require('./config/config')

const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt

passport.use(
    new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: config.authentication.jwtSecret
    }, function(jwtPayload, done) {
        try {
            User.findOne({
                where: {
                    id: jwtPayload.id
                }
            }).then((user) => {
                if(user) {
                    return done(null, user)
                } else {
                    return done(new Error(), false)
                }
            }).catch((e)=>{
                return done(new Error(), false)
            })
        } catch (err) {
            return done(new Error(), false)
        }
    })
)

module.exports = null