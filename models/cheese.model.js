// model for Cheese
const { DataTypes, Model } = require('sequelize')
const db = require('../db/db')

class Cheese extends Model{ }

Cheese.init({ 
    name: {
        type: DataTypes.STRING,
        // primaryKey: true,
        // autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        // allowNull: false
    }
}, {
    sequelize: db  
})

module.exports = Cheese
