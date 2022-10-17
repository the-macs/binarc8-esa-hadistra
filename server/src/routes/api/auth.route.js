const express = require('express')
const { json } = require('sequelize')
const router = express.Router()
// const passport = require('passport')

// const apiUserController = require('./../../controllers/api/user.controller')

router.get('/auth', (req, res) => {
    res.json({
        'nama': 'Esa',
        'email': 'admin@admin.com',
    })
})

// router.use(passport.authenticate('jwt',
//     {
//         failureRedirect: '/response-jwt',
//         failureMessage: true,
//         session: false,
//     }
// ))

// // API
// router.route('/users')
//     .get(apiUserController.index)
//     .post(apiUserController.store)
//     .put(apiUserController.update)
//     .delete(apiUserController.delete)

module.exports = router