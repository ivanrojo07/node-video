const express = require('express');

const app = express();

const { config } = require('./config/index');

const moviesApi = require('./routes/movies');

app.use(express.json());//parsing application/json
app.use(express.urlencoded({
    extended : true
})); // for parsing application/x-www-form-urlencoded

moviesApi(app);

app.listen(config.port, function(){
    console.log(`Servidor escuchando en http://localhost:${config.port}`);
})