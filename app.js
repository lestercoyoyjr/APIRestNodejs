var express = require('express');
var mysql = require('mysql');

var app = express();

// rutas
app.get('/', function(req, res){
    res.send('Ruta INICIO');
})

// in case port is occupied
const puerto = process.env.PUERTO;

app.listen(puerto,function(){
    console.log("Servidor ok en puerto " + puerto);
});