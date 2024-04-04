const leer = require ("prompt-sync")();
let nombreIngresado=""; //estoy declarando e inicializando la variable
let colorIngresado="";
console.log("Ingrese un nombre");
nombreIngresado=leer();
console.log("Ingrese su color favorito");
colorIngresado=leer();
console.log("Hola,", nombreIngresado,"tu color favorito es:",colorIngresado);