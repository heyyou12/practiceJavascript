let cadena=prompt("ingrese el mensaje");
let cantVeces=prompt("que se repita cuantas veces");


const ejercicios = function (cadena1 = " ", cantVeces1=undefined){
    
    
    if(!cadena1)return console.warn("no ingreso una cadena");
    if(cantVeces1===undefined)return console.warn("no ingreso la cantidad de veces");
    if(cantVeces1===0)return console.error("el numero de veces no puede ser 0");
    if(Math.sign(cantVeces1)===-1){
        return console.error("no debe ingresar numero negativos");
    }else {
    let nuevaCadena=cadena1.repeat(cantVeces1);
    console.log(nuevaCadena);
    }
    }

ejercicios(cadena,cantVeces);