var express = require('express')
      var app = express()
      var os = require('os');
      app.get('/', function (req, res) {
        res.send('Hello World from ' + process.env.REGION_NAME())
      })
      app.listen(process.env.PORT, function () {
        console.log('Hello world app listening')
      })