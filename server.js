var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')
var app = express()
var generateVacancies = require('./vacancies')

app.use(bodyParser())

port = 4004

// Add headers
app.use(function(req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*')

  // Request methods you wish to allow
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, PATCH, DELETE'
  )

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true)

  // Pass to next layer of middleware
  next()
})

var preparedStub = generateVacancies.generateVacancies(0, 100)

var doThis = function(req, res) {
  var queryIndex = req.query.queryIndex ? parseInt(req.query.queryIndex, 10) : 0
  var queryLength = req.query.queryLength
    ? parseInt(req.query.queryLength, 10)
    : 9
  var vacancies = preparedStub.slice(queryIndex, queryLength)
  res.end(JSON.stringify(vacancies, null, 2))
}

app.get('/', doThis)
app.post('/', doThis)

app.listen(process.env.PORT || port)
console.log('Listening at' + (process.env.PORT || port))
