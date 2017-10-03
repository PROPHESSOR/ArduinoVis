const cp = require("child_process");

const Visualizer = require("./Visualizer");

const Streamer = {
    _init: function() {
        //TODO: Write me...
        console.log("Streamer._init()");
        let pacat = cp.spawn("pacat", ["-r", "--channels=1", "--raw", "--format=s16le", "--rate=44100", "-n", "Arduino"]);
        pacat.stdout.on('data', Streamer.onData);
    },
    onData: data => {
        // console.dir(data);
        let volumes = [];
        for(let i = 0; i < data.length; i += 2) {
            volumes.push(data.readInt16LE(i, false));
            // debugger;
        }
        Visualizer.visualize(volumes);
    }
}

module.exports = Streamer;