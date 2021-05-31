
let total=0;

try {
    let cadena = prompt("introduzca una cadena");
if(!(isNaN(cadena))){
    throw new Error("no se introdujo una cadena");
}else{
    let i=0;
    while(i<cadena.length){
        i++;
    }
    console.log(cadena.length);
}

} catch (error) {
    console.log(` ${error}`);
}





