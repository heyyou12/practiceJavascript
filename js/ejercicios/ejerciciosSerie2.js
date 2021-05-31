let cadena= prompt("Ingrese la cadena");
let indiceA=prompt("desde donde desea que se recorte la cadena");
let indiceB=prompt("cuantos caracteres desea recortar");


const verificar = (cadena1 = "", indiceA1=undefined,indiceB1 =undefined) => 
{
    (!cadena1)
    ? console.warn('no ingreso una cadena')
    :console.log(cadena1)
    console.log(cadena1.substring(indiceA1,indiceB1));

}

verificar(cadena,indiceA,indiceB);



