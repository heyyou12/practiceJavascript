//si las variables estan normales se tiene wur destruturar
import saludar, {Saludar,PI,usuario} from "./constantes.js";
import {aritmetica as calculos} from "./aritmetica.js"

console.log("archivos modulos.js");
console.log(PI,usuario);
console.log(calculos.sumar(3,6));
console.log(calculos.restar(6,4));
saludar();
let saludo = new Saludar();
saludo;