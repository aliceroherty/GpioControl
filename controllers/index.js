const gpio = require('onoff').Gpio;
const config = require('../utils/config');

const $ = (id) => {
    return document.getElementById(id);
}

var pin = new gpio(config.pin, 'out');

window.onload = () => {
    $('btn_on').onclick = on;
    $('btn_off').onclick = off;
}

window.onclose = () => {
    pin.unexport();
}

const on = () => {
    pin.writeSync(1);
    console.log('on');
}

const off = () => {
    pin.writeSync(0);
    console.log('off');
}

