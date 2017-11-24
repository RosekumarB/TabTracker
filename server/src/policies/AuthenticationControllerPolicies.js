const joi = require('joi')

const AuthenticationControllerPolicies = (req, res, next) => {
    const schema = {
        email: joi.string().email(),
        password: joi.string().regex(
            new RegExp('^[a-zA-Z0-9]{8,32}$')
        )
    }
        const {error, value} = joi.validate(req.body, schema)
        if(error) {
            switch(error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error:'email should be valid'
                    })
                case 'password':
                    res.status(400).send({
                        error: 'provided password didnt match the rules'
                    })
                default:
                    res.status(400).send({
                        error:'invalid data'
                    })
            }
        } else {
            next();
        }
    }
module.exports = AuthenticationControllerPolicies
