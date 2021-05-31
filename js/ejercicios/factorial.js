let numero = parseInt(prompt("ingrese el numero"));

const factorial = (num = 0) => {
  let total = 1;
  for (let i = num; i >= 1; i--) {
    total = total * i;
  }

  return console.log(total);
};

factorial(numero);
