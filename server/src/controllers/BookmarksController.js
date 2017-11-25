const { Bookmark } = require('../models')

module.exports = {
    index(req, res) {
        const {songId, userId} = req.query
        Bookmark.findOne({
            where: {
                SongId: songId,
                UserId: userId
            }
        }).then((bookmark)=>{
            res.send(bookmark)
        })
    },
    get(req,res) {
        const {songId, userId} = req.query
        console.log(songId, 'was song',userId)
        Bookmark.findOne({
            where: {
                SongId: songId,
                UserId: userId
            }
        }).then((bookmark) => {
            res.send(bookmark) 
        }).catch((err) =>{
            res.send({
                error: 'cant find bookmark'
            })
        })
    },
    addBookmark(req, res) {
        Bookmark.create(req.body)
                .then((bookmark)=> {
                    console.log('bookmark added', bookmark)
                    res.send(bookmark)
                })
                .catch((err)=>{
                    console.log('occured err')
                    res.status(400).send({
                        error:err
                    })
                })
    },
    deleteBookmark(req, res) {
        const {songId, userId} = req.query
        
        Bookmark.findOne({
            where: {
                SongId: songId,
                UserId: userId
            }
        }).then((bookmark) => {
            bookmark.destroy().then(() => {
                console.log('bookmark destroyed')
                res.send({
                    message: "bookmark destroyed"
                })
            })
        })
    }
}