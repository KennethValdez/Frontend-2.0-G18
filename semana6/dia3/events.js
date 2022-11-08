
const btnPrueba = document.querySelector("#btn-prueba")
//atrape el boton 

btnPrueba.onclick =function(event){
    console.log("click desde el boton")
    console.log(event)
    Swal.fire("hola mundo")
}
//--------------

const btnPregunta = document.querySelector("#btn-pregunta")

btnPregunta.onclick = function(){
    Swal.fire("alguna pregunta","Aca el texto de la pregunta en cuestion")
}

//---------------


function showAlert(icon,title,text){
    Swal.fire({
        icon,
        title,
        text,
        footer: "<a href ='https://google.com'> link de footer"
    })
}

const btnError = document.querySelector("#btn-error")

btnError.onclick = function(){
    Swal.fire()
    showAlert("error" , "hubo un error", "email or password erroneos");
}

//------------------------

//const btnWarning = document.querySelector


//-------
const btnAlertBotones = document.querySelector("#btn-alert-botones")

btnAlertBotones.onclick = function(){
    Swal.fire({
        title: "Alerta",
        text: "Texto de Alerta",
        showDenyButton:true,
        showCancelButton:true,
        confirmButtonText: "guardar",
        denyButtonText: "negar"
    }).then((resultado)=>{
        console.log("resultado",resultado);
        if(resultado.isConfirmed){
            showAlert("success","confirmado","se confirmo la operacion");
            console.log("marco la confirmacion")
        }
        if(resultado.isDnied){
            showAlert("error", "negado", "se nego la operacion");
            console.log("nego la operacion")
        }
    })
}

//--------------------------

const btnAlertImagen = document.querySelector("#btn-alert-imagen")
const urlMarvel = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.wikipedia.org%2Fwiki%2FMarvel_Comics&psig=AOvVaw3HKU-flla8ASVAPAZNlxEw&ust=1667529886078000&source=images&cd=vfe&ved=2ahUKEwik6a6F_5D7AhUCrJUCHcyhCCMQjRx6BAgAEAw"

btnAlertImagen.onclick = function(){
    Swal.fire({
        title:"Marvel",
        text: "alerta con imagen",
        imageUrl: urlMarvel,
        imageWidth: 200,
        imageHight: 200,
    
    })
}