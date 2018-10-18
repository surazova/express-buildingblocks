var express = require('express');
var app = express();


// //not using middleware
// app.get('/', function(request, response) {
//     response.sendFile(__dirname + '/public/index.html');
// });

//using static middleware 
app.use(express.static('public'));

app.get('/blocks', function(request, response) {  
    var blocks = ['Fixed', 'Movable', 'Rotating']; 
    response.json(blocks);
});


app.listen(process.env.PORT, process.env.IP, 8080, function(){
    console.log("You are listening on port 8080");
    
});

app.listen(8080);