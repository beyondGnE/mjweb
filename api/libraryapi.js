var express = require('express');
var apirouter = express.Router();
const db = require('../config/db');

String.prototype.firstUpperCase = function() {
  let str1 = this.charAt(0).toUpperCase();
  let str2 = this.slice(1);
  return str1 + str2;
}

/* GET home page. */
apirouter.get('/books', function(req, res, next) {
    db.collections['books'].find().toArray((err, results) => {
        res.status(200).json(results);
    });
});

/* GET pokemon by id */
apirouter.get('/:id', function(req, res, next) {
  
});

apirouter.get('/type/:type', function(req, res, next) {
  
});

// apirouter.post('/name/:name/type/:type', (req, res, next) => {
  
// });


module.exports = apirouter;
