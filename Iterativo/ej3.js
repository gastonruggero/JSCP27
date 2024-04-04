const leer = require("prompt-sync")();
let numeroASumar=0;
let suma=0;
for (let Numpregunta = 1; Numpregunta <=3; Numpregunta++) {
    
    console.log("Ingrese un número para sumar");
    numeroASumar=leer();
    suma=Number(numeroASumar)+Number(suma);
    console.log("El número actual es:",suma);
    
}