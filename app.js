/*var express = require('express');
var app =express ();

app.get('/Hola', function (req, res){
    res.send('Hola Mundo!');
});

app.get('/Adios', function (req, res){
    res.send('Adios Mundo!');
});


app.listen(3000, function(){
    console.log('Aplicando ejemplo, escuchando el puerto 3000!');
});*/ 
//EJEMPLO DE  ENDPOINT

//Requiere packages and set the port
const express = require('express');
const port = 3002;
//para permitir manejo de POST Y PUT
const bodyParser = require('body-parser');
const routes= require('./routes/routes')
const app= express();

//usar node,js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {
        extended: true,
    }
));

routes(app);

//iniciar el servidor
const server =app.listen (port, (error)=>{
    if(error) return console.log(`Error: ${error}`);

    console.log(`El servidor escucha en el puerto ${server.address().port}`);
});
