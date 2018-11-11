//port
const port = 3001

//require middleware
const bodyParse = require('body-parser')

//framework
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParse = require('express-query-int')

//middleware
server.use(bodyParse.urlencoded({ extended: true }))
server.use(bodyParse.json())
server.use(allowCors)
server.use(queryParse())

server.listen(port, function(){
    console.log(`BACKEND running on port ${port}.`)
})

module.exports = server