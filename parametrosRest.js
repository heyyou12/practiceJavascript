//PARAMETROS REST
function sumar(a,b,...arg){

    let res = a+b;
    
    arg.forEach(function(elemento){
        res = res + elemento
    });
    return res;

}


console.log(sumar(2,5,3,10));


//SREAD OPERATOR
const arr1=[1,2,3,4,5];
const arr2=[6,7,8,9,0];

const arr3=[...arr1,...arr2];

console.log(arr3);