const $  = require("johnny-five");
const $$ = new $.Board();

const Arduino = {
    _$:$,
    _$$:$$,
    Repl:{
        eval:eval
    },
    _ready: ()=>console.log("No _ready!"),
    init:cb=>this._ready=cb,
    Led:{
        on:id=>new $.Led(id).on(),
        off:id=>new $.Led(id).off(),
        toggle:id=>new $.Led(id).toggle()
    }
}

$$.on("ready", Arduino._ready);


module.exports = Arduino;