const leer = require ("prompt-sync")();
let num1=0;
let num2=0;
let op="";
console.log("Ingrese su primer número");
num1=leer();
console.log("multiplicar (M) o dividir (D)?")
op=leer();
console.log("Ingrese su segundo número");
num2=leer();
if (op=="M")
{
    console.log("El resultado es:",num1*num2);
}
if (op=="D")
{
    console.log("El resultado es:", num1/num2);
}