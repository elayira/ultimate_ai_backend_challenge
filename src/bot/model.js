const mongoose = require("mongoose")
const {EMPTY_REPLY} = require("./constants")


const ReplySchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    reply: {
        _id: mongoose.Schema.Types.ObjectId,
        text: String
    }
})

Reply = mongoose.model("Reply", ReplySchema)


/*
Fetch bot chat reply
@param {String} intentName intent's name
@return {Object} bot reply
*/
async function getReply(intentName) {
    intentName = new RegExp("^" + intentName.toLowerCase(), "i") // useful for case-insenssitive find
    let data = await Reply.findOne({name: { $regex:  intentName}}).exec()
    return data ? data.reply : EMPTY_REPLY
}

module.exports = {getReply}
