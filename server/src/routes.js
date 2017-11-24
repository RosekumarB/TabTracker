const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicies = require('./policies/AuthenticationControllerPolicies')
const SongsController = require('./controllers/SongsController')

module.exports = (app) => {
    app.post('/register',AuthenticationControllerPolicies, AuthenticationController.register)
    app.post('/login',AuthenticationController.login)
    app.get('/songs',SongsController.index)
    app.post('/songs', SongsController.createSong)
    app.get('/songs/:id',SongsController.getSong)
}