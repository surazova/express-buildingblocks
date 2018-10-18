var express = require('express');
var app = express();

//require body parser module 

var bodyParser = requrie('body-parser');
var app = express();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false}); //forces to use query string

var blocks = {...};

//first handler
app.post('/blocks', parserUrlencoded, function(request, response){
    var newBlock = request.body;
    //each element in the form becomes a property of this onject 
    blocks[newBlock.name] = newBlock.description; //adds new blocks 
    
    response.status(201).json(newBlock.name);
    
});


var blocks = {
    'Fixed': 'Fastened securely in position', 
    'Movable': 'Capable of being moved',
    'Rotating': 'Moving in a circle around its center'
};

//Adding dynamic route 
app.get('/blocks/:name', function(request, response) {
    //var description = blocks[request.params.name]; //reading the request parameter and looking up the object's properties 
    var name = request.params.name;
    var block = name [0].toUpperCase() + name.slice(1).toLowerCase();
    var description = blocks[block]; //block name is now in the same format as the properties in the blocks object
    } else { 
    response.json(description);
}); 


//another dynamic route 

app.get)'/locations/:name', function(request, response) {
    var name = request.params.name; 
    var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
    
});

//to avoid duplication, you pass params 

app.param('name', function(request, response, next) {
    var name = request.params.name;
    var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
    
    requset.blockName = block; 
    
    next();
});


//using static middleware 
app.use(express.static('public'));   //to run: curl -i http://localhost:8080/blocks/Fixed

app.get('/blocks', function(request, response) {  
    var blocks = ['Fixed', 'Movable', 'Rotating']; 
    if(request.query.limit >= 0) {
        response.json(blocks.slice(0, request.query.limit));  //0, where the extraction begins and slice it all the way up, not including the number assigned to limit 
        
    } else {
    response.json(blocks);  // use curl http://localhost:8080/blocks?limit=1
    }
});


app.listen(process.env.PORT, process.env.IP, 8080, function(){
    console.log("You are listening on port 8080");
    
});

app.listen(8080);