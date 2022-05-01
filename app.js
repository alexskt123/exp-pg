
'use strict'

const express = require('express')
const user = require('./user')
const order = require('./order')
const app = express()
const port = 3000

app.use(user)
app.use(order)

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})