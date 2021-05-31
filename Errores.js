// try {
    
//     let num = 'p';

//     if(isNaN(num)){
//         throw new Error('no se introdujo un numero')
//     }else{

//     console.log(num*num)
//     }
// } catch (error) {
//     console.log(`el error es ${error}`)
// }
let numeros = [1,2,3,4,5,6,7,8,9,0];

for(let i=0; i< numeros.length;i++){

    if(i===5){
        continue;
    }
    console.log(numeros[i]);

}