const { DEFAULT_INTENT_NAME } = require("./constants")


/*
@param {Array} intents list
@return {Object} intent's name
*/
function findReliableIntent(intents) {
    let intent = intents.reduce(
        (acc, cur) => acc.confidence < cur.confidence? cur:acc,
        {
            confidence: process.env.THRESHHOOD_CONFIDENCE_LEVEL,
            name: DEFAULT_INTENT_NAME
        }
    )
    return {intentName: intent.name}
}

module.exports = {findReliableIntent}