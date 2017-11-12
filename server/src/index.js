const express = require('express')
const PORT = 3335

const app = express()

app.use((req, res) => {
  console.log('bleh>>>>>>>>>>>>>>')
  res.send('w0000_______00tttttt')
})


exports.app = app
exports.PORT = PORT
