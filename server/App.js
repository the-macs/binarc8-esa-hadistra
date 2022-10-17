require('dotenv').config()

const express = require('express')
const app = express()

const indexRoute = require('./src/routes/index.route')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use(passport.initialize())

// Routee
app.use(indexRoute)

// Running Server
app.listen(process.env.PORT || port, () => {
    console.log(`Server Running. Listening on port http://localhost:${process.env.PORT}`)
})