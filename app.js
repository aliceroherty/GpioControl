//module imports
var express = require('express');
const gpio = require('onoff').Gpio;

//utility imports
var config = require('./utils/config');

//destructuring config
const { port } = config;

//creating new express app
var app = express();

app.set('view engine', 'ejs');

//setting static routes
app.use('/assets', express.static('assets'));
app.use('/controllers', express.static('controllers'));

//routing
app.get('/', (req, res) => {
    res.render('index');
});

var pin = new gpio(config.pin, 'out');

module.exports = {
    pinOn = () => {
        pin.writeSync(1);
    },
    pinOff = () => {
        pin.writeSync(0);
    }
}

app.listen(port);
console.log(`The server is listening on port ${port}`);