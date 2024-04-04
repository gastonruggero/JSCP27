const leer = require ("prompt-sync")();
const PALABRA_SECRETA="Roberto";
let nombreIntento="def palbra ingresada";
console.log("Trate de adivinar el nombre secreto");
nombreIntento=leer();
if (PALABRA_SECRETA==nombreIntento)
{
    console.log("Adivinaste!");
}
else {
    console.log("Mal intento :(");
}