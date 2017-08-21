var five = require("johnny-five");


var max_speed_l = 150;
var max_speed_r = 140;

// set up the input
var stdin = process.stdin;
stdin.setRawMode(true);

var board = new five.Board({ port: '/dev/ttyUSB0' });

var l_motor = r_motor = null;

board.on("ready", function(err) {

    let button = new five.Button({
        pin: "A7",
        controller: "TINKERKIT",
        invert: true
    });

    if (err) {
        console.log(err);
        return;
    }

    l_motor = new five.Motor({ pins: { pwm: 6, dir: 7 } });
    r_motor = new five.Motor({ pins: { pwm: 5, dir: 4 } });


    button.on("press", function() {
        l_motor.reverse(100);
        r_motor.forward(100);
        setTimeout(function() {
            l_motor.stop();
            r_motor.stop();
        }, 2000);
    })
    var sensor = new five.Sensor("A0");

    // Scale the sensor's data from 0-1023 to 0-10 and log changes
    sensor.on("change", function() {
        console.log(this.scaleTo(0, 10));
    });

});