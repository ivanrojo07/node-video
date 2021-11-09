const express = require('express');

const app = express();

const { config } = require('./config/index');
const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandlers');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

const moviesApi = require('./routes/movies');

app.use(express.json());//parsing application/json
app.use(express.urlencoded({
    extended : true
})); // for parsing application/x-www-form-urlencoded

// Routes
moviesApi(app);
// Not found catch
app.use(notFoundHandler);

// middleware errors
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);


app.listen(config.port, function(){
    console.log(`Servidor escuchando en http://localhost:${config.port}`);
})