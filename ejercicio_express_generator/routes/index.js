var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET fomulario page. */
router.get('/formulario', function(req, res, next) {
  res.render('formulario');
});

module.exports = router;
