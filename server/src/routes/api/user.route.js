const express = require('express')
const router = express.Router()
const restricted = require('./../../utils/restricted')

const apiUserController = require('../../controllers/user')

// API
router.route('/users')
    .get(restricted, apiUserController.index)
    .post(apiUserController.store)
    .put(restricted, apiUserController.update)
    .delete(restricted, apiUserController.delete)

module.exports = router