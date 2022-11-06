const db = require('../db/db.js')
const { Cheese, User, Board } = require('../models')

describe("Tests", () => {
// Clear the database first
    beforeAll(async () => {
        await db.sync({
            force: true
        })
    })
    
// the following tests check that tables can be created and that one can insert data into them
test("Tests user title and description and their types", async () => {
    const testUser = await User.build({
        name: "Anthea",
        email: "anthea@meta.com"
    })
    expect(testUser.name).toEqual("Anthea")
    expect(typeof(testUser.name)).toEqual("string")
    expect(testUser.email).toEqual("anthea@meta.com")
    expect(typeof(testUser.email)).toEqual("string")
})
        
test("Tests cheese title and description and their types", async () => {
    const testCheese = await Cheese.build({
        title: "Double Gloucester",
        description: "Red colour and creamy taste"
    })
    expect(testCheese.title).toEqual("Double Gloucester")
    expect(typeof(testCheese.title)).toEqual("string")
    expect(testCheese.description).toEqual("Red colour and creamy taste")
    expect(typeof(testCheese.description)).toEqual("string")
})
        
test("Tests board title and description and their types", async () => {
    const testBoard = await Board.build({
        type: "French",
        description: "Some of the finest cheeses in the world",
        rating: 5
    })
    expect(testBoard.type).toEqual("French")
    expect(typeof(testBoard.type)).toEqual("string")
    expect(testBoard.description).toEqual("Some of the finest cheeses in the world")
    expect(typeof(testBoard.description)).toEqual("string")
    expect(testBoard.rating).toEqual(5)
    expect(typeof(testBoard.rating)).toEqual("number")
})

test("Test if we can add boards for the user", async () => {
    await Board.bulkCreate([
        {
            type: "French",
            description: "Camembert and Brie from Normandy",
            rating: 5
        },
        {
            type: "English",
            description: "Cheddar from the UK",
            rating: 4
        }
    ])
    const board = Board.findByPk(1, {include: User})
    test.istruthy
})

test("Test if we can add cheeses on boards", async () => {
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
    const board = Board.findByPk(1, {include: Cheese})
    test.istruthy    
})
// Test if we can add boards for the user

});
