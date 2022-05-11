const { response, request } = require("express");

//cargar la conexion de lgrupo mysql
const pool = requiere('../data/config');

//Ruta app
const router = app =>{

    //mostrar mensaje de bienvenida de root
 app.get('/',  (reques, response)=>{
     response.send({
         message: 'Bienvenidp a Node.js| Express Rest API!'
     }); 
 });

 //mostrar todos los ususarios
 app.get ('/users', (request,response) =>{
     pool.query('SELECT * FROM users', (error, result) =>{
         if (error) throw error;

         response.send(result);
     });
 });

}