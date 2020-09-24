var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello', regionName: process.env.REGION_NAME, regionId: process.env.REGION_ID});
});

module.exports = router;
