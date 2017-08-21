// Adapted from Johnny-Five Piezo example for NodeBots session at JSConf CN

var five = require("johnny-five");
var opts = {};
opts.port = process.argv[2] || "";

var board = new five.Board({ port: '/dev/ttyUSB0' });

board.on("ready", function() {
    // Creates a piezo object and defines the pin to be used for the signal
    var piezo = new five.Piezo(8);

    // Plays a song
    piezo.play({
        // song is composed by an array of pairs of notes and beats
        // The first argument is the note (null means "no note")
        // The second argument is the length of time (beat) of the note (or non-note)


        song: [
            ["A", 500],
            [null, 50],
            ["A", 500],
            [null, 50],
            ["A", 500],
            [null, 50],
            ["F", 350],
            [null, 50],
            ["C5", 150],
            [null, 50],
            ["A", 500],
            [null, 50],
            ["F", 350],
            [null, 50],
            ["C5", 150],
            [null, 50],
            ["A", 650],
            [null, 50],
            [null, 500],
            ["E5", 500],
            [null, 50],
            ["E5", 500],
            [null, 50],
            ["E5", 500],
            [null, 50],
            ["F5", 350],
            [null, 50],
            ["C5", 150],
            [null, 50],
            ["G4", 500],
            [null, 50],
            ["F", 350],
            [null, 50],
            ["C5", 150],
            [null, 50],
            ["A", 650],
            [null, 50],
            [null, 500],

            ["A5", 500],
            [null, 50],
            ["A", 300],
            [null, 50],
            ["A", 150],
            [null, 50],
            ["A5", 500],
            [null, 50],
            ["G#5", 325],
            [null, 50],
            ["G5", 175],
            [null, 50],
            ["F#5", 125],
            [null, 50],
            ["F5", 125],
            [null, 50],
            ["F#5", 250],
            [null, 50],
            [null, 325],
            ["A4", 250],
            [null, 50],
            ["D#5", 500],
            [null, 50],
            ["D5", 325],
            [null, 50],
            ["C#5", 175],
            [null, 50],
            ["C5", 125],
            [null, 50],
            ["B", 125],
            [null, 50],
            ["C5", 250],
            [null, 50],
            [null, 350],

            ["F", 250],
            [null, 50],
            ["G4", 500],
            [null, 50],
            ["F", 350],
            [null, 50],
            ["A", 125],
            [null, 50],
            ["C5", 500],
            [null, 50],
            ["A", 375],
            [null, 50],
            ["C5", 125],
            [null, 50],
            ["E5", 650],
            [null, 50],
            [null, 500],

            ["A5", 500],
            [null, 50],
            ["A", 300],
            [null, 50],
            ["A", 150],
            [null, 50],
            ["A5", 500],
            [null, 50],
            ["G#5", 325],
            [null, 50],
            ["G5", 175],
            [null, 50],
            ["F#5", 125],
            [null, 50],
            ["F5", 125],
            [null, 50],
            ["F#5", 250],
            [null, 50],
            [null, 325],
            ["A4", 250],
            [null, 50],
            ["D#5", 500],
            [null, 50],
            ["D5", 325],
            [null, 50],
            ["C#5", 175],
            [null, 50],
            ["C5", 125],
            [null, 50],
            ["B", 125],
            [null, 50],
            ["C5", 250],
            [null, 50],
            [null, 350],

            ["F", 250],
            [null, 50],
            ["G4", 500],
            [null, 50],
            ["F", 375],
            [null, 50],
            ["C5", 125],
            [null, 50],
            ["A", 500],
            [null, 50],
            ["F", 375],
            [null, 50],
            ["C5", 125],
            [null, 50],
            ["A", 650],
            [null, 50],
            [null, 650]
        ],
        tempo: 100000


    });

    // Plays the same song with a string representation
    piezo.play({
        // song is composed by a string of notes
        // a default beat is set, and the default octave is used
        // any invalid note is read as "no note"
        song: "C D F D A - A A A A G G G G - - C D F D G - G G G G F F F F - -",
        beats: 1 / 4,
        tempo: 100
    });
});