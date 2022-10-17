const express = require('express')
const router = express.Router()

// FE
const apiAuthRoute = require('./api/auth.route')

// API routes
router.use('/api', apiAuthRoute)

module.exports = router