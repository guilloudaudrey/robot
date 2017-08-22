let five = require("johnny-five");

class Robot {
    constructor() {
        this.modules = [];
    }

    addModule(module) {
        this.modules.push(module);
    }

    start() {
        const that = this;
        this.board = new five.Board({ port: '/dev/ttyUSB0' });
        this.board.on('ready', function() {
            that.leftMotor = new five.Motor({
                pins: { pwm: 6, dir: 7 }
            });

            that.rightMotor = new five.Motor({
                pins: { pwm: 5, dir: 4 }
            });
            for (let module of that.modules) {
                module.init(that);
            }
        });
    }

    moveForward() {

        this.leftMotor.reverse(100);
        this.rightMotor.forward(100);
    }

    moveBackward() {
        this.leftMotor.forward(100);
        this.rightMotor.reverse(100);
    }

    moveLeft() {
        this.leftMotor.forward(100);
        this.rightMotor.forward(100)
    }

    moveRight() {
        this.leftMotor.reverse(100);
        this.rightMotor.reverse(100);
    }

    stop() {
        this.leftMotor.stop();
        this.rightMotor.stop();

    }

    sensor() {
        this.board.on("ready", function() {

            // Create a new `reflectance` hardware instance.
            let eyes = new five.IR.Reflect.Array({
                emitter: 13,
                pins: ["A3", "A2"], // any number of pins
                freq: 100,
                autoCalibrate: true,
            });

            eyes.on('data', function() {
                console.log("Raw Values: ", this.raw);
            });

            eyes.on('line', function() {
                console.log("Line Position: ", this.line);
            });

            eyes.enable();
        });
    }
}


module.exports = Robot;