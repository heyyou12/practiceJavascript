const animal = {
    nombre: 'snoopy',
    sonar(){
        console.log('hago sonidos');
    }

}
const animal2 = {
    nombre: 'LOLA BUNNY',
    sonar(){
        console.log('hago sonidos');
    }

}

console.log(animal);
console.log(animal2);
animal.sonar();

//Funcion construtora
function Animal(nombre, genero) {
  this.nombre = nombre;
  this.genero = genero;

 
}
Animal.prototype.sonar = function () {
  console.log('hago sonidos');
};
Animal.prototype.saludar=function(){
  console.log(`hola mi nombre es ${this.nombre}`);
}

//herencia prototipica
function Perro(nombre,genero,tamanio){
this.super=Animal;
this.super(nombre,genero); 
this.tamanio=tamanio;

}
//perro esta heredando de animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//sobreescritura de metodos del prototipo padre en el hijo
Perro.prototype.sonar = function (){
  console.log("mi sonido es un ladrido");
}

Perro.prototype.ladrar= function(){
  console.log("ladrar");
}

const snoopy = new Perro("snoopy","macho", "grande"),
lolaBunny=new Animal("lola bunny", "hembra");
console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.saludar();
snoopy.ladrar();


lolaBunny.sonar();
lolaBunny.saludar();

const perrito= new Perro("trosky", "macho", "grande"); 

console.log(perrito);