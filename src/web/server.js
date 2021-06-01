const app = require('./app')

app.listen(process.env.DEV_PORT, () => {
    console.log(`Listening on port http://localhost:${process.env.DEV_PORT}`)
})
