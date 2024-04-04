const leer = require ("prompt-sync")();
const NOMBRE_1="Tito";
const NOMBRE_2="Luis";
console.log("Inserte nombre");
nombreRespuesta = leer();
if (nombreRespuesta==NOMBRE_1){
    console.log("Chau,", NOMBRE_1);
} else if (nombreRespuesta==NOMBRE_2){
    console.log("Hola,",NOMBRE_2);
} else{
    console.log("Nombre no reconocido");
}