//! consola 

/** antes de comenzar a ver en profundo  las variables y los tipos de datos
 * vamos a ver un  los mensajes de consola 
 * El objeto console provee acceso a la consola de depuración de los navegadores. 
 * Los detalles de como funciona varían de navegador en navegador, pero hay un conjunto de características que de facto
 *  son proporcionadas generalmente.
 */
/**TIPOS DE CONSOLE */
//TODO console.assert()
/**  Aparece un mensaje de error en la consola si la afirmación es falsa. 
 * Si la afirmación es verdadera, no aparecerá nada. 
 * Esta característica no es parte de los estándares. No la uses en sitios Web en producción: 
 * no funcionará para todos los usuarios. Podrían haber también incompatibilidades considerables 
 * entre distintas implementaciones y el comportamiento podría cambiar en el futuro.*/
//** EJEMPLO */
console.assert(true, "Este mensaje no aparece"); 
console.assert(false, "Este mensaje aparece porque la condicion es falsa");
//TODO console.error() 
/**
 * Muestra un mensaje de error en la Consola Web.
 */
//** EJEMPLO */
console.error("Esto es un error");
//TODO console.info()
/**
 * Emite un mensaje informativo a la Consola Web. En Firefox y Chrome, se muestra 
 * un pequeño ícono "i" junto a estos elementos en el registro de la Consola Web.
 */
//** EJEMPLO */
console.info("Este es un mensaje de informacion!"); 
//TODO Console.warn()
/**
 * Imprime un mensaje de advertencia en la Consola Web.
 */
//** EJEMPLO */
console.warn("Este es un mensaje de advertencia!"); 
//TODO console.log()
/**
 * Muestra un mensaje en la consola web (o del intérprete JavaScript).
 */
//** EJEMPLO */
console.log("Falló al abrir el enlace especificado");


//TODO Estilizando la salida de la consola
/**
 * Puedes usar la directiva %c para aplicar un estilo CSS a la salida de la consola:
 */
console.log(
    "%cEste es un mensaje con estilos",
    "color: yellow; font-style: italic; background-color: blue;padding: 2px;  font-size: 45px;",
  );
  /**
   * El texto previo a la directiva no se verá afectado, pero el texto posterior a la directiva 
   * será estilizado usando las declaraciones CSS en el parámetro.
   */
  console.log(
    "Varios estilos: %crojo %cnaranja",
    "color: red; font-size: 30px; font-style: italic; ",
    "color: orange; font-size: 45px; font-style: italic;",
    "Mensaje adicional sin estilo",
  );
const URL_REFERENCIA = 'https://developer.mozilla.org/es/docs/Web/API/console#examples'; 

