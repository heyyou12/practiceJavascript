let cadena=prompt("ingrese una cadena");


function comprobar(cadena1 = " "){

    if(!cadena1){

        console.warn("no introdujo ninguna cadena");
    

    }   else {
            let nuevaCadena1= cadena1.split(" ");
            console.log(nuevaCadena1);
            }
}

comprobar(cadena);