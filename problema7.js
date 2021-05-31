 function obtenerInformacion(materia) {

    var materias = {
        fisica:["manuel","luis","sandra","luisa","miguel"],
        programacion:["mauricio","luis","luisa","miguel"],
        logica:["luzdary","sandra","luisa","miguel"],
        biologia:["camilo","luis","sandra","luisa"]

    }
    if(materias[materia] != undefined){
        
        return [materias[materia],materia];
    }else{
        return materias;
    }

    
} 

const mostrarInformacion = (materia) =>{

    let informacion = obtenerInformacion(materia);
   
if(informacion != false){
    let profesor = informacion[0][0];
   
    let alumnos= informacion[0];
    alumnos.shift();

    document.write(`El profesor de ${informacion[1]} es: <b style= "color:blue">${profesor} </b> <br> Los alumnos son: ${alumnos} <br> ` );
}
}

const cuantasClases = (nombre)=>{
    let informacion = obtenerInformacion();
    let clasesPresente = [];
    let cantidad = 0;
    for(info in informacion){
        
        if(informacion[info].includes(nombre)){
            cantidad++;
            clasesPresente.push(" " + info);
        }
    }
            
        return `El estudiante ${nombre} se encuentra registrado en : ${cantidad} clases y en <b style=color:green>${clasesPresente}</b> ` ;
}
document.write(cuantasClases("luisa"));