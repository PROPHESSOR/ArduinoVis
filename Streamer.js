const cp = require("child_process");

const Visualizer = require("./Visualizer");

const Streamer = {
    _init: function() {
        //TODO: Write me...
        console.log("Streamer._init()");
        let pacat = cp.spawn("pacat", ["-r", "--channels=1", "--raw", "--format=u8", "--rate=44100", "-n", "Arduino", "-d", "alsa_output.pci-0000_00_1b.0.analog-stereo.monitor"]);
        pacat.stdout.on('data', Streamer.onData);
    },
    onData: data => {
        // console.dir(data);
        let volumes = [];
        for(let i = 0; i < data.length; i += 1) {
            volumes.push(data.readUInt8(i, false));
            // debugger;
        }
        Visualizer.visualize(volumes);
    }
}

module.exports = Streamer;