const leer = require ("prompt-sync")();
let num1=0; //estoy declarando e inicializando la variable
let num2=0;
let numTotal=0;
console.log("Ingrese un número");
num1=Number(leer());
console.log("Ingrese otro número");
num2=Number(leer());
numTotal=num1+num2
console.log("La suma de ambos números es:", numTotal);