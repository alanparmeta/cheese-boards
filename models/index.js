const { Sequelize } = require("sequelize")
const Board = require("./board.model")
const Cheese = require("./cheese.model")
const User = require("./user.model")
// const conn = new Sequelize()

// Associate the User and Board models with a One-to-Many relationship
// "To create a One-To-Many relationship, the hasMany and belongsTo associations are used together"
Board.belongsTo(User)
User.hasMany(Board)
// Associate the Board and Cheese models with a Many-to-Many relationship
//  "To create a Many-To-Many relationship, two belongsToMany calls are used together."
Board.belongsToMany(Cheese, {through: 'Board_Cheese'})
Cheese.belongsToMany(Board, {through: 'Board_Cheese'})

module.exports = { Board, Cheese, User }