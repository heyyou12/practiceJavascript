let letras = /xyz/ig;
let cadena = "xyz1,xyz2,xyz3,xyz4,xyz5";

const eliminar = (cadena = "",letras="")=>{
    let nvaCadena="";
    if(!cadena){
        console.warn('no ingreso la cadena');
    }else if(!letras){
        console.log.warn('no ingreso los caracteres');
    }else{
        nvaCadena=cadena.replace(letras,"");
    }

    console.log(nvaCadena);

}   

eliminar(cadena,letras);
eliminar();