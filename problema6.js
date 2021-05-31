class App{

    constructor(descargas,puntuacion,peso){

        this.descargas=descargas;
        this.puntuacion=puntuacion;
        this.peso=peso;
        this.encendido=false;
        this.instalada=false;
    }
    instalar(){

        if(this.instalada==false){
            this.instalada=true;
            document.write("se ha instalado");
        }else{
            alert("ya se encuetra instalada");
        }
    }
    desinstalar(){
        if(this.instalada==true && this.instalada==true){
            this.instalada=false;
            alert("se ha desinstalado");
        }else{
            alert("no se encuentra instalada");
        }
    }

    abrir(){
        if(this.encendido==false && this.instalada==true ){
            this.encendido=true;
            alert("app iniciada");
        }else{
            alert("app cerrada");
        }
    }
    cerrar(){
        if(this.encendido==true && this.instalada==true){
            this.encendido=false;
            alert("esta apagado");
        }else{
            alert("ya se encuentra apagado");
        }
    }
   informacion(){
       return `
       descargas:${this.descargas} <br>
       puntuacion: ${this.puntuacion}<br>
       peso:${this.peso}<br>
       `;
   }
    

}

app1 = new App("11","500","30gr");
app2 = new App("20","6000","50gr");
app3 = new App("60","100","80gr");
app4 = new App("900","1000","350gr");
app5 = new App("69","6500","578gr");


document.write(`app1: ${app1.informacion()}<br>app2: 
${app2.informacion()}<br>app3: ${app3.informacion()}<br>app4: ${app4.informacion()}<br>app5: ${app5.informacion()}<br>`);
