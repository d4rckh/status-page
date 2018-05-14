var express = require('express');
var loggic = require('loggic');

var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))

var logger = new loggic.logger({
    catchErrors: true
});

var port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.render('index', {
        config: require('./configuration/config.js').def,
        apps: require('./apps')
    })
})

var listener = app.listen(port, () => {
    logger.log({
        text: 'Listening on ' + listener.address().port,
        color: 'green'
    }, 'express')
})