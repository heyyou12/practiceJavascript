let grados = prompt("ingrese los grados");
let variable = prompt("ingre a que grados quiere convetir");

const convetir = (grado = 0, variable = "") => {
  let f = grado * 1.8 + 32;
  let c = (grado - 32) / 1.8;
  if (!grado) return console.warn("no ingreso un numero");
  if (typeof grado === "number") return console.error("no ingreso un numero");
  if (!variable) return console.warn("no ingreso el caracter");
  return variable.toLocaleUpperCase() === "C"
    ? console.log(`${f}°F`)
    : variable.toLocaleUpperCase() === "F"
    ? console.log(`${c}°C`)
    : console.warn("no ingreso un caracter valido");
};
convetir(grados, variable);
