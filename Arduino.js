const $ = require("johnny-five");
const $$ = new $.Board({
    repl: false
});

const Arduino = {
    isReady: false,

    _led:null,
    _ready: () => {
        $$.pinMode(3, $.Pin.PWM);
        Arduino.isReady = true;
    },

    visualize: function (val) {
        //if(!Arduino._led) Arduino._led = new $.Led(3);
        //Arduino._led[this._normalize(val) ? "on" : "off"]();
        //return new $.Led(13)[this._normalize(val) ? "on" : "off"]();
        $$.analogWrite(3, Arduino._normalize(val));
    },
    _normalize: x => Math.min(Math.floor(x * 255), 255)
// const $$ = new $.Board();

// const Arduino = {
//     _$:$,
//     _$$:$$,
//     Repl:{
//         eval:eval
//     },
//     _ready: ()=>console.log("No _ready!"),
//     init:cb=>this._ready=cb,
//     Led:{
//         on:id=>new $.Led(id).on(),
//         off:id=>new $.Led(id).off(),
//         toggle:id=>new $.Led(id).toggle()
//     }
// }

// $$.on("ready", Arduino._ready);


// module.exports = Arduino;