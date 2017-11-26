const Promise = require('bluebird')


module.exports = (sequelize, DataTypes) => {
    const Recent = sequelize.define('Recent', {})
    Recent.associate = function(models) {
        Recent.belongsTo(models.Song)
        Recent.belongsTo(models.User)
 
    }
    return Recent
}