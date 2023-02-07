//una variable es un espacio que guardamos en memoria. 
//se puede declarar una variable con var, let y const, ej "var/let/const numero = 15;" 
//let limita el alcance de la variable en el bloque en donde la ejecutamos, var es global
//const es para craer variables constantes, no pueden cambiar su valor, solo se definen 1 vez.
//casos especiales de datos: undefined, null y nan. 
//nombreVariable = "x"
//se puede crear una variable sin definirla (DECLARAR), ej "let number;" aca nos va a decir valor "undefined". Se puede definir o dar valor (INICIALIZAR) mas abajo "number = 28;"
//eso no se puede hacer con "const" (se tiene que declarar y poner valor en la misma linea)
//scope es el alcance de las variables. depente de si es var, let o const. y de donde se creen.
//se puede declarar varias variables y despues asignarles valor (con var y let)
//ej: "let numero1 = 23, numero2 = 39" 
// otra forma es: "let numero, numero2, numero3;     numero = 2;  numero2 = 9;    numero3 = 54;" 



//Como su propio nombre indica, una variable puede variar su contenido, ya que aunque contenga una cierta información, se puede volver a cambiar. A esta acción ya no se le llama 
//inicializar una variable, sino (REDECLARAR). En el código se puede diferenciar porque se omite el var.

//Cuando inicializamos una variable al principio de nuestro programa y le asignamos un valor, ese valor generalmente está disponible a lo largo de todo el programa. Sin embargo,
//esto puede variar dependiendo de múltiples factores. Se conoce como ámbito de una variable a la zona donde esa variable sigue existiendo.
//Por ejemplo, si consultamos el valor de una variable antes de inicializarla, no existe.
// console.log(e); // Muestra "undefined", en este punto la variable "e" no existe
// var e = 40;
// console.log(e); // Aquí muestra 40, existe porque ya se ha inicializado anteriormente
// En el ejemplo anterior, el ámbito de la variable e comienza a partir de su inicialización y "vive" hasta el final del programa. A esto se le llama ámbito global y es el ejemplo
// más sencillo. Más adelante veremos que se va complicando y a veces no resulta tan obvio saber en que ámbito se encuentra.

// En el enfoque tradicional de Javascript, es decir, cuando se utiliza la palabra clave var para declarar variables, existen dos ámbitos principales: ámbito global y ámbito a nivel
// de función.

// Observemos el siguiente ejemplo:

// var a = 1;
// // console.log(a); // Aquí accedemos a la "a" global, que vale 1

// function x() {
//   console.log(a); // En esta línea el valor de "a" es undefined
//   var a = 5; // Aquí creamos una variable "a" a nivel de función

//   console.log(a); // Aquí el valor de "a" es 5 (a nivel de función)
//   console.log(window.a); // Aquí el valor de "a" es 1 (ámbito global)
// }

// x(); // Aquí se ejecuta el código de la función x()
// console.log(a); // En esta línea el valor de "a" es 1

// Ámbitos de variables: let 
// En las versiones modernas de Javascript (ES6 o ECMAScript 2015) o posteriores, se introduce la palabra clave let en sustitución de var. Con ella, en lugar de utilizar los ámbitos 
//globales y a nivel de función (var), utilizamos los ámbitos clásicos de programación: ámbito global y ámbito local.

// La diferencia se puede ver claramente en el uso de un bucle for con var y con let:

// /** Opción 1: Bucle con let **/

// console.log("Antes: ", p);    // Antes: undefined
// for (let p = 0; p < 3; p++)
//   console.log("- ", p);       // Durante: 0, 1, 2
// console.log("Después: ", p);  // Después: undefined

// /** Opción 2: Bucle con var **/

// console.log("Antes: ", p);    // Antes: undefined
// for (var p = 0; p < 3; p++)
//   console.log("- ", p);       // Durante: 0, 1, 2
// console.log("Después: ", p);  // Después: 3 (WTF!)
// Vemos que utilizando let la variable p sólo existe dentro del bucle, ámbito local, mientras que utilizando var la variable p sigue existiendo fuera del bucle, ya que debe tener
// un ámbito global o a nivel de función.

