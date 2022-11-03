const { Cheese, Board, User } = require('../models') /* will automatically look for index.js */
const db = require('./db')

// seeding is first population of the database
async function seed () {
    await db.sync({
        force: true
    })

    await Cheese.bulkCreate([
        {
            type: "Camembert"
        },
        {
            type: "Brie"
        },
        {
            type: "Cheddar"
        }
    ])

    await Board.bulkCreate([
        {
            type: "French"
        },
        {
            type: "English"
        }
    ])

    await User.bulkCreate([
        {
            type: "Frenchperson"
        },
        {
            type: "Englishperson"
        }
    ])
}

seed()