
let alumno = "kenneth";

//arrays una lista de datos declara con corchetes[]
let alumnos = ["kenneth","edson","luis","danie","kevin","walter"];

//arrays podre tener diferentes datos
const tipos =[true ,40,"kenneth",10.5];



//como acceder a un dato del arrays
console.log("alumno", alumno);
console.log("alumnos", alumnos);
console.log("tipos", tipos);

//sustituir
alumnos[5]=100;

//agregar un valor
alumnos[6]= "walter";
alumnos[11]= "david";

//como saber cuantos elementos hay en un array
//los array tiene una funcion llamada length la cual nos permite saber cuantos elementos hay en un array

console.log("cantidad de elementos", alumnos.length)