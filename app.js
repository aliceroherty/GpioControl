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
app.use('/utils', express.static('utils'));

//Setting up Gpio pin
var pin = new gpio(config.pin, 'out');

var getStatus = () => {
    if (pin.readSync() == 0) {
        return 'OFF';
    }
    else {
        return 'ON';
    }
}

//routing
app.get('/', (req, res) => {
    res.render('index', {status: getStatus()});
});

//button clicks
app.get('/on', (req, res) => {
    pin.writeSync(1);
    res.render('index', {status: getStatus()});
    console.log('on');
});

app.get('/off', (req, res) => {
    pin.writeSync(0);
    res.render('index', {status: getStatus()});
    console.log('off');
});

app.listen(port);
console.log(`The server is listening on port ${port}`);