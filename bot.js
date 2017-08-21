let express = require('express');
//renvoie un objet express
let app = express();

app.use(express.static('public'));

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});

app.get('/bot/forward', function(req, res) {
    res.sendFile(__dirname + '/public/forward.js');
});

app.get('/bot/backward', function(req, res) {
    res.sendFile(__dirname + '/public/backward.js');
});

app.get('/bot/left', function(req, res) {
    res.sendFile(__dirname + '/public/left.js');
});

app.get('/bot/right', function(req, res) {
    res.sendFile(__dirname + '/public/right.js');
});

app.get('/bot/stop', function(req, res) {
    res.sendFile(__dirname + '/public/stop.js');
});