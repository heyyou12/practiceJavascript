let materias = {
    fisica:["manuel","luis","sandra","luisa","miguel"],
    programacion:["mauricio","luis","luisa","miguel"],
    logica:["luzdary","sandra","luisa","miguel"],
    biologia:["camilo","luis","sandra","luisa"]

}

const inscribir = (alumno, materia) =>{

    let personas = materias[materia];
    personas.shift();
    alumnos = personas;
    if(alumno.length >= 2){
        document.write(`las clases de ${materia} ya se encuentran llenas`);
    }else{

    }

}
inscribir('juan', 'camilo');