const Board = require("./board.model")
const Cheese = require("./cheese.model")
const User = require("./user.model")

// Associate the User and Board models with a One-to-Many relationship
Board.belongsTo(User)
User.hasMany(Board)

// A cheese can be on many boards, and a board can have many cheeses
// A user has one board
// A cheese has one user

// A cheese belongs to a board
// A board belongs to a user

module.exports = { Board, Cheese, User }