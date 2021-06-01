const axios = require("axios")

module.exports = axios.create({
    baseURL: process.env.BOT_ROOT_ENDPOINT,
    headers: {
        "Authorization": process.env.API_KEY_AUTH,
        "Accept": "application/json"
    }
})
