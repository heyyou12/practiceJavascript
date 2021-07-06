function* iterable() {
  yield "hola 1";
  console.log("muy buen dia");
  yield "hola 2";
  console.log("como se encuentra");
  yield "hola 3";
  yield "hola 4";
}
let iterador = iterable();

for (let y of iterador) {
  console.log(y);
}

let arr = [...iterable()];

console.log(arr);

function cuadrado(valor) {
  setTimeout(() => {
    return console.log({ valor, resultado: valor * valor });
  }, Math.random() * 1000);
}

function* generador() {
  console.log("inicia generator");
  yield cuadrado(1);
  yield cuadrado(2);
  yield cuadrado(3);
  yield cuadrado(4);
  yield cuadrado(5);
  console.log("finaliza generator");
}

let gen = generador();

for (let y of gen) {
  console.log(y);
}
