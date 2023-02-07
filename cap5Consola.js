//funciones de registro:
// console.assert(5 < 3): si los parametros son falsos salta un error, si es V nada. 

// console.clear(): limpia la consola

// console.error("che capo, que hiciste?"): caundo hay un error muestra eso.
 
// console.info("che, muy bien tu trabajo pero eso ya no se usa mas"): emite un mensaje informativo

// console.log("che, muy bien tu trabajo pero eso ya no se usa mas"): emite un mensaje de depuracion. la diferencia es minima

//console.table([4,5,6,8,2,48,56]): toma como parapetro un array o un objeto y lo muestra como tabla indicando las posiciones de los elementos

//console.warn("asdas"): tira una advertencia.

//console.dir(): despliega una lista interactiva de las propiedades del objeto JS especificado. tira el "proto"




//funciones de conteo.

//console.count():dice cuantas veces ejecutaste una funcion. Se suele poner dentro, al final de una función al crearla. y cada vez q se ejecute, el contador suma 1.
//console.countReset(): resetea el conteo.




//funciones de agrupacion.

//console.group(): crea un grupo y se muestra abierto en la consola, sepueden crear grupos dentro de otros. Se le puede poner un nombre entre los ()
//console.groupEnd(): termina un grupo para que puedas escribir fuera de el.
//groupCollapsed(): crea un grupo  y se muestra cerrado. Solo camiba la vista al inicio.



//funciones de temporización.

//console.time(): inicia un cronometro.
//console.timeLog(): muestra cuanto tiempo paso desde que se empezo a ejecutar el temporizador. Sigue contando, no detiene el cronometro.
//console.timeEnd(): termina el conteo y muestra el tiempo.
//se suele usar al primcipio y al final del codigo para ver cuanto tarda en ejecutarse cada cosa.
//O en una función sola, Ej en cada funcion se pone timeLog dentro y al final de la funcion (al crearla), y 
//luego de ejecutarla una o varias veces usamos time end vemos lo que tarda en hacer la ejecución de cada función.




//css en consola.
//si ponemos console.log("%crancio", "color:red; border:3px solid blue; padding:20px"). usar "%c" pasa usar css en consola.












