//variable asociada
var dias = new Array();
//crear un arreglo "al vuelo"
var meses = [];

//populate / poblar
dias[0] = "Domingo";
dias[1] = "Lunes";
dias[2] = "Martes";
dias[3] = "Miércoles";
dias[4] = "Jueves";
dias[5] = "Viernes";
dias[6] = "Sábado";

document.write("Hoy es el día "+dias[3]+"<br>");

//barrer el arreglo
for (var i = 0; i < dias.length; i++) {
    document.write("Ho es el día "+dias[i]+"<br>");
}

//ARREGLOS POR REFERENCIA 
meses ['enero'] = 12477;
meses ['febrero'] = 24477;
meses ['marzo'] = 95274;


document.write("Alumnos inscritos en enero "+meses["enero"]+"<br>");

		for(alumnos in meses){
			document.write("Alumnos inscritos en el mes de "+alumnos+" es de "+meses[alumnos]+"<br>");
		}
		document.write("<hr>");
		var jugadores = new Array("Pepe", "Toño", "Gustavo", "Paco");
		jugadores.push("Rafael");
		for (var i = 0; i < jugadores.length; i++) {
			document.write(jugadores[i]+"<br>");
		}

		let elementos = jugadores.splice(1,0,"manuelito","MIGUEL");

        document.write(`los jugadores en orden alfabetico son: ${jugadores.sort()} <br> `);
		document.write(`elementos separados por: ${jugadores.join(" * ")}`);

		const a = Array(10).fill(2);
		console.log(a);

		a.forEach(function(ele,i){
			console.log(`<li id='${i}'>${ele}</li>`);	
		});

		try {
			console.log('lo que se va evaluar');
			variable;
		} catch (error) {
			console.log(error);
		}finally{
			console.log('siempre se ejecuta');	
		}