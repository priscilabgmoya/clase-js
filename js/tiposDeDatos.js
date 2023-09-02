//alertas

//alert("hola mundo")

//confirm("¿Es un robot?")
let respuesta_1 = prompt("ingrese numero uno");
let respuesta_2 = prompt("ingrese segundo numero");

if (respuesta_1 !== ""  && respuesta_2 !== ""){
    let  numero_1 = parseFloat(respuesta_1);
    let numero_2 = parseFloat(respuesta_2); 
    //let suma = numero_1 + numero_2; 
    if(numero_2 !== 0 || numero_1 !== 0){
        let division = numero_1 / numero_2;
        console.log(division);
    }else{
        console.error("no esta defina la division en cero")
    }
}else{
    alert("por favor, ingrese un numero");
}
/*let respuesta = prompt("Ingrese un numero");
console.log(respuesta);*/