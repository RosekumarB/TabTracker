const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicies = require('./policies/AuthenticationControllerPolicies')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')

module.exports = (app) => {
    app.post('/register',AuthenticationControllerPolicies, AuthenticationController.register)
    app.post('/login',AuthenticationController.login)
    app.get('/songs',SongsController.index)
    app.post('/songs', SongsController.createSong)
    app.get('/songs/:id',SongsController.getSong)
    app.put('/songs/:id', SongsController.putSong)
    app.get('/bookmarks',BookmarksController.index)
    app.get('/bookmark', BookmarksController.get)
    app.post('/bookmarks',BookmarksController.addBookmark)
    app.delete('/bookmarks', BookmarksController.deleteBookmark)
}