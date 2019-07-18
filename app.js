//module imports
var express = require('express');

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

app.listen(port);
console.log(`The server is listening on port ${port}`);