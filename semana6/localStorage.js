//primero la captura del evento que dispara un evento
const btnLogin = document.querySelector("#btn-login");

//la funcion y el evento
btnLogin.onclick =function (event){
    event.preventDefault ();

    const inputs = document.querySelectorAll("input")
    //insertar un valor o almacenas al localstorage

    inputs.forEach((input)=>{

        console.log(inputs)
        localStorage.setItem(input.name , input.value);
    });
}

//forma de capturar elemento del localstorage
const email =localStorage.getItem("email");
const password =localStorage.getItem("password");

function login(){
    const email =localStorage.getItem("email");
    const password =localStorage.getItem("password");  
    form.style.display = "none";
    usuarioSection.style.display ="block";
    titleEmail.innerHTML = email;
    titlePassword.innerHTML = password;
}

const form = document.querySelector("#section-login");
const titleEmail = document.querySelector("#email");
const titlePassword = document.querySelector("#password");

const btnCerrarSesion = document.querySelector("#cerrar-sesion");
const usuarioSection = document.querySelector("#usuario-logged");

if(email !== null && password !== null){

}else {
    usuarioSection.style.display = "none";
}
btnCerrarSesion.onclick = function(){
    localStorage.clear();

    form
}
