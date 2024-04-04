const leer = require ("prompt-sync")();
let numIngresado=0; //estoy declarando e inicializando la variable


console.log("Ingrese un número");
numIngresado=leer();
if (numIngresado>0) {
    console.log("ingresaste un número positivo");
    
} else if (numIngresado==0){
    console.log("ingresaste 0");
} else {
    console.log("ingresaste un número negativo");
}