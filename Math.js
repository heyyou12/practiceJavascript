let alumnos = ['ALEJANDRO','claudia', 'eduardo','ARMANDO','javier'];
let numero = Math.random();
numero =(numero * alumnos.length);

document.write(numero+ '<br>');
numero=Math.floor(numero);
document.write(numero+ '<br>');

document.write(alumnos[numero]);
