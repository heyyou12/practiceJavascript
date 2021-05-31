let numero = prompt("ingrese el numero");

const numeroPrimo = (num = 0) => {
  if (!num) return console.warn("no ingreso un numero");
  if (Math.sign(num) === -1)
    return console.warn("ha ingresado un numero negativo");
  if (typeof num === "number") return console.error("no ingreso un numero");
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return console.log(`el numero ${num} no es primo`);
    }
  }
  return console.log(`el numero ${num} es primo`);
};

numeroPrimo(numero);
