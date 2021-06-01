require('dotenv').config()
const express = require('express')
const mongoose = require("mongoose")
const {bot} = require('./routes')


const app = express()
app.use(express.json())

mongoose.connect(
    `mongodb+srv://` +
    `${process.env.DB_ADM_NAME}:${process.env.DB_PASSWORD}` +
    `@${process.env.DB_CLUSTER_URL}/${process.env.DB_NAME}` +
    `?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    }
)

app.use('/api/v1/bot', bot)

module.exports = app
