class Animal {
   //el constructor de una clase, es un metodos especial que se ejecuta en el momento de instanciar una clase
     constructor(nombre,genero){

        this.nombre=nombre;
        this.genero=genero;

    }

   
  
  sonar() {
    console.log('hago sonidos');
  };
  saludar(){
    console.log(`hola mi nombre es ${this.nombre}`);
  }
 
}


class Perro extends Animal{

 
    constructor(nombre,genero,tamanio){
       //super es un metodo que manda a llamar el constructor de la clase padre
        super(nombre,genero);
        this.tamanio=tamanio;
        this.raza=null;
    }
    
    sonar(){
        console.log("soy un perro y hago sonidos");
    }
    
    ladrar(){
        console.log("wauuuu wauuu");
    }
    //metodos estaticos
    static mensaje(){
        console.log("este metodo static se puede ejecutar sin instanciar la clase");
    }

    //setters y getters, son metodos especiales que permiten establecer y obtener los valores de los atributos de la clase
    get getRaza(){
        return this.raza;
    }

    set setRaza(raza){
        this.raza=raza;
    }


}

const ratona = new Animal('mimi','hembra');
scooby = new Perro('scobby','macho',"mediano");


console.log(ratona);
console.log(scooby);

ratona.saludar();
ratona.sonar();

scooby.saludar();
scooby.sonar();
scooby.ladrar();
scooby.setRaza="gran danes";
console.log(scooby.getRaza);
