console.log("Starting ArduinoVis...");

// const Arduino   = require("./Arduino");
const Visualizer= require("./Visualizer");
const Streamer  = require("./Streamer");

// Arduino.init(function(){
//     console.log("Init successful!");
//     this.repl.inject({
//         led: $
//       });
// })

Streamer._init();

console.log("ArduinoVis started successful!");