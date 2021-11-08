const express = require('express');

const app = express();

const { config } = require('./config/index');

const moviesApi = require('./routes/movies');

moviesApi(app);

app.listen(config.port, function(){
    console.log(`Servidor escuchando en http://localhost:${config.port}`);
})