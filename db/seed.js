const { Cheese, Board, User } = require('../models') /* will automatically look for index.js */
const db = require('./db')

// seeding is first population of the database
async function seed () {
    await db.sync({
        force: true
    })

    await Cheese.bulkCreate([
        {
            name: "Camembert",
            email: "camembert@normandy.fr"
        },
        {
            name: "Brie",
            email: "brie@normandy.fr"
        },
        {
            name: "Cheddar",
            email: "cheddar@gorge.co.uk"
        }
    ])

    await Board.bulkCreate([
        {
            type: "French",
            description: "Camembert and Brie from Normandy",
            rating: "5/5: Awesome!"
        },
        {
            type: "English",
            description: "Cheddar from the UK",
            rating: "4/4: Nice!"
        }
    ])

    await User.bulkCreate([
        {
            type: "Frenchperson",
            email: "monsieurdame@google.fr"
        },
        {
            type: "Englishperson",
            email: "gentladyperson@google.co.uk"
        }
    ])
}

seed()