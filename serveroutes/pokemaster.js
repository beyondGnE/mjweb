var express = require('express');
var router = express.Router();
const request = require('request');
const config = require('../config/config');
const title = `Pokemaster's Guide to Pokemon`;

/* GET home page. */
router.get('/', function(req, res, next) {
  request({
    url: config.testURL + 'api/pokemon',
    method: 'GET',
    json: {}
  }, (err, response, body) => {
    res.render('pokemaster', { 
      title: title,
      pokedexgen1: body
    });
  });
});

router.get('/type/:type', (req, res, next) => {
    request({
        url: config.testURL + 'api/pokemon/type/' + req.params.type,
        method: 'GET',
        json: {}
    }, (err, response, body) => {
        res.render('pokemaster', {
            title: title,
            pokedexgen1: body
        });
    });
});

module.exports = router;
