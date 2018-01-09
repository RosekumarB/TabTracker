const { Recent } = require('../models')
const { Song } = require('../models')
const _ = require('lodash')
module.exports = {
    index(req, res) {
        const userId = req.user.id
        Recent.findAll({
            where: {
                UserId: userId
            },
            include: [
                {
                    model: Song
                }
            ]
        }).then((Recents)=> {
    
            //lodash based provessingn here
            res.send(_.uniqBy(Recents, recent => recent.Song.id))
        }).catch((e) =>{
            res.status(500).send({
                error: 'error fetching the index Recents'
            })
        })


    },
    addRecent(req, res) {
        const recent = {
            "SongId": req.body.SongId,
            "UserId": req.user.id
        }
        Recent.create(recent)
                .then((Recent)=> {
                    console.log('Recent added', Recent)
                    res.send(Recent)
                })
                .catch((err)=>{
                    console.log('occured err')
                    res.status(400).send({
                        error:err
                    })
                })
    },
}