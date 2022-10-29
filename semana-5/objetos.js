//que es un objeto = es un entidad independiente el cual tiene propiedades y atrbutos
//


//

const carro={
    color: "negro",
    motor: 1.6,
    modelo: "amazon",
    marca: "volkswagen",
    nuevo: false,
};

console.log("es un elemento", carro);

//objet persona

const persona={
    edad:34,
    nombre:"anastacio",
    sexo:"masculino",
    talla:1.84,
    estadoCivil: "casado",
    mayorEdad: true,
    donacionOrganos: true,
}

//como acceder a un atributo

console.log("nombre" ,persona.estadoCivil);
console.log("persona", persona);

//como sustituir
persona.nombre ="kenneth";

//agregar un elemento = key y value

persona["profesion"] = "conductor";
persona["bailarin"] = true;
persona.nacionalidad= "ucraniano"