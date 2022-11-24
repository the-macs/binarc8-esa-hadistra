const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const db = require('../config/database')
const Users = require('../models/user')

const { responseSuccess, responseError } = require('../utils/responseFormatter')

// const { generateToken } = require('../../utils/jtwToken.utils')

module.exports = {
    auth: async (req, res) => {
        const { email, password } = req.body

        try {
            const user = await Users.findOne({
                where: { email }
            })

            console.log(user)

            if (!user) {
                return res.status(401).json(responseError(401, 'User not found'))
            }

            const match = await bcrypt.compare(password, user.password)
            if (match) {
                // const token = await generateToken(user)
                const payload = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    amount_balance: user.amount_balance,
                }

                const token = jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    {
                        expiresIn: '1h'
                    }
                )

                res.status(200).json(responseSuccess(200, { token: `Bearer ${token}` }))
            }
        } catch (err) {
            console.log(err)
            res.status(400).json(responseError(400, 'Username or Password is wrong'))
        }
    }
}