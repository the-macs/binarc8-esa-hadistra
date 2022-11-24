const bcrypt = require('bcrypt')

const db = require('../config/database')
const Users = require('../models/user')

const { responseSuccess, responseError } = require('../utils/responseFormatter')

module.exports = {
    index: async (req, res) => {
        if (Object.keys(req.body) == 0) {
            try {
                const users = await Users.findAll()

                res.status(200).json(responseSuccess(200, users))
            } catch (err) {
                res.status(500).json(responseError(500, err.message || "Error occured while getting users"))
            }
        } else {
            try {
                const { id } = req.body

                const user = await Users.findOne({ where: { id } })

                if (!user) {
                    res.status(404).json(responseError(400, "User not found"))
                } else {
                    res.status(200).json(responseSuccess(200, user))
                }
            } catch (err) {
                res.status(400).json(400, "User not found")
                res.status(500).json(responseError(500, err.message || "Error occured while getting users"))
            }
        }
    },
    store: async (req, res) => {
        if (!req.body) res.status(400).json(responseError(400, "Missing Body"))

        const { name, email, password, passwordConfirmation } = req.body

        const userRegistered = await Users.findOne({ where: { email } })

        if (userRegistered) {
            res.status(400).json(responseError(400, "Email already registered"))
        } else {
            if (password !== passwordConfirmation) {
                res.status(400).json(responseError(400, "Password is doesn't match"))
            } else {
                const salt = await bcrypt.genSalt(10)
                const hashedPassword = await bcrypt.hash(password, salt)

                try {
                    const result = await db.transaction(async (transaction) => {
                        const user = await Users.create({
                            name,
                            email,
                            password: hashedPassword
                        }, { transaction })

                        return user;
                    })

                    res.status(200).json(responseSuccess(200, result))
                } catch (err) {
                    res.status(500).send(responseError(500, err.message || "Error occured while creating user"))
                }
            }
        }
    },
    update: async (req, res) => {
        const { id, name, password, passwordConfirmation } = req.body

        try {
            const user = await Users.findOne({ where: { id } })

            let hashedPassword = user.password

            if (password != '') {
                const salt = await bcrypt.genSalt(10)
                hashedPassword = await bcrypt.hash(password, salt)
            }

            if (password !== passwordConfirmation) {
                res.status(400).json(responseError(400, "Password doesn't match Confirmation"))
            } else {
                try {
                    const result = await db.transaction(async (transaction) => {
                        const updateUser = await Users.update({
                            name,
                            password: hashedPassword
                        }, {
                            where: { id },
                            returning: true,
                            plain: true,
                            transaction
                        })

                        return updateUser
                    })

                    result.shift()

                    res.status(200).json(responseSuccess(200, result))
                } catch (err) {
                    console.error(err)
                    res.status(500).json(responseError(500, "Error occured while updating user"))
                }
            }
        } catch {
            res.status(400).json(responseError(400, "User doesn't exist"))
        }
    },
    delete: async (req, res) => {
        const { id } = req.body

        const user = await Users.findOne({ where: { id } })

        if (user) {
            try {
                await db.transaction(async () => {
                    await Users.destroy({ where: { id } })
                })

                res.status(200).json(responseSuccess(200, { id }))
            } catch (err) {
                res.status(500).json(responseError(500, err || "Error occured while deleting user"))
            }
        } else {
            res.status(404).json(responseError(404, 'User not found'))
        }
    }
}