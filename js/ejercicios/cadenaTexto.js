let cadena = prompt("ingrese la cadena de texto");

const validarLetras = (cadena = "") => {
  let vocales = /[aeiou]/i;
  let consonantes = /[bcdfghjklmnlpqrstvwxyz]/i;
  let vocal = 0;
  let consonante = 0;

  for (let i = 0; i < cadena.length; i++) {
    if (vocales.test(cadena[i])) {
      vocal++;
    }
  }
  for (let conso of cadena) {
    if (consonantes.test(conso)) {
      consonante++;
    }
  }

  return console.log(`vocales: ${vocal} y consonantes: ${consonante}`);
};

validarLetras(cadena);
