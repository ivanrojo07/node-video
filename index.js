const express = require('express');

const app = express();

const { config } = require('./config/index');

app.get('/', function (req, res){
    res.send('hola Mundo');
});

app.get('/json', function(req, res) {
    res.json({'title':"Hola Mundo"});
});

app.listen(config.port, function(){
    console.log(`Servidor escuchando en http://localhost:${config.port}`);
})