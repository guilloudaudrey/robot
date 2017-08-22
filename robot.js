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
}

module.exports = Robot;