let palabra = prompt('ingrese la palabra');

const esPalindrome = (palabra1 = "") => {
    let cierto = false;
    palabra1 = palabra1.toLowerCase();
    
    for(let i=0; i<palabra1.length; i++){
        
        if((palabra1.charAt(i) === palabra1.charAt(palabra1.length-1-i))){
            cierto = true;
        }else{
            cierto = false;
        }
        
    }
    return console.log(cierto);
}


esPalindrome(palabra);