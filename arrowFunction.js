

const saludar = ()=> console.log('hola');

const saludar1 = nombre => console.log(`hola ${nombre}`);

const sumar = (a,b) => a+b;

saludar();
saludar1('manuel');
console.log(sumar(250,6987));

const arr = [1,2,3,4,5,6];

arr.forEach((elemento, i) => {console.log(`${elemento}, se encuentra en la posicion ${i}`);});

const perro = {
    nombre: 'trosky',
    ladrar (){
        console.log(this);
    }
}

perro.ladrar();