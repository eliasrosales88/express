
/*
1*.- todos los ejercicios deberán ser resueltos en una carpeta llamada ejercicio3
2*.- Crea una aplicación express, arráncala y comprueba que sepuede acceder correctamente a ella
3*.- Gestiona las peticiones que entre por la URL (/libros) para los métodos Get y Post. Devuelve un texto que indique que método es el que se ha empleado para hacer la petición
4*.- Crea una nueva ruta en la aplicación que devuelva un listado html con las provincias de castilla y león accesible desde la url /provincias y el método get
5*.- Crea una nueva ruta en la aplicación que sea capaz de recoger los datos de un formulario enviados vía post a la url /provincias. Esto deverá devolver un objeto con los datos enviados por el formulario.
6*.- Crea una nueva ruta variable que sea del tipo 
/get/miidentificativo donde mi midentificativo sea variable. Haz que devuelva el valor que se le ha dado cada vez a ese identificativo
7*.- Crea un nueva ruta para la edición y borrado de items ambas tendrán una ruta parecida al ejercicio 6
/edit/miiden /delete/miiden. En ambos casos se devolverá el identificativo. En el caso de la edición se enviará una petición POST, en el caso del borrado será GET.
8*.- Pasa una seríe de parámetros por URL en el formato ?+&. Los datos a pasar son username y password. Devuelve true o false dependiendo de si ambos son "admin" la URL será /login y se hará via POST.
*/

//INICIAMOS EL SERVIDOR CON EXPRESS
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
server.listen(3000);

server.on('error', function(){
    console.log("Upps... fallo de servidor.");
});

server.on('listening',function(){
    console.log("Servidor iniciado!");
});
//----------------------------------------------



//INCLUIMOS BODY-PARSER
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
//-----------------------------------------------


//METODOS GET Y POST
app.get('/', (req, res)=>res.send("Peticion GET"));
app.get('/libros', (req, res)=>res.send("Peticion GET libros"));
app.post('/libros', (req, res)=>res.send("Peticion POST libros"));

app.get('/provincias', (req, res)=>{res.send(
    `
    <h1>Provincias Castilla y Leon</h1>
    <ul>
        <li>Avila</li>
        <li>Burgos</li>
        <li>Leon</li>
        <li>Palencia</li>
        <li>Salamanca</li>
        <li>Segovia</li>
        <li>Soria</li>
        <li>Valladolid</li>
        <li>Zamora</li>
    </ul>`

)});

//5
app.post('/provincias/', (req, res)=>{
    res.send(req.body)
});

//6
app.get('/get/:id', (req, res)=>res.send("Peticion GET"));
app.post('/edit/:id', (req, res)=>{
    console.log(req.body);
    res.send(req.body);
});
app.get('/delete/:id', (req, res)=>res.send(`Eliminando el dato ${req.params.id}`));

//8
//Esta no es la manera mas correcta para enviar un formulario de login. Mejor es usar req.body enviando codificado desde un form
app.post('/login', (req, res)=>{ 
    if (req.query.username == "admin" && req.query.password == "admin") {
        var resultado = true;
        res.send(resultado);
    }else{
        var resultado = false;
        res.send(resultado);
    }

});