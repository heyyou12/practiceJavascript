let entradaGratis = false;

function entrada(hora){

    
    let edad=prompt("cuantos años tienes");

    if(edad >= 18 ){

        if(hora >= 2 && hora < 7 && entradaGratis == false){

            alert("Eres el primero y puedes entrar gratis");
            entradaGratis = true;
        }else{

            alert("Tienes que pagar la entrada");
        }

    }else{


        alert("Eres menor de edad no puedes pasar");

    }
}

entrada(10);
entrada(11);
entrada(3);
entrada(1);
entrada(4);
entrada(8);