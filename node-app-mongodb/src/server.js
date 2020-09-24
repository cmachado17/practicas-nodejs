const express = require('express');
const path = require('path');

//inicializaciones

const app = express();

//configuraciones

app.set('port', process.env.PORT || 4000 );
app.set('views', path.join(__dirname, 'views'))

//Middlewares
app.use(express.urlencoded({extended: false}));


//global variables



//routes
app.get('/', (req, res) =>{
    res.send('Hello world')
})

//static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;