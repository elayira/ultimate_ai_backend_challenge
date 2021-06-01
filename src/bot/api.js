const axios = require("./axios")
const {findReliableIntent} = require("./util")


/*
Fetch intent list
@param {String} botId bot ID
@param {String} message visitor's message
@return {Array} Intents list
*/
async function getIntents(botId, message) {
    try {
        const { data } = await axios.post(
            '/intents', {botId, message}
        )
        return data.intents
    } catch (error) {
        console.log(error)
    }

}


/*
Find name of reliable intent
@param {String} botId bot ID
@param {String} message visitor's message
@return {String} intent name
*/
async function getIntent(botId, message) {
    const intents = await getIntents(botId, message)
    const {intentName} = await findReliableIntent(intents)
    return intentName
}

module.exports = {getIntent, getIntents}
