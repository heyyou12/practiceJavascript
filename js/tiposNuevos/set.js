const set = new Set([
  1,
  2,
  3,
  3,
  4,
  5,
  false,
  true,
  false,
  {},
  {},
  "hola",
  "HOLA",
]);

console.log(set);
console.log(set.size);

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(3);
set2.add(4);
set2.add(5);
set2.add(true);
set2.add(false);
set2.add(false);
set2.add({});

for (let item of set2) {
  console.log(item);
}

set2.forEach((item) => {
  console.log(item);
});

let arr = Array.from(set2);
console.log(arr[5]);
