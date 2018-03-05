var express = require('express');
var router = express.Router();

/* GET api page. */
router.get('/', function(req, res, next) {
    var objetoJSON ={
        propiedad: "valor"
      };
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(objetoJSON));
});

router.get('/libros', function(req, res, next) {
    var libros =[{
        titulo: "1984",
        autor: "George Orwell"
      },
      {
        titulo: "El Código Da Vinci",
        autor: "Dan Brown"
      }];
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(libros));
});

router.post('/login', function(req, res, next) {
    if (req.body.nombre === "admin" && req.body.password === "admin") {
        var resultado = {result: true};
        res.send(resultado);
    }else{
        var resultado = {result: false};
        res.send(resultado);
    }

});

module.exports = router;

