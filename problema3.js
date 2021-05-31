
class Calculadora {
constructor (){

}
sumar(num1, num2)  {
    let res=0;
    res=parseInt(num1 + num2); return res;
}
restar(num1, num2){
  let res=0;
    res=parseInt(num1 - num2); return res;
}
multiplicar(num1, num2){
    let res=0;
    res=parseInt(num1 * num2); return res;
}
dividir(num1, num2){
    let res=0;
    res=parseInt(num1 / num2); return res;
}

calcularPotencia(num1,num2){

    let res=0;
    res=parseInt(Math.pow(num1,num2));
    return res;
}
raizCuadrada(num1){

    let res=0;
    res=Math.sqrt(num1);
    return res;

}
raizCubica(num1){

    let res=0;
    res=Math.cbrt(num1);
    return res;

}

}

let cal = new Calculadora();
alert("Que operacion deseas realizar " );
let calculadora = prompt( " sumar: 1 " + " restar 2:" + " multiplicar 3: " + " dividir 4: " + " exponencial 5: " + " raiz cuadrada 6: " + " raiz cubica 7: ");

if(!(calculadora == "6" || calculadora == "7")){

    var num1 =parseInt (prompt("Ingrese el numero 1"));
    var num2 =parseInt(prompt("Ingrese el numero 2"));
}else{

var num1 =parseInt(prompt("Ingrese el numero 1"));
}

switch(calculadora){

    case "1" : document.write(cal.sumar(num1,num2));break; 
    case "2" : document.write(cal.restar(num1,num2)); break;
    case "3" : document.write(cal.multiplicar(num1,num2)); break;
    case "4" : document.write(cal.dividir(num1,num2)); break;
    case "5" : document.write(cal.calcularPotencia(num1,num2)); break;
    case "6" : document.write(cal.raizCuadrada(num1)); break;
    case "7" : document.write(cal.raizCubica(num1)); break;


    default: document.write("No es un valor valido");break;

}






