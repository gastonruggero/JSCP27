const leer = require("prompt-sync")();
for (let repe = 1; repe <= 5; repe++) {
    console.log("Hola, este es mi mensaje número", repe);
    
}

let numeroASumar=0;
let suma=0;
for (let Numpregunta = 1; Numpregunta <=5; Numpregunta++) {
    
    console.log("Ingrese un número para sumar");
    numeroASumar=leer();
    suma=Number(numeroASumar)+Number(suma);
    console.log("El número actual es:",suma);
    
}