const express = require('express')
const router = express.Router()
const restricted = require('./../../utils/restricted')

const apiAuthController = require('../../controllers/auth')

// API
router.post('/auth', apiAuthController.auth)

// router.use(passport.authenticate('jwt',
//     {
//         failureRedirect: '/response-jwt',
//         failureMessage: true,
//         session: false,
//     }
// ))

module.exports = router