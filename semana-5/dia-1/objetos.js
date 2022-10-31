//que es un objeto = es un entidad independiente el cual tiene propiedades y atributos
//esta compuesta por un (keys) y un value


//

const carro={
    color: "negro",
    motor: 1.6,
    modelo: "amazon",
    marca: "volkswagen",
    nuevo: false,
};

console.log("es un objeto", carro);

//objet persona

const persona={
    edad:25,
    nombre:"david",
    sexo:"masculino",
    talla:1.84,
    estadoCivil: "soltero",
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
persona.nacionalidad= "peruano"