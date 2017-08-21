var five = require("johnny-five"),
    board = new five.Board({ port: '/dev/ttyUSB0' });

board.on("ready", function() {

    var motor = new five.Motor({
        pins: {
            pwm: 3,
            dir: 12,
            brake: 9
        }
    });



    // Start the motor at maximum speed
    motor.forward(255);

});