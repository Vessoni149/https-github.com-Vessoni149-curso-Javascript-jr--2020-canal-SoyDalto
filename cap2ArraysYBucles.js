//Los arrais son "arreglos", son objetos. Son un contenedor de distintos tipos de elementos que pueden ser de distintos tipos de datos.

//a diferencia de las variables, en los arrais podemos guardar varios tipos de datos. 
// se crean con []

let frutas = ["banana", "manzasa", "pera", 5, 9, "pedro"];
document.write(frutas[0] + "<br>");                      //así llamamos un elemento interno del array.

document.write(frutas[8] + "<br>");                      // esto va a tirar undefined, ya q la posición esta declarada automaticamente, aunque no tiene valor. En las variables te 
                                                        //tira error, xq cuando la declaras no crea todas las posiciones como los arrays.

document.write(frutas[3] + "<br>" + "<br>");            //los arrais no son llamados por numero de elemento sino por su numero de posición, el numero de posición arranca desde 0, no
                                                        // desde 1. Se puede cambiar con los arrais asociativos.
                                                        //entonces xej el elemento 2 (manzana) esta en la posición 1

//arrais asociativos: son un objeto tambien,  y no son un array en realidad.
//Los objetos tienen propiedades o atributos a los que se le asigna un valor con ":" y cada atributo esta separado por ",".

let pc1 = {                                                 
    nombre: "DaltoPc",                                      //es como crear una variable con varios valores adentro. el valor puede ser texto, numero, array...
    procesador: "Intel Core I7",
    ram: "16GB",                                            //estas definiciones no se comportan como variables. Si queremos que sean variable podemos crearlas abajo de 
                                                            //las {}: let nombre = pc1["nombre"];
    espacio: "1TB"
};

document.write(pc1["ram"] + "<br>" + "<br>");                //en arrais asociativos llamamos al objeto interno por su nombre, no por la posición, como ahcemos en los arrays comunes.


//bucles e iteración:
//existen bucles determinados e indeterminados, dependiendiendo de si se ejecutan un numero específuco de veces o no (ej cada vez q un usuario ponga mal una pass)
//bucles: son similares a los if pero se repite constantemente. se hacen con while. Es como que se pregunta si se cumple x condicion, y si es asi lo ejecuta, y lo vuelve a preguntar 
//y a ejecutar y así sucesicamente mientras se siga cumpliendo la condición.

//BUCLES INDETERMINADOS: WHILE Y DO WHILE

//while es un bucle indeterminado, se va a ejecutas hasta q la condición NO se cumple.

let numero = 0;

while (numero < 10) {
    numero++;
    document.write(numero);
}                                               //esto me va a escribir todos los numeros hasta 10. xq va a repetir la función tantas veces mienstas se cumpla la condición.

document.write("<br>" + "<br>");

//do while:  también indeterminado, primero se da la orden y despues se da la condición. Entonces primero se va a ejecutar, luego pregunta si se da la condición y si es así vuelve a ejecutar.
// Si o si se ejecuta 1 vez.

let numero1 = 0
do {
    numero1++;
    document.write(numero1);
}
while (numero1 <= 6);

document.write("<br>" + "<br>");

let numero2 = 0;                                    //la variable tiene que ser asignada de nuevo ya que let sirve para un bloque de codigo.

while(numero2 < 1000) {
    numero2++;
    document.write(numero2);
    if (numero2 == 10) {
        break;                                      //break rompe el bucle.
    }
}


document.write("<br>" + "<br>");

//BUCLES DETERMINADOS:

//for, for in y for of.

//for es como while pero es un bucle determinado o finito, al while no le decimos cuantas veces ejectarse, es , mientras la condicion se cumpla se ejecuta siempre, infinitamente.
// For se ejecuta las veces que nosotros le indiquemos.
//primero declaramos las variables y la inicializamos, despues ponemos la condicion, y despues las iteramos (repetirlo) en aumento o decremento.

