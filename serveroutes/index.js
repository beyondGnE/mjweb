var express = require('express');
var router = express.Router();
const request = require('request');
const config = require('../config/config');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   request({
//     url: config.testURL + 'api/pokemon',
//     method: 'GET',
//     json: {}
//   }, (err, response, body) => {
//     res.render('index', { 
//       title: `Pokemaster's Guide to Pokemon`,
//       pokedexgen1: body
//     });
//   });
// });

/* GET home page. */
router.get('/', (req, res, next) => { 
  res.render('index', { 
    title: `Eugene's Mansion`
  });
});

module.exports = router;
