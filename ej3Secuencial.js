const leer = require ("prompt-sync")();
let numIngresado=0; //estoy declarando e inicializando la variable
numIngresado=leer();
console.log("Ingresa un número a duplicar");
console.log("Tu número multiplicado por dos es:", numIngresado*2);