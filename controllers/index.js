var app = require('../app');

const $ = (id) => {
    return document.getElementById(id);
}

window.onload = () => {
    $('btn_on').onclick = on;
    $('btn_off').onclick = off;
}

const on = () => {
    console.log('on');
    app.pinOn();
}

const off = () => {
    console.log('off');
    app.pinOff();
}

