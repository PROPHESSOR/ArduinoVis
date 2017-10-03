const NanoTimer = require("nanotimer");
const nano = new NanoTimer;

const Arduino = require("./Arduino");
function convertRange(value, oldRange, newRange) {
    return ((value - oldRange.min) * (newRange.max - newRange.min)) / (oldRange.max - oldRange.min) + newRange.min;
}

const Visualizer = {
    _i: 0,
    visualize: function (vols) {
        debugger;
        if (!Arduino.isReady) return "her";
        this._i = 0;
        var val = vols.reduce((a, b) => a+b) / vols.length;
        console.log(Visualizer.normalize(val));
        Arduino.visualize(Visualizer.normalize(val));
        //this.timer(vols);
    },
    timer: function (vols) {
        if (Visualizer._i >= vols.length) return;
        debugger;
        console.log(Visualizer.normalize(vols[Visualizer._i]));
        Arduino.visualize(Visualizer.normalize(vols[Visualizer._i]));
        Visualizer._i++
            nano.setTimeout(arguments.callee, [vols], "23u")
    },

    normalize: x => 0|(Math.min(255, Math.max(0, convertRange(x, {min: 96, max: 160}, {min:0, max: 255}))))//((x + 32768) / 65535).toFixed(2)//((x + 32768) / 65535).toFixed(2)

};

module.exports = Visualizer;