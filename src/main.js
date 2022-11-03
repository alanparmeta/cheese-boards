const { Cheese, Board, User } = require('../models')

async function main() {
    let cheese = await Cheese.findAll()
    let board = await Board.findAll()
    let user = await User.findAll()
}

main()