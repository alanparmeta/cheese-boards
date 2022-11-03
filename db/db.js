const { Sequelize } = require('sequelize')
const path = require('path')

// make new instance of Sequelize class with some options
const db = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'cheeseBoards.sqlite'),
  logging: false
})

module.exports = db