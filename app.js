var express = require('express');
var mysql = require('mysql');

var app = express();

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'articulosdb'
});

connection.connect(function(error){
    if(error){
        throw error;
    } else {
        console.log('Conexion exitosa a la base de datos!');
    }
});

// rutas
app.get('/', function(req, res){
    res.send('Ruta INICIO');
})

// in case port is occupied
const puerto = process.env.PUERTO;

app.listen(puerto,function(){
    console.log("Servidor ok en puerto " + puerto);
});