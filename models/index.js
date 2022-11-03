const Board = require("./board.model")
const Cheese = require("./cheese.model")
const User = require("./user.model")

// A cheese has one board, but a board has many cheeses
// A user has one board
// A cheese has one user

// A cheese belongs to a board
// A board belongs to a user

module.exports = { Board, Cheese, User }