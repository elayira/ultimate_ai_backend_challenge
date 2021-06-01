const { Router } = require('express')
const { reply } = require('../views/bot')

const router = Router()

router.post('/reply', reply)

module.exports = router
