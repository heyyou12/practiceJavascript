class Celular{
    constructor(color,peso,rPantalla,rCamara,ram){

        this.color=color;
        this.peso=peso;
        this.rPantalla=rPantalla;
        this.rCamara=rCamara;
        this.encendido=false;


    }

    presionarBotonEncendido(){
        if(this.encendido==false){

            alert("encender telefono");
            this.encendido=true;

        }else{

            alert("el telefono se encuentra encendido");
            this.encendido=false;
                }
        }

    reiniciarRelefono(){

        if(this.encendido=true){
            alert("reiniciando telefono");

        }else{
            alert("el telefono se encuentra apagado");
        }

    }

    tomarFoto(){
        alert(`Foto tomada con una resolucion de ${this.rCamara}`);
    }
    
    grabarVideo(){
        alert(`Grabar video con una resolucion de ${this.rCamara} `);
    }
    infoCelular(){
        return `
        color: <b>${this.color}</b>
        peso: <b>${this.peso}</b>
        resolucion de pantalla: <b>${this.rPantalla}</b>
        resolucion de camara: <b>${this.rCamara}</b>
        `;
    }

}

class CelularAltaGama extends Celular{

    constructor(color,peso,rPantalla,rCamara,ram,rdce){
            super(color,peso,rPantalla,rCamara,ram);

            this.rdce=rdce; 
    }
    grabarVideoCamaraLenta(){
        alert("grabvando en camara lenta");
    }
    reconocimientoFacial(){
        alert("reconocimiento facial activado");
    }

    infoAltaGama(){
        return this.infoCelular() + `resolucion de alta gama: ${this.rdce}`;
    }

}

// celular1=new Celular("azul", "50gr","full hd", "16 gb", "500 px",false);

// document.write(`${celular1.infoCelular()}`);


celular1 = new CelularAltaGama("azul", "50gr","full hd", "16 gb", "200 px","4k");
celular2 = new CelularAltaGama("negro", "20gr","hd", "32 gb", "400 px","8k");

// document.write(`${celular1.infoAltaGama()} <br>
// ${celular2.infoAltaGama()}`);

document.write(celular1.infoAltaGama());

