// model for Cheese
const { DataTypes, Model } = require('sequelize')
const db = require('../db/db')

class Cheese extends Model{ }

Cheese.init({ 
    name: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    }
}, {
    sequelize: db  
})

module.exports = Cheese
