let palabra=prompt("ingrese la palabra");

const invertirPalabra= (palabra1= "") => {
    if(!palabra){

        console.warn("no introdujo una cadena de texto");
    }else{
    let arr=[];
    let pal=" ";
    
    
    for(let i=0; i<palabra1.length; i++){
        
        
        //arr[i]=palabra1.charAt(palabra1.length-1-i);
        pal = pal + palabra1.charAt(palabra1.length-1-i);
        
        

        }
        //arr.join(" ");
        console.log(pal);
        

    }

    }


    invertirPalabra(palabra);