//crearemos nuestra funcion

function callMenu(){
    let nro_ejercicio= parseInt(
        prompt("ingrese el numnero de ejercicio que quiere ejecutar:\r\n 1.Suma. \r\n 2.Promedio de Examenes \r\n 3. Calcular el area de un Rectangulo")
    );
    if(isNaN(nro_ejercicio)){
        alert ("por favor ingresa valores")
    }else{
        MenuEjercicios(nro_ejercicio)
    }
}

function MenuEjercicios(nro_ejercicio){
    switch(nro_ejercicio){
        case 1:
            let valor1 = parseFloat(prompt("ingresa el valor 1 a sumar"));
            let valor2 = parseFloat(prompt("ingresa el valor 2 a sumar"));
            alert(ej1_sumarValores(valor1,valor2))
            break;
        case 2:
            let ex1 = parseFloat(prompt("ingrese nota 1"));
            let ex2 = parseFloat(prompt("ingrese nota 2"));
            let ex3 = parseFloat(prompt("ingrese nota 3"));
            let ex4 = parseFloat(prompt("ingrese nota 4"));
            alert(ej2_calcularPromedio(ex1,ex2,ex3,ex4))
            break;
        case 3:
            let large = parseFloat(prompt("imgrese el largo"));
            let width = parseFloat(prompt("ingrese el ancho"));
            alert(ej3_calcularArea(large,width))
    }
}

function ej1_sumarValores(a,b){
    if(isNaN(a) / isNaN(b)){
        return"porfavor ingrese valores";
    }else{
    return a+b};
}

function ej2_calcularPromedio(ex1,ex2,ex3,ex4){
    if(isNaN(ex1) / isNaN(ex2) / isNaN(ex3) / isNaN(ex4)){
        return "por favor ingresa las notas"
    }else{
    return(ex1 + ex2 + ex3 + ex4)/4};
}

function ej3_calcularArea(large,width){
    if(isNaN(large) / isNaN(width)){
        return "por favor ingresa las medidas"
    }else{
    return(large * width)};
}

