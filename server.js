var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    controller = require('./controller/controller');

const path = require('path');
const hbs = require('ejs');

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/assets',express.static(__dirname + '/public'));
app.use(bodyParser.json());

var routes = require('./router/routes');
routes(app);

app.listen(port);
console.log('RESTful API server started on localhost:' + port);