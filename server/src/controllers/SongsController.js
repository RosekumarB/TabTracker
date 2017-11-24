const {Song} = require('../models')

module.exports = {
    index(req, res) {
        console.log('requetsed for all songs')
        Song.findAll()
            .then((songs)=>{
                res.send(songs)
            }) 
            .catch((err)=> {
                res.status(400).send({
                    error: err,
                    myerror: 'songs not found'
                })
            })
    },
    createSong(req, res) {
       Song.create(req.body)
            .then((song)=> {
                res.send(song.toJSON());
            })
            .catch((err) => {
                console.log('error occured',);
                res.status(400).send({
                    error:'already in use mate'
                })
            })

    },
    getSong(req, res) {
        console.log(req.params.id)
        Song.findById(req.params.id)
            .then((song) => {
                res.send(song)
            })
            .catch((e) => {
                res.status(500).send({
                    error: e
                })
            })
    }
}