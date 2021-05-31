let texto = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, incidunt dolores. Officia aliquam error nesciunt dolores repellat placeat, eaque, ipsum laboriosam dignissimos officiis porro reiciendis sapiente, voluptatem eveniet ipsam possimus.";
let expReg = new RegExp("lorem","ig");
let expReg2 = /lorem/ig;
console.log(expReg.test(texto));
console.log(expReg2.exec(texto));
