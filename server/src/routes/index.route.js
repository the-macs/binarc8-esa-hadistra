const express = require('express')
const router = express.Router()

// FE
const apiAuthRoute = require('./api/auth.route')
const apiUserRoute = require('./api/user.route')
const apiRoomRoute = require('./api/room.route')

// API routes
router.use('/api', apiAuthRoute)
router.use('/api', apiUserRoute)
router.use('/api', apiRoomRoute)

module.exports = router