var express = require('express');
var router = express.Router();  //returns a router instance that can be mounted as middleware 
var bodyParser = require('body-parser');
var parseUrlencoed = bodyParser.urlencoded({ extended: false});

var blocks = {
    'Fixed': 'Fastened securely in position', 
    'Movable': 'Capable of being moved',
    'Rotating': 'Moving in a circle around its center'
};

module.exports = router; 