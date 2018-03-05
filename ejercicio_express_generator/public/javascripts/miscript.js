function formu(event){
    event.preventDefault();
    var nombre = $("#nombre").val();
    var password = $("#password").val();
    $.post("http://localhost:3000/api/login",{nombre: `${nombre}`, password: `${password}`} ,function(datos){
        console.log(datos);
        if (datos.result == true) {
            $("#hola").append(`Datos correctos`);
        }else{
            $("#hola").append(`Datos incorrectos`);
        }
        
        
    });
}
function init(){
 console.log("Hola");

 $.getJSON("http://localhost:3000/api/", function(data){
     console.log(data);
     $("body").append("<h1>"+data.propiedad+"</h1>");
 });

 $.getJSON("http://localhost:3000/api/libros", function(libros){
     console.log(libros);
     
     $("body").append("<ul></ul>");
     for (const libro of libros) {
         $("body ul").append(`<li>${libro.titulo}, ${libro.autor}</li>`);
     }
 });

 $("#enviar").click(formu);
 


}

$(document).ready(init);