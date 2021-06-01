const { getIntent } = require("../../bot/api")
const { getReply } = require("../../bot/model")


async function reply(req, res) {
    const { botId, message } = req.body

    if (!(botId && message)) {
        return res.status(400).json({message: "Missing Parameter(s)"})
    }
    try {
        const intentName = await getIntent(botId, message)
        const reply = await getReply(intentName)
        return res.status(200).json(reply)
    } catch (error) {
        console.log(error)
        return res.status(500).json({message: "Something Went Wrong"})
    }
}

module.exports = {
    reply
}
