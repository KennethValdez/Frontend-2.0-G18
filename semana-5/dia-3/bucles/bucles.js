// bucle es una estructura que se repite .
// los bucles osn mayormente usados para poder recorrer arrays, objetos
//leer cada elemento de manera independiente
//el bucle mas usado for = tod
//iterador => indice
//i++
//i= i+1 

for (let i = 0; i <=10; i++){
console.log("iterador" , i)
}

for(let j =5; j <20;j++){
    console.log("ejemplo2",j)
}

for(let k =5; k <20;k=k+2){
    console.log("ejemplo3",k)
}

const numeros =[1,2,3,4,5,6,7,8,9,10];
for (let l = 0; l< numeros.length; l++){
    //imprimir los numeros pares
    if(numeros[l] %2 ===0){
        console.log(numeros[l])
    }
}

const alumnos =["david","pedro","pablo","ricardo","jorge"];

for (let i=0; i<alumnos.length; i++){
    console.log(alumnos[i])
}

//habra arrays de objetos
const autos=[
    {
    marca: "volkswagen",
    precio: 10000,
    modelo: "amazon",
},{
    marca:"nissan",
    precio: 8000,
    modelo: "sunny",
},{
    marca:"toyota",
    precio: 12000,
    modelo: "tercel",
}
]

console.log("arrays de objetos",autos)
for (o = 0 ; o < autos.length;o++){
    console.log(autos[o].modelo)
}

//----------------
//map
//

const productos =[
    {
        name: "tv",
        price: 1800.
    },
    {
        name: "celuar",
        price: 2000,
    },
    {
        name: "monitor",
        price: 1200,
    }
]

productos.map((productos,index)=>{
    console.log("indice", index);
    console.log("producto",productos.price)
})

console.log("arrays de objetos",productos)
for (o = 0 ; o < autos.length;o++){
    console.log(productos[o].price)
}

//bucle WHILE 

//tambien sirve par poder hacer una accion un numero determinado de veces

let contador = 0;

while(contador <= 5){
    console.log("contador", contador)
// no se olvide de alterar el contador en cada vuelta
contador++;
}

//escribit un programa que pueda al usuario una palabra y la muestre en pantalla 10 veces 

function imprimirDiesVeces(palabra){
    let contador = 0 ;
    while(conatdor <=10){
        console.log(palabra);
        contador++
    }
}

imprimirDiesVeces("hola chicos")

//-----------------------------------------
// for each

// es un  bucle es como una mezcla del map y del for
//recorre arrays

const numeros2=[1,2,3,4,5,6,7,8,9,10]

numeros2.forEach((numeros2,index)=>{
    console.log("inicio", index)
    console.log("que hace", numeros2)
    return numeros2 *2;
})

const productos2 =[
    {
        name: "guillermo",
        price: 10000,
    },
    {
        name: "kenneth",
        price: 20000,
    },
    {
        name: "daniel",
        price: 30000,
    },
    {
        name: "joel",
        price: 40000,
    }
];

productos2.forEach((productos2)=>{
    console.log(productos2.name)
})

productos2.forEach((productos2)=>console.log(productos2.price))

