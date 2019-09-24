const db = {};
db.collections = [];
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://localhost:27017/mansiondb", { useNewURLParser: true }, function(err, database) {
  db.collections['pokedexgen1'] = database.db('mansiondb').collection('pokedexgen1');
  db.collections['books'] = database.db('mansiondb').collection('books');
  // console.log(db.collection.find().toArray((err, results) => console.log(results)));
});

module.exports = db;