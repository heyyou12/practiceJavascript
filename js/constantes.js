export const PI = Math.PI;

export let usuario = "manuel";
let password = "123456";
//export default password;

//solamente se puede tener una exportacion con default
export default function saludar(){
    console.log("hola, buena tarde");
}

export class Saludar{

    constructor(){
        console.log("hola como estas");
    }
}