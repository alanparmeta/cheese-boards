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
        
test("Tests user title and description", async () => {
    const testUser = await User.build({
        name: "Anthea",
        email: "anthea@meta.com"
    })
    expect(testUser.name).toEqual("Anthea")
    expect(testUser.email).toEqual("anthea@meta.com")
})
        
test("Tests cheese title and description", async () => {
    const testCheese = await Cheese.build({
        title: "Double Gloucester",
        description: "Red colour and creamy taste"
    })
    expect(testCheese.title).toEqual("Double Gloucester")
    expect(testCheese.description).toEqual("Red colour and creamy taste")
})
        
test("Tests board title and description", async () => {
    const testBoard = await Board.build({
        type: "French",
        description: "Some of the finest cheeses in the world",
        rating: 5
    })
    expect(testBoard.type).toEqual("French")
    expect(testBoard.description).toEqual("Some of the finest cheeses in the world")
    expect(testBoard.rating).toEqual(5)
})

});
