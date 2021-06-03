let mapa = new Map();
mapa.set("nombre", "manuel");
mapa.set("apellido", "restrepo");
mapa.set("edad", 36);

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has("nombre"));
console.log(mapa.get("nombre"));
console.log(mapa.set("nombre", "manolo"));

for (let [key, value] of mapa) {
  console.log(`${key},${value} `);
}

const llavesMap = [...mapa.keys()];
const valoresMap = [...mapa.values()];

console.log(llavesMap);
console.log(valoresMap);
