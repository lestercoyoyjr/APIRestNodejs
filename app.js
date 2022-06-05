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

// Todos los articulos
app.get('/api/articulos',(req,res)=>{
    connection.query('SELECT * FROM articulos', (error, filas)=>{
        if (error) {
            throw error;
        } else {
            res.send(filas);
        }
    })
});

// solo un articulo
app.get('/api/articulos/:id',(req,res)=>{
    connection.query('SELECT * FROM articulos WHERE id=?', [req.params.id], (error, fila)=>{
        if (error) {
            throw error;
        } else {
            res.send(fila);
            /*
                Si quisieramos un solo campo del registro
                res.send(fila[0].descripcion);
            */ 
        }
    })
});

// in case port is occupied
const puerto = process.env.PUERTO;

app.listen(puerto,function(){
    console.log("Servidor ok en puerto " + puerto);
});