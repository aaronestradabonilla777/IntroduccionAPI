const { response } = require("express");

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
}