require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')
const passport = require('passport')

const indexRoute = require('./src/routes/index.route')

require('./src/config/passport')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use(passport.initialize())

// app.get('/protected', passport.authenticate('jwt', { session: false }))

// Routee
app.use(indexRoute)

// Running Server
app.listen(process.env.PORT || port, () => {
  console.log(`Server Running. Listening on port http://localhost:${process.env.PORT}`)
})