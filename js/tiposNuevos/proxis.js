const persona = {
  nombre: "",
  apellido: "",
  edad: 0,
};

const manejador = {
  Set(objeto, propiedad, valor) {
    if (Object.keys(objeto).indexOf(propiedad) === -1) {
      return console.error(
        `la propiedad ${propiedad} no se encuentra en el objeto original`
      );
    }

    objeto[propiedad] = valor;
  },
};

const manuel = new Proxy(persona, manejador);
manuel.nombre = "manuel";
manuel.apellido = "restrepo";
manuel.edad = 36;
manuel.email = "manolo.12";
console.log(manuel);

console.log(persona);
