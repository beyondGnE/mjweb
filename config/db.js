const db = {};
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/pokemaster", { useNewURLParser: true }, function(err, database) {
  db.collection = database.db('pokemaster').collection('pokedexgen1');
  // console.log(db.collection.find().toArray((err, results) => console.log(results)));
});

module.exports = db;