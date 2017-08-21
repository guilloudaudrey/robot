let express = require('express');
//renvoie un objet express
let app = express(); // test express

app.use(express.static('public'));

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});

app.get('/bot/forward', function() {
    let five = require("johnny-five");


    let max_speed_l = 150;
    let max_speed_r = 140;

    // set up the input
    let stdin = process.stdin;

    stdin.setRawMode(true);

    let board = new five.Board({ port: '/dev/ttyUSB0' });

    let l_motor = r_motor = null;

    board.on("ready", function(err) {

        if (err) {
            console.log(err);
            return;
        }

        l_motor = new five.Motor({ pins: { pwm: 6, dir: 7 } });
        r_motor = new five.Motor({ pins: { pwm: 5, dir: 4 } });


        l_motor.reverse(100);
        r_motor.forward(100);

    })

});

app.get('/bot/backward', function() {
    let five = require("johnny-five");


    let max_speed_l = 150;
    let max_speed_r = 140;

    // set up the input
    let stdin = process.stdin;
    stdin.setRawMode(true);

    let board = new five.Board({ port: '/dev/ttyUSB0' });

    let l_motor = r_motor = null;

    board.on("ready", function(err) {

        if (err) {
            console.log(err);
            return;
        }

        l_motor = new five.Motor({ pins: { pwm: 6, dir: 7 } });
        r_motor = new five.Motor({ pins: { pwm: 5, dir: 4 } });


        l_motor.forward(100);
        r_motor.reverse(100);

    })
});

app.get('/bot/left', function() {
    let five = require("johnny-five");


    let max_speed_l = 150;
    let max_speed_r = 140;

    // set up the input
    let stdin = process.stdin;
    stdin.setRawMode(true);

    let board = new five.Board({ port: '/dev/ttyUSB0' });

    let l_motor = r_motor = null;

    board.on("ready", function(err) {

        if (err) {
            console.log(err);
            return;
        }

        l_motor = new five.Motor({ pins: { pwm: 6, dir: 7 } });
        r_motor = new five.Motor({ pins: { pwm: 5, dir: 4 } });


        l_motor.forward(100);
        r_motor.forward(100);

    })
});

app.get('/bot/right', function() {
    let five = require("johnny-five");


    let max_speed_l = 150;
    let max_speed_r = 140;

    // set up the input
    let stdin = process.stdin;
    stdin.setRawMode(true);

    let board = new five.Board({ port: '/dev/ttyUSB0' });

    let l_motor = r_motor = null;

    board.on("ready", function(err) {

        if (err) {
            console.log(err);
            return;
        }

        l_motor = new five.Motor({ pins: { pwm: 6, dir: 7 } });
        r_motor = new five.Motor({ pins: { pwm: 5, dir: 4 } });


        l_motor.reverse(100);
        r_motor.reverse(100);

    })
});

app.get('/bot/stop', function() {
    let five = require("johnny-five");


    let max_speed_l = 150;
    let max_speed_r = 140;

    // set up the input
    let stdin = process.stdin;
    stdin.setRawMode(true);

    let board = new five.Board({ port: '/dev/ttyUSB0' });

    let l_motor = r_motor = null;

    board.on("ready", function(err) {

        if (err) {
            console.log(err);
            return;
        }

        l_motor = new five.Motor({ pins: { pwm: 6, dir: 7 } });
        r_motor = new five.Motor({ pins: { pwm: 5, dir: 4 } });


        l_motor.stop();
        r_motor.stop();

    })
});