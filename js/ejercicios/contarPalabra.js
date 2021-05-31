let cadena = prompt('Ingrese la cadena');
let palabra=prompt('Ingrese la palabra a buscar');


const contarPalabra = (cadena1 = "",palabra1="" )=>{

    let contador=0;
    let i=0;
    let nvaCAdena="";
    if(!cadena1){
        console.warn("No ingreso la cadena");
    }else if(!palabra1){
        console.warn('No ingreso la palabra a buscar');
    }else{
        
        
        while(i !== -1){

            i= cadena1.indexOf(palabra1,i);
             if(i !== -1){

                i++;
                contador++;

             }
        }
     
    }

    console.log(`La palabra se encontro ${contador} veces en el texto.`);
}

contarPalabra(cadena,palabra);