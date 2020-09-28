var express = require('express')
      var app = express()
      app.get('/', function (req, res) {
        res.send('Hello World from ' + process.env.REGION_NAME)
      })
      app.listen(process.env.PORT, function () {
        console.log('Hello world app listening on port 3000!')
      })