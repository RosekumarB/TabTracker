const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser(user) {
    const ONE_WEEK = 60*60*24*7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}

module.exports = {
   register(req, res) {
       User.create(req.body)
            .then((user)=> {
                res.send(user.toJSON());
            })
            .catch((err) => {
                console.log('error occured',);
                res.status(400).send({
                    error:'already in use mate'
                })
            })

    },
    login(req, res) {
        try {
            const {email, password } = req.body
            User.findOne({
                where: {
                    email: email
                }
            }).then((user)=> {
                if(!user) {
                    return res.status(403).send({
                        error:'email not found'
                    })
                }
                user.comparePassword(password).then((isPasswordValid)=>{
                    console.log(password,'and db pwd', user.password)
                    if(!isPasswordValid) {
                        return res.status(403).send({
                            error: 'password is not valid'
                        })
                    }
                    const userJson = user.toJSON();

                    res.send({
                        user: userJson,
                        token: jwtSignUser(userJson)
                    })
                })
                
            })
        }   catch(error) {
                res.status(403).send({
                   error:'some error trying to login'
            })
        } 
    }
}