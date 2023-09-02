//!WHILE 
//** la estructura logica se evalua antes de la ejecucion del bucle*/
//** si la condicion  es verdadera se ejecuta las acciones dentro de las {} , caso contrario pasa a la siguiente sentencia */
//** si la condicion no se cumple o no es verdadera cuando se ejecuta el bucle por primera vez, lo que esta dentro de los {} no se realiza */
/**
 *  while(expresion_logica){
 *    pasos a realizar
 *   }
 *   pasos siguientes 
 */
//! DO WHILE
/**dentro de la programacion existe otra estructura de repeticion  DO WHILE */
//* la diferencia con el while es que siempre se ejecuta el trabajo y se repite lo mismo mencionado anteriormente si la condicion es verdadera  */
/**
 *   do {
 *   pasos a realizar
 *   }while(expresion_logica)
 *   pasos siguientes
 */
//! FOR
/** ademas de estas dos estructuras de repeticion, podemos hablar de for */
//* esta estructura es equivante a las anteriores. su sintaxis establece que se debe escribir el valor incial, la condicion de finalizacion y el incremento de la variable de control en una misma linea */
/*
for (let index = 0; index < 10; index++) {
    pasos a realizar 
}
 pasos siguientes
*/
//! CONTADOR
//**variable que cuyo valor se incrementa o decrementa en una cantidad cte en cada iteracion o ciclo proceso repitivo */
//*se utiliza con frecuencia para contar la cantidad de veces se debe repetir una tarea */
// EJEMPLO:
let contador = 0;
if(contador < 10){
    contador = contador + 1; 
    console.log(contador);
}
/*
let contadorDecrementar = 10; 
if(contadorDecrementar > 0){
    contadorDecrementar = contadorDecrementar - 1; 
    console.log(contadorDecrementar);
}*/

//! ACUMULADOR 
//**variable que cuyo valor se incrementa o decrementa en una cantidad variable  en cada iteracion o ciclo proceso repitivo */
//*se utiliza con frecuencia para  sumar una determinada cantidad de valores */
//EJEMPLO
/*let acumulador= 0;
if(acumulador < 100){
    let respuesta = prompt("ingrese un numero");
    if(respuesta !== ''){
        let numero = parseFloat(respuesta);
        acumulador = acumulador + numero; 
        console.log(acumulador);
    }
}else{
    console.log(acumulador);
}*/
//! BANDERA
//** variable que puede cambiar de valor varias veces a lo largo de la ejecucion del proceso*/
//EJEMPLO
/*
let bandera = true; 
let respuesta = prompt("ingrese un numero");
let numero = 0;

if(respuesta == ''){
    bandera = false; 
}else{
   numero = parseFloat(respuesta);
}

if(numero == 0 && bandera){
    alert('el numero ingresado es cero'); 
} else if(numero >0 && bandera) {
    alert('el numero ingresado es mayor a cero'); 
}else if(numero < 0 && bandera){
    alert('el numero ingresado es menor a cero'); 
}else{
    alert('La bandera esta en falso '); 
}*/
//! SWITCH
//**Estos if anidados pueden ser reemplazados por una estucta condicional llamado switch */
//**Se evalua la variable de control(key) y segun el valor que tome, se ejecuta la accion correspondiente */
//** el caso de la directiva default indica que esa accion se ejecutara cuando no se hayan seleccionado ninguna de las otras opciones listadas */

/*switch (key) {
    case value:
        
    break;

    default:
        break;
}*/