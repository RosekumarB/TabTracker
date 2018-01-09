const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicies = require('./policies/AuthenticationControllerPolicies')
const SongsController = require('./controllers/SongsController')
const BookmarksController = require('./controllers/BookmarksController')
const RecentsController = require('./controllers/RecentsController')
const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
    app.post('/register',AuthenticationControllerPolicies, AuthenticationController.register)
    app.post('/login',AuthenticationController.login)
    app.get('/songs',SongsController.index)
    app.post('/songs', SongsController.createSong)
    app.get('/songs/:id',SongsController.getSong)
    app.put('/songs/:id', SongsController.putSong)
    app.get('/bookmarks', isAuthenticated, BookmarksController.index)
    app.get('/bookmark', isAuthenticated, BookmarksController.get)
    app.post('/bookmarks',  isAuthenticated, BookmarksController.addBookmark)
    app.delete('/bookmarks', isAuthenticated, BookmarksController.deleteBookmark)

    app.get('/recents', isAuthenticated, RecentsController.index)
    app.post('/recents', isAuthenticated,RecentsController.addRecent)
}