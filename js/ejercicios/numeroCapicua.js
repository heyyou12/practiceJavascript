let num = prompt("ingrese numero");

const numeroCapicua = (num = 0) => {
  if (!num) {
    return console.warn("no ingresaste un numero");
  } else if (typeof num !== "number") {
    return console.warn(`el valor ${num} no es numero`);
  }

  num = num.toString();
  let alReves = num.split("").reverse().join("");
  if (num === alReves) {
    console.log(`el numero ${num} es capicua`);
  } else {
    console.log(`el numero ${num} no es capicua`);
  }
};

numeroCapicua(num);
