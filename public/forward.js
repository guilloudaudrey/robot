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