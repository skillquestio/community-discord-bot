// loads environment variables from .env file
require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const { json } = require('body-parser')
const APIRouter = require('./api')
const { sendRequest } = require('./middleware')

// declare constants
const PORT = parseInt(process.env.PORT) || 25257

// init express
let app = express()

// middleware stack
app.use(json({ limit: '20mb' }))
app.use('/api', APIRouter, sendRequest)

// error handling stack
app.use(methodOverride())

// start web server
app.listen(PORT, () => {
  console.log(`app listening at port: ${PORT}`)
})

// start discord bot
try {
  require('./services/discord')
} catch (err) {
  throw err
}