for (let i = 0; i < 20; i++) {          //aca podemos ver las tres partes separadas por ;. aca la condición es que mientras i sea menos que 20 se ejecuta, y i++ es que se repita en 
                                        //aumento luego de la priper ejecución y se vuelve a ejecutar todo el bloque hasta que no se cumpla la condicion.
                                        //si queremos que primero se incremente y despues ejecute, osea que en la priemra vuelta i valga 1, se pone "++i".
    document.write(i + "<br>");     //la variable puede ser decalrada afuera y usada adentro como "i". Se usa "i" como convención por "increment", pero puede tenre cualquier nombre.
    if (i == 12) {                  //si hay un for dentro de otro for, habrá 2 variables, a la 2da se le suele poner "j". También puede haber 2 variables en 1 solo for.
        break;                      //si llega a 12 termina el bucle. si en vez de break ponemos"continue" no ejecura el 12 y pasa la siguiente y sigue ejecutando.
    }

}

//ejemplo con 2 variables:

//for (i = 0, j = 5; i < 5; i++, j--){          //aclaración: no se si habría que ponerle let a i y j.
//    console.log(i,j);
//}

document.write("<br>" + "<br>");

//recorrer un arrai con FOR:

let numbers = [56,14,23,37,41,59];
for(let i = 0; i <= numbers.length; i++){   //con .length le decimos que el n° de vueltas sea el largo del arrai.
    console.log(`i vale ${i} y el valor de esa posición en el arrai es ${numbers[i]}`);    //numbers[i] nos muestra los valores de cada elemento del arrai. backticks ${i} nos va a dar la
                                                                                            // posición en el arrai.
}


//for in, y for of. Se usan para recorrer arrays. No hace falta darle un numero de vueltas determinado, ya que se ejecutará tantas veces como elementos tenga el arrai.

let animales = ["gato", "perro", "tyrex"];
                                            //animal es la variable que se crea que va a ser cada elemento del array, va a ir cambiando en cada vuelta, pasando al siguiente. Es como
                                            // un resumen de (let i = x ; 1++). Por convención se suele poner el arrai en plural y la variable en singular.
for (let animal in animales) {                  //in devuelve la posición. en la primer ejecución sera 0, en la segunda 1 y en la tercera 2. Para que nos muestre los animales habria que 
                                            //poner en el document.write(animales[animal])
    document.write(animal + "<br>");        //pero ademas, for in muestra las propiedades del objeto, por ej. si tuviesemos una clase con una propiedad, mostraría los elementos del 
                                            //array y la propiedad.
}

for (let animal of animales) {                  
    document.write(animal + "<br>");         //solo con decir animal ya nos muestra el contenido, el valor. No la posición.
}

//BUCLES con FOR e IF
let names = ["pago", "jose", "paula", "maria"];
for(let index in names){
    if(names[index] === "paula"){
        continue;
    }
    console.log(index);
}


document.write("<br>" + "<br>");

//label es una sentencia que permite asociar un bucle a un nombre para poder terminarlo cuando querramos.

array1 = ["maria","josefa","roberta"];
array2 = ["pedro","marcelo",array1];
forRancio:                                                  //nombre del label
for (let array in array2) {                                 // array solo seria cada elemento del array[], y muestra uno por uno en el array 2, por eso es primero pedro y marcelo y
                                                            // despues los del array1
    if (array == 2) {                                       //esto es: si hay un elemento array en la posición 2 (dentro del array2)
        for (let array of array1){                          //ejecuta los array de array1
            document.write(array + "<br>");                 //mostra la ejecucion en pantalla
            break forRancio;                               //con esto no solo terminamos la ejecución del ultimo for, sino del for grande, el general, que tiene el nombre de forRancio.
                                                            //si lo sacamos aparecera josefa y roberta.
                                           
        }
        
     }
      else {
            document.write(array2[array] + "<br>")
        }
}




