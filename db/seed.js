// seed mainstay cheeses
// seasonal cheeses will be added on an ad hoc basis 

const { Cheese, Board, User } = require('../models') /* will automatically look for index.js */
const db = require('./db')

// seeding is first population of the database
async function seed () {
    await db.sync({
        force: true
    })

    await Cheese.bulkCreate([
        {
            title: "Camembert",
            description: "White rind and strong flavour"
        },
        {
            title: "Brie",
            description: "White rind and mild flavour"
        },
        {
            title: "Cheddar",
            description: "Yellow block with mild or mature variants"
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
            rating: "4/5: Nice!"
        }
    ])

    await User.bulkCreate([
        {
            name: "Frenchperson",
            email: "monsieurdame@google.fr"
        },
        {
            name: "Englishperson",
            email: "gentladyperson@google.co.uk"
        }
    ])
}

seed()
