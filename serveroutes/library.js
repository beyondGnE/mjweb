var express = require('express');
var router = express.Router();
const request = require('request');
const config = require('../config/config');

/* GET home page. */
router.get('/', function(req, res, next) {
  request({
    url: config.testURL + 'api/library/books',
    method: 'GET',
    json: {}
  }, (err, response, body) => {
    res.render('library', { 
      title: `The Library of Forgoing`,
      books: body
    });
  });
});

module.exports = router;
