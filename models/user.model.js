// model for User
const { DataTypes, Model } = require('sequelize')
const db = require('../db/db')

class User extends Model{ }

User.init({ 
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

module.exports = User
