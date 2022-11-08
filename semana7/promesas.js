//pormesas: poder ejecutar all asyncrono
//cuando hacemos una peticion a un API -- esto tiene un tiempo de espera
//new promise()
//esto deternimanos unba promesa
//resolve: esto retorna la respuesta cuando todo esta ok
//reject: cuando algo esta mal
//retornan algo
//cuando creamos una promesa esta no tiene return

const promesa = new Promise((resolve,reject)=>{
//vamos a emular un tiempo de espera
    setTimeout(()=>{
//esta funcion va a esperar 5seg para poder retornar el resolve
        resolve ("aca demora en llegar a console")
    },5000);
});

//como ejecutamos la promesa
async function getDataFromPromesa(){
    const respuesta = await promesa;
    console.log(respuesta);
}

getDataFromPromesa()
//existe otra forma de leer promesas esta forma existe del asyn await
//.then()=>entonces - luego de
//.then un callback
//callback es una funcion que ejecuta algo en base a un resultado

promesa.then((respuesta)=>{
//cuando acabes de ejecutar la promesa obtener el valor guardado y guardarlo en respuesta 
    console.log("then",respuesta)
})

//vamos a crear una promesa con errores...
const promesasConError =(validacion)=>{
    return new Promise((resolve,reject)=>{
        if (validacion){
            resolve("la validacion esta ok!")
        }else {
            //new error es una clase de js la cual nos permite retornar con mensaje
            reject(new Error("Error en la validacion"))
        }
    });
}

//veamos como poder validar un error usando .then()

promesasConError()
.then((respuesta)=>{
    console.log(respuesta)
})
.catch((error)=>{
    console.log(error.message)
})

//vamos a validar un ERROR USANDO ASYNC AWAIT

const validacionAsync = async()=>{
    try{
        const respuesta =await promesasConError(false);
        console.log("validacionesAsync",error.message)
    }catch(error){
        console.log("validacionesAsync",error.message)
    }
};
validacionAsync()

//ejemplo real

const getUserGithub = async ()=>{
    try{
        const response = await fetch("https://api.github.com/uses/cvxcvcvcv");
        const data = await response.json();
        return data;
    }catch(error){
        console.log(error.message)
    }
};
getUserGithub()

//veamos un poco de lo que es el status code ,
//200.500.401.403.404.201.512
//si una peticion no devuelve un status que sea 200 201 la respuesta esta ok
//200=ok
//201ok y ademas significa que algo a sido creado

//si la url response es un 500 404 512 hay un error
//404 =  es el error que se muestra cuando no encuentra la url , es decir no existe
//500 = es el error que retorna cuando hay un problema en servidor
//512 =  es un error espacio en el servidor

//get = obtener 
