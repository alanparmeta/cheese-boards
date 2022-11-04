const db = require('../db/db.js')
const { Cheese } = require('../models')

describe("Cheese tests", () => {
    beforeAll(async () => {
        await db.sync({
            force: true
        })
    })
    
        // check that your tables are created
        // check that you can insert data into them
        
    test("Tests cheese title and description", async () => {
        const testCheese = await Cheese.build({
            title: "Double Gloucester",
            description: "Red colour and creamy taste"
        })
        expect(testCheese.title).toEqual("Double Gloucester")
        expect(testCheese.description).toEqual("Red colour and creamy taste")
    })
});