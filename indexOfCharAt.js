
const encontarCaracter = (cadena) => {

    let edad = '@/{#&()';
    let bandera = false;
    for (let i = 0; i < edad.length; i++) {

        let caracter = edad.charAt(i);

        if(cadena.indexOf(caracter) != -1){

             bandera = true;
             break;
        }



    }
    return bandera;
}

document.write(encontarCaracter('manolo.1217)'));
