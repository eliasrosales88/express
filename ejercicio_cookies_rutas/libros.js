const express = require('express');
var router = express.Router();

/*
* get /
* post /add
* get /:id
* get /edit/:id
* post /edit/:id
* get /delete/:id
* get /delete/confirm/:id
En todos estos casos las funciones deverán devolver al cliente (res) el método empleado y la ruta definida
*/

router.get('/', function(req, res) {
    res.send('Metodo get y ruta: /');
});

router.post('/add', function(req, res) {
    res.send('Metodo post y ruta: /add');
});

router.get('/edit/:id', function(req, res) {
    res.send('Metodo get y ruta: /edit/:id');
});

router.post('/edit/:id', function(req, res) {
    res.send('Metodo post y ruta: /edit/:id');
});

router.get('/delete/:id', function(req, res) {
    res.send('Metodo get y ruta: /delete/:id');
});

router.get('/delete/confirm/:id', function(req, res) {
    res.send('Metodo get y ruta: /delete/confirm/:id');
});












module.exports = router;