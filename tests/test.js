const db = require('../db/db.js')
const { Cheese } = require('../models')
const { User } = require('../models')
const { Board } = require('../models')

describe("Cheese tests", () => {
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
    expect(typeof(testBoard.type)).toEqual("string")
    expect(testBoard.rating).toEqual(5)
    expect(typeof(testBoard.type)).toEqual("number")
})

});
