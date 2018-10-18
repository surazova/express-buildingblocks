var express = require('express');
var app = express();

var blocks = {
    'Fixed': 'Fastened securely in position', 
    'Movable': 'Capable of being moved',
    'Rotating': 'Moving in a circle around its center'
};

//Adding dynamic route 
app.get('/blocks/:name', function(request, response) {
    var description = blocks[request.params.name];
    if (!description) { //flips to boolean
        response.status(404).json('No description found for ' + request.params.name);
    } else { //adding a conditional if the webpage is not found, 404
    
    response.json(description);
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