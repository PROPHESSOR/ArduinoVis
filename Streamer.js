const cp = require("child_process");

const Streamer = {
    _init: function() {
        //TODO: Write me...
        let pacat = cp.spawn("pacat", ["-r", "--channels=1", "--raw", "--format=s16le", "--rate=44100", "-n", "Arduino"]);
        pacat.stdout.on('data', Streamer.onData);
    },
    onData:data=>0
}

module.exports = Streamer;