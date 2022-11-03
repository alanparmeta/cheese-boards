// model for Board
const { DataTypes, Model } = require('sequelize')
const db = require('../db/db')

class Board extends Model{ }

Board.init({ 
    type: {
        type: DataTypes.STRING,
        // primaryKey: true,
        // autoIncrement: true
    },
    description: {
        type: DataTypes.STRING,
        // allowNull: false
    },
    rating: {
        type: DataTypes.INTEGER,
        // primaryKey: true,
        // autoIncrement: true
    }
}, {
    sequelize: db  
})

module.exports = Board
