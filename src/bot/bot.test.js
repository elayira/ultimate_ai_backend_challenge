const {findReliableIntent} = require("./util")
const {getIntents, getIntent} = require("./api")
const axios = require("./axios")
const intentsMockData = require("../__test__/fixtures/intents.json")

process.env.THRESHHOOD_CONFIDENCE_LEVEL = 0.3

test("Find Reliable Intent", async () => {
    expect(findReliableIntent(intentsMockData.intents)).toEqual({intentName: "Thank you"})
})

describe('Fetch Intent Data', () => {
    it('fetches successfully intents data from API', async () => {
        axios.post.mockResolvedValue({data: intentsMockData})
        await expect(getIntents("botId", "message")).resolves.toEqual(intentsMockData.intents)
    })

    it('Get Reliable Intent Name', async () => {
        axios.post.mockResolvedValue({data: intentsMockData})
        await expect(getIntent("botId", "message")).resolves.toBe("Thank you")
    })
})
