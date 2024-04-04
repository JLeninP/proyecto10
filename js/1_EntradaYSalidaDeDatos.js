//Para mostrar mensajes

//alert("Mensaje desde js/ejemplo1.js");

document.write("<h1><font color='red'>Mensaje para el navegador</h1>");


//Para leer datos del teclado
var nom;
var a, b, s;
nom = prompt("Ingrese su nombre: ");
document.write("Hola " + nom + "</font>\n");

a = parseInt(prompt("Ingrese a:"));
b = parseInt(prompt("Ingrese b:"));
s = a + b;
alert("res = " + s);
