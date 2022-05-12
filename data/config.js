const mysql = require('mysql');

//Set database connection credentials
const config ={
    host: 'localhost',
    user: 'aaronz',
    password:'188623Aa',
    database:'api',
};


//Create a MYSQL pool
const pool= mysql.createPool(config);

//Export the pool
module.exports=pool;