//variables
//let
//const
//var = conflicto manera global


let numero1 = 20;
let numero2 = 30;
suma= numero1 + numero2;
resta= numero1 - numero2;
//console.log("este es el resultado",suma);
//console.log("este es el resultado",resta);
//console.error("este es el resultado",suma)
//console.warn("este es el resultado",suma)


// alert = alerta en el navegador
//console.log= funcion del navegar que se imprime en consola
//concatenaciones= junta cadeba de texto - junta number con un string

//vamos hacer una calculadora con js
// prompt = ventan emergente que nos pide un valor, y ese valor se guarda en una variable

//const valor1 = //prompt("ingresa el valor 1");
//const valor2 = //prompt("ingresa el valor 2");

//necesitamos ingresar la operacion para el proceso
//parsear poner + delante del valor

const operacion = "+"; //prompt ("ingresa una operacion +,-,*,/")

if(operacion === "+"){
    resultadoCalculadora = +valor1 + +valor2;
    console.log("resultado", resultadoCalculadora);
}else if(operacion ==="-"){
    resultadoCalculadora = +valor1 - +valor2;
    console.log("resultado", resultadoCalculadora);
}else if(operacion ==="*"){
    resultadoCalculadora = +valor1 * +valor2;
    console.log("resultado", resultadoCalculadora);
}