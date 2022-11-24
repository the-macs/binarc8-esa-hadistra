const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const db = require('../config/database')
const Rooms = require('../models/room')

const { responseSuccess, responseError } = require('../utils/responseFormatter')

// const { generateToken } = require('../../utils/jtwToken.utils')

module.exports = {
    index: async (req, res) => {
        try {
            const room = await Rooms.findAll()

            if (!room) {
                return res.status(401).json(responseError(401, 'Room not found'))
            }

            res.status(200).json(responseSuccess(200, room))
        } catch (err) {
            console.log(err)
            res.status(400).json(responseError(400, 'Username or Password is wrong'))
        }
    }
}