const leer = require ("prompt-sync")();
let num1=0;
let num2=0;
let op="";
console.log("Ingrese su primer número");
num1=Number(leer());
console.log("restar (R) o sumar (S)?")
op=leer();
console.log("Ingrese su segundo número");
num2=Number(leer());
if (op=="R")
{
    console.log("El resultado es:",num1-num2);
}
if (op=="S")
{
    console.log("El resultado es:", num1+num2);
}