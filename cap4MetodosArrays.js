
//Los arrais permiten almacenar varios datos, pueden ser de distintos tipos. Se pueden hasta crear vacíos y agregar y quitar elementos luego.
//los valores se separan con "," y sus elementos se cuentan desde la posición 0.


//arrai.length; devuelve el numero de elementos del arrai.

//-------------------------------------------------------------------------------------
//veremos metodos transformadores, el original es transformado en algo nuevo. Lo modifican, no crean uno nuevo.
// let nombres = ["pedro", "maria", "jorge"];

// let resultado = nombres.pop()                   //pop elimina el ultimo elemento del array y nos muestra cuál eliminó
//                     //.shift()                  //elimina el primero y lo retorna.                             
// document.write(resultado + "<br>");             //devuleve jorge
// document.write(nombres)                         //por eso si mostramos nombres, aparece el array sin su ultimo elemento.

//-------------------------------------------------------------------------------------

// let nombres = ["pedro", "maria", "jorge"];



// let resultado = nombres.push("juancito");               //push agrega un elemento nuevo y nos devuelve la cantidad de elementos qeu ahora tiene el array.   

// document.write(resultado + "<br>");                     //devuelve 4.

// document.write(nombres);                                //aca se ve todo el arrai con el nuevo elemento agregado.
//es util para agragar elementos a un array en bucles.

//---------------------------------------------------------------------------------------
// let nombres = [1,2,3,4,5];


// document.write(nombres + "<br>");
// let resultado = nombres.reverse()                                //reverse invierte el orden de los elementos del array.

// document.write(resultado); 

//----------------------------------------------------------------------------------------

// let numeros = [1,2,3,4,5];


// document.write(numeros + "<br>");
//  numeros.unshift("aloha",9)                                //unshift agrega elementos nuevos al principio del array
                                                   
// document.write(numeros); 

//---------------------------------------------------------------------------------------

// let numeros = [1,7,3,8,5];


// document.write(numeros + "<br>");
//  numeros.sort();                                     //ordena los elementos de un array localmente y devuelve el array ordenado
//                                                     //si en el array hubiese distintas palabras, las devuelve en orden alfabetico
// document.write(numeros); 

//--------------------------------------------------------------------------------------


// let numeros = [1,7,3,8,5];


// document.write(numeros + "<br>");
//  numeros.splice(1,3, "roberto", "maximo");                   //el primer parametro es la posición donde arranca, y el segundo la cantidad de elementos que vamos a eliminar hacia la derecha 
//                                                             //desde donde empezamos. si quiesira agragar mas elementos, agrego estos como tercer y ssgts parametros. Estos elementos 
//                                                             //suplantan el lugar de los elementos borrados
//                                                             //si en el segundo parametro no ponemos nada no elimina nada, x lo que podriamos simplemente usar esto para agregar elementos 
//                                                             //desde la posición que querramos
// document.write(numeros);                                     

//----------------------------------------------------------------------------------------

//AHORA PASAMOS A VER LOS METODOS ACCESORES


let numeros = ["abecedario", "manzana", "pedro", "dedo", "bobo"];


document.write(numeros + "<br>");
let resultado = numeros.join(" - ");                     //convierte el array en una cadena de texto nueva, pero a diferencia de "toString" podemos usar el separador que querramos. Hasta 
                                                            //podemos usar la etiqueta br para separarlos y que aparezcan como columna
                                                          //crea un nuevo array, no es que modifica "numeros"

document.write(resultado);                                //por eso aca interesa mostrar el nuevo arrai "resultado" y no "numeros"

//-----------------------------------------------------------------------------------------

// let numeros = ["abecedario", "manzana", "pedro", "dedo", "bobo"];


// document.write(numeros + "<br>");
// let resultado = numeros.slice(0,2);                         //deveulve una parte del array dentro de un nuevo array empezando por inicio hasta el fin (el fin no incluido) 
                                                        
// document.write(resultado);

//------------------------------------------------------------------------------------

//LUEGO TENEMOS TOODS LOS METODOS YA VISTOS PARA LAS CADENAS, QUE ACA FUNCIONAN IGUAL:
//toString, infexOf, lastIndexOf, includes.

//------------------------------------------------------------------------------------

//METODOS DE REPETICIÓN. filter y forEach

// let numeros = ["abecedario", "manzana", "pedro", "dedo", "bobo"];

// // numeros.filter(numero => document.write(numero + "<br>"));              //creamos una nueva variable (numero), que va a ir teniendo distintos valores. Los valores van a ser los de la 
//                                                                             //variable numeros, pero de a uno a la vez. porque esto crea un bucle que se itera

// // //forEach es lo mismo, pero en  filter hay otra posibilidad, que es agregar una condición.

// resultado = numeros.filter(numero => numero.length > 4);        //length era para que cuente los caracteres, y aca le estamos diciendo que si la cadena de texto tiene mas de 4 caracteres,
//                                                                    // los ejecute

// document.write(resultado);





