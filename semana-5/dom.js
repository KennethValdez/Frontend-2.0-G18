// existe dentro de js el documento ... este atributo de js me permite obtener elementos en html

//obtener elementos segun el nombre de su etiqueta
//tag = etiqueta en ingles
//h1 - div - input

const inputs= document.getElementsByTagName("input")
console.log("input",inputs);
// recordemos que input es un HTML collection para poder recorrerlo debemos convertirlo en un array
//array.from esto convierte un HTML colectivo a un arrays-

const newInputs = Array.from(inputs);
console.log("newInputs", newInputs)

newInputs.map((newInputs)=>{
    console.log("nueva forma", newInputs.value)
})

//bucle for

for(let i = 0 > inputs.length; i++){
    console.log("input", inputs[i].value);
}

//------------------------------------------

const password = document.getElementById("input_password")

console.log("password",password)

// vamos a acceder al elemento selecionadp el value de mi input

password.style.backgroundColor = "#000";
password.style.color = "#fff";
