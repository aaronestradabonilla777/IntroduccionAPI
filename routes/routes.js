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

//Mostrar un solo usuario por ID
app.get('/users/:id',(request, response)=>{
    const id =request.params.id;

    pool.query('SELECT * FROM users WHERE id =?', id , (error, result)=>{
        if (error) throw error;

        response.send(result);
    });
});

//Agregar un nuevo usuario
app.host ('/users', (request, response)=>{
    pool.query('INSERT INTO users SET ?', request.body, (error, result)=>{
        if (error) throw error;
        response.status(201).send(`User added with ID: $ {result.insertId}`);
    });
});

//Actualizar un usuario existente

app.put ('/users/:id',(request, response)=>{

    const id = request.params.id;

    pool.query ('UPDATE users SET? WHERE id =?',  [request.body, id], (error,result)=>
    {
        if (error) throw error;
        response.send('User updated successfully');

    });
});

//Eliminar un usuario
app.delete ('/users/:id',(request, response)=>
{
    const id = reque.params.id;

    pool.query('DELETE FROM users WHERE id =?', id, (error, result)=>{
        if (error) throw error;
        response.send('User deleted');
    });
});


}

//Exportar el router
module.exports = router;