var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')
var app = express()

app.use(bodyParser())

port = 4004

// Add headers
app.use(function (req, res, next) {
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

app.get('/', function (req, res) {
  console.log('GET /')
  var html =
    '<html><body><form method="post" action="#">Name: <input type="text" name="name" /><input type="submit" value="Submit" /></form></body>'
  // var html = fs.readFileSync('index.html')
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(html)
})

app.post('/', function (req, res) {
  console.log('POST /')
  console.dir(req.body)
  var json = fs.readFileSync('stub.json')
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end(json)
})

app.listen(process.env.PORT || port)
console.log('Listening at' + (process.env.PORT || port))
