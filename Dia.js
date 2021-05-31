
let dias= new Array('domingo','lunes','martes','miercoles','jueves','viernes','sabado');
let meses= new Array('enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre');
let hoy= new Date();
let dia=hoy.getDay();
let diaMes=hoy.getDate();
let mes=hoy.getMonth();
let anio=hoy.getFullYear();
let hora=hoy.getHours();
let minutos=hoy.getMinutes();
let segundo=hoy.getSeconds();
let mili=hoy.getMilliseconds();
document.write(`hoy es el dia ${diaMes} de ${meses[mes]} de ${anio} y es ${dias[dia]} y son las ${hora}:${minutos}:
${segundo}:${mili} `);