/*
1.*- Crea un nuevo proyecto express en un directorio llamado ejercicio4
2.*- Crea una nueva ruta llamada /creaCookie que sea capaz de mandar una cookie al cliente con el nombre "idioma" y el valor "es_ES" para el dominio localhost y que no tenga fecha de expiración
3*.- Crea una nueva ruta llamada /muestraCookies que devuelva un listado en html (ul-li) y en cada li mostrar el nombre de la cookie y el valor almacenado
4.- Crea un nuevo router express con el nombre libros que maneje la ruta /libros  
5.- Dentro del router definir las siguientes rutas:
* get /
* post /add
* get /:id
* get /edit/:id
* post /edit/:id
* get /delete/:id
* get /delete/confirm/:id
En todos estos casos las funciones deverán devolver al cliente (res) el método empleado y la ruta definida
*/

//LEVANTAMOS EL SERVIDOR
const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
server.listen(3000);
server.on('error', ()=> console.log("Error"));
server.on('listening', ()=> console.log("Servidor encendido en puerto 3000"));

//IMPORTAMOS COOKIE PARSER  en la consola hay que ejecutar npm install cookie-parser --save
const cookieParser = require('cookie-parser');
app.use(cookieParser());


//EL SERVIDOR ENVIA LA COOKIE AL NAVEGADOR en este punto no es necesario usar el cookie-parser
app.get('/creaCookie',function (req,res){
    res.cookie("idioma1","en_EN",{domain:"localhost"});
    res.send("cookie mandada!");
});

//EL CLIENTE HACE USO DE LAS COOKIES en este punto si se requiere el cookie-parser
app.get("/muestraCookies",function (req,res){
    //Array de cookies
    if (req.cookies != undefined){
        let lasCookies = [req.cookies];
        
        for (const laCookie of lasCookies) {
            res.send(`<ul>
            <li>Idioma: ${laCookie.idioma}</li>
            <li>Idioma: ${laCookie.idioma1}</li>
            </ul>`);
        }
      //res.send(req.cookies);
     
    }else {
      res.send("No has mandado cookies");
    }
});

//EL SERVIDOR TOMA LA RUTA /libros PARA GESTIONAR Y DIRECCIONAR EL SEVICIO DESEADO
var libros = require('./libros');
app.use('/libros', libros);