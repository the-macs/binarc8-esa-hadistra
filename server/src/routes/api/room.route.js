const express = require('express')
const router = express.Router()
const restricted = require('./../../utils/restricted')

const apiRoomController = require('../../controllers/room')

// API
// router.route('/rooms')
//     .get(restricted, apiUserController.index)
//     .post(apiUserController.store)
//     .put(restricted, apiUserController.update)
//     .delete(restricted, apiUserController.delete)



router.get('/rooms', restricted, apiRoomController.index)

module.exports = router