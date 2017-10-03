const NanoTimer = require("nanotimer");
const nano = new NanoTimer;

const Visualizer = {
    _i: 0,
    visualize: function (vols) {
        this._i = 0;
        this.timer(vols);
    },
    timer: function (vols) {
        if(Visualizer._i >= vols.length) return;
        debugger;
        console.log(Visualizer.normalize(vols[Visualizer._i]));
        Visualizer._i++
        nano.setTimeout(arguments.callee, [vols], "23u")
    },

    normalize:x=>((x+32768)/65535).toFixed(2)

};

module.exports = Visualizer;