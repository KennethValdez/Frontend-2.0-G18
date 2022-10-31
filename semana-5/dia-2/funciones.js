// una funciones es un conjunto de soluciones o ejecuciones para poder realizar tareas

//funciones expresivas

function nombreDeLaFuncion(){
    //una vez declarada mi funcion dentro del codigo que hagamos
    //dentro de este solo se va ejecutar cuando la llame...
    
    console.log("estudiandofunciones")
}

nombreDeLaFuncion()

//una funcion es creada para poder reutilizar codigo 
// uuna de las misiones de la funcion es poder hacer un trabajo repetitivo


function sumar (numero1 ,numero2){
    //primero voy a aconvertir los parametros a numeros 
    const converNumero1 =+numero1;
    const converNumero2 =+numero2;

    const suma =converNumero1 + converNumero2

    console.log("el resultado es", suma)
}

sumar(30,20)

//que es return
//return es la palabra clave que se encarga de retornarnos un valor

const suma2 =(a,b,c,d)=>{
    return (a+b+c+d)

    
}
console.log("otra forma",suma2(30,30,20,20))

//recapitular

//tipo de datos

let nombre = "maria";//string
let age = 34;//number
let talla = 1.84 //number float
let boll = true //boleano
let indefinido;
let nulo = null;
let simbol = Symbol("zcd");
let objetc = {};

console.log(nombre,typeof(nombre))
console.log(age,typeof(age))
console.log(boll,typeof(boll))

// cambiar tipo de datos

console.log(age,typeof toString(age))
console.log(nombre,typeof parseInt(nombre))
console.log(talla,typeof parseFloat(talla))

//tipos de funciones
//funciones expresivas

function suma3 (a,b){
    return a+b
}

//funciones anonimas

let restar = function(x,y){
    return x-y
}

//funcion flecha

let multiplicar =(x,y)=>{
    return x*y
}

console.log("funcion expresiva",suma3(10,10))
console.log("funcion anonima",restar(20,10))
console.log("funcion flecha",multiplicar(10,10))







