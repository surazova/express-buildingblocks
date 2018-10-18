var express = require ('express');
var app = express();  //requiring the express library 

//app.get function creates a route that accepts GET requests 

app.get('/', function(request, response) {
    response.send('Hello World');
});


app.get('/blocks', function(request, response) {  //this will change the response to JSON format 
    var blocks = ['Fixed', 'Movable', 'Rotating']; //to run: curl -i http://localhost:8080/blocks 
    response.json(blocks);
});

app.get('/blocks', function(request, response) {
    var blocks = '<ul><li>Fixed</li><li>Movable</li></ul>';
    response.send(blocks);
});

app.get('/blocks', function(request, response) {
    response.redirect(301, '/parts');
});

app.listen(process.env.PORT, process.env.IP, 8080, function(){
    console.log("You are listening on port 8080");
    
});


//another method: 
// app.get('/', function(request, response) {
//     response.write('Hello World');
//     response.end();
// });

// app.listen(3000);

