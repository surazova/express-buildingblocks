var express = require('express');
var app = express();


app.use(express.static('public'));
//mounting the router in the application 
var blocks = require('./routes/blocks');
app.use('/blocks', blocks); //all request are dispatched to this router 

var buildings = require('./routes/buildings');
var users = require('./routes/users');

app.use('/blocks', blocks);
app.use('/buildings', buildings);
app.use('/users', users);



app.listen(process.env.PORT, process.env.IP, 8080, function(){
    console.log("You are listening on port 8080");
    
});

app.listen(8080);