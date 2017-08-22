let express = require('express');
//renvoie un objet express
let app = express(); // test express

app.use(express.static('public'));

app.listen(3000, function() {

    console.log('Example app listening on port 3000!');
});



const Robot = require('./robot');
let rob = new Robot();
rob.start();



app.get('/bot/forward', function() {
    rob.moveForward();

});

app.get('/bot/backward', function() {
    rob.moveBackward();
});

app.get('/bot/left', function() {
    rob.moveLeft();
});

app.get('/bot/right', function() {
    rob.moveRight();
});

app.get('/bot/stop', function() {
    rob.stop();
});

app.get('/bot/sensor', function() {
    rob.sensor();
});