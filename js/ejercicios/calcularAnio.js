const convetirNumero = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("no ingresaste la fecha");
  if (!(fecha instanceof Date))
    return console.warn("no ingresaste una fecha valida");

  let hoyMenosFecha = new Date().getTime() - fecha.getTime();
  let aniosEnMS = 1000 * 60 * 60 * 24 * 365;
  let aniosHumanos = Math.floor(hoyMenosFecha / aniosEnMS);

  if (Math.sign(aniosHumanos) === -1) {
    return console.info(`faltan ${Math.abs(aniosHumanos)} años humanos para 
  el ${fecha.getFullYear()}`);
  } else if (Math.sign(aniosHumanos === 1)) {
    returnconsole.log(`han pasado ${Math.abs(aniosHumanos)} años humanos para 
  el ${fecha.getFullYear()}`);
  } else {
    return console.log(`estamos en el año actual ${fecha.getFullYear()}`);
  }
};
convetirNumero(new Date(2084));
