const iterable = [1, 2, 3, 4, 5];
//accedemos al iterador del iterable
const iterador = iterable[Symbol.iterator]();

//console.log(iterador);
//console.log(iterador.next());
//console.log(iterable);

let next = iterador.next();

while (!next.done) {
  console.log(next.value);
  next = iterador.next();
}