//SINTESIS: var es global para todo el codigo, salvo que este dentro de una función (tiene 2 ambitos, global y a nivel funcion). Let tiene ambito global y local ("local" es mas amplio que a
// nivel funcion, incluye bucles tmb), es decir que si se crea dentro de una funcion o un bucle solo funciona dentro de estos. La dif con var es que si se crea dentro de un bucle, luego
// sigue existiendo. 





//hoisting: es una caracteristica de js, se vera mas adelante.
// Null es cuando creas una  variable y la declaras vacía intencionalmente, en cambio undefined es que no tiene valor aún porque no esta definida. Null si tiene valor y es que no va
// a estar vacia. Ej. "let numero = nuLL;"
//nan  significa not a number. es cuando haces una operación con numeros y texto que no es una suma (si fuese una suma los concatena), ej multiplicar un texto con un numero.
//las variables se declaran una sola vez, no se puede poner 2 veces "let i = 1;", si se puede poner una vez "let i = 1;" y luego cambiarle el valor con "i = 1;" xq la estamos
// redefiniendo. si let esta dentro de un bloque de codigo solo sirve para ese bloque.

//Prompt es una funcion similar a alert pero quedeja ingresar texto al usuario. ese texto que ingrese el usuario lo podemos guardar en una variable, ej "let nombre = propmt("decime
// tu nombre"); el valor de la variable nombre sera lo que ingrese el usuario.


//operadores: aritmeticos y de asignacion. Los primeros toman valores numericos y retornan un valor numerico único ( +, -, * ,/, **, --, &)
//los de asignación asigna un valor al operando de la izqueirda basado en el valor operando de la derecha. Ej =,  +=, -=, *=, /=, estos hacen que se sume/reste/multiplique/divide 
//un numero y se ponga el resultado. ej: x += 3 es lo mismo que x + 3 = 
//%= (este nos dice el resto de la división), **= es para exponenciar.

//concatenación. si concatenamos solo numeros se van a sumar, pero si se detecta un string, se va a considerar q todo es string y va a concatenar en vez de sumar los numeros, ej: 
//let frase = "" + 8 + 1. Va a dar 81 en vez de 9.
//otra forma de concatenar es con {}.  

// let nombre = "lucas dalto";
//let frase = `soy ${nombre} y estoy caminando`;  //esas comillas -backtik- se hacen con control+alt+llaveCerrada 2 veces. NO sirve las comillas dobles ni simples (el boton al lado del 0)
// document.write(frase);


//operadores logicos y de comparación.
//los de comparación comparas 2 expresiones o valores y devuelven un booleano.
// ==  compara que sean iguales (el = simple asigna).
// != pregunta si es distinto un valor a otro
// identidad === compara que tengan la misma identidad, es decir que sea el mismo tipo de dato (ademas del valor). Ej, para == 23 es igual a "23", pero para === no, xq son tipos de 
//datos distintos.
// !== es lo contrario a ===. preguntas si es distinto valor y distinto tipode dato.
// despues estan < (menor), > (mayor), <= y >=

//operadores logicos devuelven un resultado dependiendo de que se cumpla una condicion o no, y su resultado es booleano, y sus operandos son valores lógicos o asimilables a ellos
// si ponemos and (&&) entre 2 valores verdaderos o falsos va a devolver T o F, si ponemos entre 2 T sera T, si popnemos entre 2 F sera F y si poonemos entre un T y un F sera F, 
//lo que hace es comparar logicamente. 
//or (||): si cualquiera de los 2 valores es T, con que haya solo 1 T, todo es T. Si las 2 son F devolvera F.
// lo valores pueden ser variables con operadores de comparacion que devuelvan booleanos.
// not logico (!), regresa lo contrario de lo que le ponemos a continuación. Ej: document.write(!afirmacionFalsa); devolveria true


// condicionales

//es una sentencia que valida o no una condición  y lo ejecuta. if y else, else if (si no anterior no se ejecuta, le das otra condición. Es como decir, "sino, si...")
// if (103 <= 140) {
//     alert("hola");
// }
//como da true la condición, se ejecuta



//para las variables siempre poner let, sino x defecto se entiende var.






