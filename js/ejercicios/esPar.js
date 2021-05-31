let numero = prompt("ingrese el numero");

const esPar = (num = 0) => {
  if (!num) return console.warn("no ingreso un numero");
  if (Math.sign(num) === -1)
    return console.warn("ha ingresado un numero negativo");
  if (typeof num === "number") return console.error("no ingreso un numero");
  if (num % 2 === 0) {
    return console.log(`el numero ${num} es par`);
  } else {
    return console.log(`el numero ${num} no es par`);
  }
};

esPar(numero);
