const Promise = require('bluebird')


module.exports = (sequelize, DataTypes) => {
    const Song = sequelize.define('Song', {
        title: DataTypes.STRING,
        artist: DataTypes.STRING,
        album: DataTypes.STRING,
        genre: DataTypes.STRING,
        albumImageUrl: DataTypes.STRING,
        youtubeId: DataTypes.STRING,
        lyrics: DataTypes.STRING,
        tab: DataTypes.STRING,
        
    })
    return Song
}