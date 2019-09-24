var express = require('express');
var apirouter = express.Router();
const db = require('../config/db');

String.prototype.firstUpperCase = function() {
  let str1 = this.charAt(0).toUpperCase();
  let str2 = this.slice(1);
  return str1 + str2;
}

/* GET home page. */
apirouter.get('/', function(req, res, next) {

  db.collections['pokedexgen1'].find().toArray((err, results) => {
    res.status(200).json(results.map(pokemon => { return { id: pokemon['ID'], name: pokemon['Name'], type1: pokemon['Type 1'], type2: pokemon['Type 2'] }; }));
  });
});

/* GET pokemon by id */
apirouter.get('/:id', function(req, res, next) {
  if (!req.params.id) {
    return next(new Error('No pokemon found!'));
  }
  db.collections['pokedexgen1'].findOne({ ID: req.params.id }, (err, results) => res.status(200).json(results));
});

apirouter.get('/type/:type', function(req, res, next) {
  let paramType = req.params.type.firstUpperCase();
  db.collections['pokedexgen1'].find({
    $or: [
      {'Type 1': paramType}, 
      {'Type 2': paramType}
    ]
  }).toArray((err, results) => {
    res.status(200).json(results.map(pokemon => {
      return {
        id: pokemon['ID'],
        name: pokemon['Name'],
        type1: pokemon['Type 1'],
        type2: pokemon['Type 2']
      };
    }));
  });
});

// apirouter.post('/name/:name/type/:type', (req, res, next) => {
  
// });


module.exports = apirouter;
