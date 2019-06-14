var express = require('express');
var apirouter = express.Router();
const db = require('../config/db');

String.prototype.firstUpperCase = function() {
  let str1 = this.charAt(0).toUpperCase();
  let str2 = this.slice(1);
  return str1 + str2;
}

// let db = {};

// const MongoClient = require('mongodb').MongoClient;
// MongoClient.connect("mongodb://localhost:27017/pokemaster", { useNewURLParser: true }, function(err, database) {
//   db.collection = database.db('pokemaster').collection('pokedexgen1');
//   // console.log(db.collection.find().toArray((err, results) => console.log(results)));
// });
// console.log('this is ' + db.collection);
/* GET home page. */
apirouter.get('/', function(req, res, next) {
  // req.db.collection.find(function(err, doc) {
  //   res.status(200).json({
  //     id: doc.ID,
  //     name: doc.Name,
  //     type1: doc.Type1,
  //     type2: doc.Type2
  //   });
  // });
  // console.log(req.db.collection.find().toArray((err, results) => console.log(results)));
  let pokeList = [];
  db.collection.find().toArray((err, results) => {
    results.forEach(pokemon => {
      const pokeItem = {
        id: pokemon['ID'],
        name: pokemon['Name'],
        type1: pokemon['Type 1'],
        type2: pokemon['Type 2']
      };
      // console.log(pokeItem);
      pokeList.push(pokeItem);
      // console.log(pokeList);
    });
    // console.log(pokeList);
    res.status(200).json(pokeList);
  });
  /* IMPORTANT - Don't put json outside of the callback! */
  // console.log(list);
  // req.db.collection.find().toArray((err, results) => res.status(200).json(results));
});

/* Side note - IT WORKED! Attaching db to req as demonstrated in the book felt shady,
but it actually worked! Yay!
*/

apirouter.get('/:id', function(req, res, next) {
  if (!req.params.id) {
    return next(new Error('No pokemon found!'));
  }

  db.collection.findOne({ ID: req.params.id }, (err, results) => res.status(200).json(results));
});

apirouter.get('/type/:type', function(req, res, next) {
  // console.log(req.params.type.charAt(0).toUpperCase());
  let paramType = req.params.type.firstUpperCase();
  console.log(paramType);
  let pokeList = [];
  db.collection.find({
    $or: [
      {'Type 1': paramType}, 
      {'Type 2': paramType}
    ]
  }).toArray((err, results) => {
    results.forEach(pokemon => {
      const pokeItem = {
        id: pokemon['ID'],
        name: pokemon['Name'],
        type1: pokemon['Type 1'],
        type2: pokemon['Type 2']
      };
      // console.log(pokeItem);
      pokeList.push(pokeItem);
      // console.log(pokeList);
    });
    // console.log(pokeList);
    res.status(200).json(pokeList);
  });
});

apirouter.post('/name/:name/type/:type', (req, res, next) => {
  
});


module.exports = apirouter;
