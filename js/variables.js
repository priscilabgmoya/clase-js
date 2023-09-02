//! variables 
//** es un contenedor de un valor,/
//** podemos guardar un valor temporal, se puede almacenar distintos tipos de datos./

//! CONST 
/**
 * CONST = Declara una constante de solo lectura en un bloque de ámbito
 * 
 * Es necesario inicializar la constante, es decir, se debe especificar su valor en la misma sentencia
 *  en la que se declara, lo que tiene sentido, dado que no se puede cambiar posteriormente.
 * 
 * la particularidad de que el valor de una constante no puede cambiarse a través de la reasignación. 
 * Las constantes no se pueden redeclarar.
 * 
 * La declaración de una constante crea una referencia de sólo lectura. 
 * No significa que el valor que tiene sea inmutable, sino que el identificador de variable no 
 * puede ser reasignado, por lo tanto, en el caso de que la asignación a la constante sea un objeto, 
 * el objeto sí que puede ser alterado.
 * 
 * Una constante no puede compartir su nombre con una función o variable en el mismo ámbito.
 * 
 *  NOTA: Las constantes pueden ser declaradas en mayusculas o minusculaas,
 * pero por convencion para distinguirlas del resto de variables se escribe todo en mayusculas
 */
const MY_FAV= 7; 

// Si queremos reasignar su valor nos lanzara un error: Unkeught TypeError: Asignación a variable constante.
//MY_FAV = 20;

console.log('Mi numero favorito es: ' + MY_FAV);
/**lo estamos viendo es una propiedad de las cadenas llamada concatenacion de cadenas y/o 
 * numeros esto quiere decir que que se unen ambas partes
 */
// lanzara un error: SyntaxError: tratando de redeclarar una constante. El identificador 'MY_FAV' ya ha sido declarado
//const MY_FAV = 20;

// el nombre MY_FAV esta reservado para la constante anterior, también fallara y lanzara un SyntaxError por la redeclaración
//var MY_FAV = 20;

// el nombre MY_FAV esta reservado para la variable anterior, esto también lanzara un SyntaxError por la redeclaración
//let MY_FAV = 20;

// es importante tener en cuenta como funciona el alcance de bloque
/** para esto incorporamos una estructura de condicion llamada if 
 * la misma hace referencia a si se cumple la condicion se realiza las operaciones de adentro
 */

if (MY_FAV === 7) {
    // esto esta bien y crea una variable MY_FAV de alcance/ambito de bloque
    // (funciona igual de bien con let para declarar un alcance de bloque/ambito de variable no-constante)
    const MY_FAV = 20;

    // MY_FAV ahora es 20
    console.log('Mi numero favorito es: ' + MY_FAV);

    // aquí también lanzara un SyntaxError por la redeclaración
    //var MY_FAV = 20;
}

//!  LET 
/**
 * La instrucción let declara una variable de alcance local con ámbito de bloque(blockscope), 
 * la cual, opcionalmente, puede ser inicializada con algún valor.
 * 
 * let te permite declarar variables limitando su alcance (scope) al bloque, declaración, 
 * o expresión donde se está usando.a diferencia de la palabra clave var la cual define una variable 
 * global o local en una función sin importar el ámbito del bloque. 
 * 
 * La otra diferencia entre var y let es que este último se inicializa a un valor sólo cuando un 
 * analizador lo evalúa 
 */

//TODO Alcance (scope) a nivel de bloque con let

/**
 * Usar la palabra reservada let para definir variables dentro de un bloque.
 * Variables declaradas por let tienen por alcance el bloque en el que se han definido, así mismo, 
 * como en cualquier bloque interno. De esta manera, let trabaja muy parecido a var. 
 * La más notable diferencia es que el alcance de una variable var es la función contenedora:
 */
//**EJEMPLO */
let valor_1 = 40; 
let valor_2 = 45; 

if(valor_2 > valor_1) {
    let suma = 12.7 + valor_1;
    console.log(suma);
}
//console.log(suma);

//**EJEMPLO 2  */
var x = 31;
  if (x !== 0) {
    var x = 71; // ¡misma variable!
    console.log(x); 
  }
  console.log(x); 

//**EJEMPLO 3 */
  let y = 31;
  if ( y!== 0) {
    let y = 71; // variable diferente
    console.log(y); // 71
  }
  console.log(y); 

  //! VAR 
  /**
   * La sentencia var declara una variable, opcionalmente inicializándola con un valor.
   * Las declaraciones de variables, donde sea que ocurran, son procesadas antes de que 
   * cualquier otro código sea ejecutado. El ámbito de una variable declarada con la palabra 
   * reservada var es su contexto de ejecución en curso*,* que puede ser la función que la 
   * contiene o, para las variables declaradas afuera de cualquier función, un ámbito global.
   */
/**
 * Asignar un valor a una variable no declarada implica crearla como variable global 
 * (se convierte en una propiedad del objeto global) cuando la asignación es ejecutada. 
 * Las diferencias entre una variable declarada y otra sin declarar son:

1. Las variables declaradas se limitan al contexto de ejecución en el cual son declaradas. 
Las variables no declaradas siempre son globales.

 */
if ( y!== 0) {
    variable = 30; 
    var  numero = 71; 
}
console.log(variable);
//console.log(numero); 
/**
 * 2. Las variables declaradas son creadas antes de ejecutar cualquier otro código. 
 * Las variables sin declarar no existen hasta que el código que las asigna es ejecutado.
 */
//console.log(a); // Lanza un error de tipo "ReferenceError".
console.log("trabajando..."); // Nunca se ejecuta.
var a;
console.log(a); // Imprime "undefined" o "" dependiendo del navegador.
console.log("trabajando..."); // Imprime "trabajando...".

/**3. Las variables declaradas son una propiedad no-configurable de su contexto de ejecución 
 * (de función o global). Las variables sin declarar son configurables (p. ej. pueden borrarse). */

var a = 1;
b = 2;

delete this.a; // Lanza un error de tipo "ReferenceError" en modo estricto ('use strict'), de lo contrario falla silenciosamente.
delete this.b;

console.log(a, b); // Lanza un error de tipo "ReferenceError".
// La propiedad 'b' se eliminó y ya no existe.

const LINK_REFERENCIA_VAR = 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/var',
LINK_REFERENCIA_LET = 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/let',
LINK_REFERENCIA_CONST = 'https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/const';