const request = require("supertest")
const app = require("./app")
const axios = require("../bot/axios")
const intentsMockData = require("../__test__/fixtures/intents.json")

process.env.THRESHHOOD_CONFIDENCE_LEVEL = 0.3

describe("POST /reply", () => {
    it("Request should be successful", (done) => {
        axios.post.mockResolvedValue({data: intentsMockData})
        request(app)
            .post("/api/v1/bot/reply")
            .send({
        'botId': 1,
        'message': 'hello'
            })
            .expect(200)
            .end(function (err, res) {
                if (err) throw err
                done()
            })
    })

    it("Request should fail", (done) => {
        axios.post.mockResolvedValue({data: intentsMockData})
        request(app)
            .post("/api/v1/bot/reply")
            .send({})
            .expect(400)
            .end(function (err, res) {
                if (err) throw err
                done()
            })
    })
})