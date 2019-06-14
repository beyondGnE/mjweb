var express = require('express');
var router = express.Router();
const request = require('request');
const testURL = 'http://localhost:3000/';

/* GET home page. */
router.get('/', function(req, res, next) {
  request({
    url: testURL + 'api/pokemon',
    method: 'GET',
    json: {}
  }, (err, response, body) => {
    res.render('index', { 
      title: `Pokemaster's Guide to Pokemon`,
      pokedexgen1: body
    });
  });
});

module.exports = router;
