//objeto
		var alumno = new Object();

		//poblar un objeto
		alumno.nombre = "Pedro";
		alumno.apellido = "Picapiedra";
		alumno.edad = 40;
		alumno.empleado = "Montacargas";
		//asignamos un arreglo
		alumno.calificaciones = [7,8,9,6,7,8,9];
		//asignar un objeto
		alumno.direccion = {calle:"Rocadura", num:99, ciudad:"Rocapulco"};

		document.write("Nombre del alumno: "+alumno.nombre+" "+alumno.apellido+"<br>");
		document.write("Primera calificación: : "+alumno.calificaciones[0]+"<br>");
		document.write("Dirección: : "+alumno.direccion.calle+", "+alumno.direccion.num+"<br>");