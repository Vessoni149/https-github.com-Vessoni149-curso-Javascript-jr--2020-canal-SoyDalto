//una funcion es una procion de codigo qeu se crea una vez y puede ser llamada para ejecutarse sin necesidad de escribirlo todo de nuevo. Solo hay que llamar la funcion por su nombre.

// function saludar() {           //function es palabra reservada para crear funciones, luego viene el nombre de la funcion y (), aca lo que se hace es crear la funcion, no ejecutarse.
//     respuesta = prompt("hola guacho, como fue tu dia?");
//     if (respuesta == "bien") {
//         alert("me alegro")
//     }
//         else {
//             alert("una pena")
//         }

// }

// saludar()                       //aca la ejecutamos.

//otras formas de crear una función es: 
// const saludar = function () { }   aca se esta asiganando una funcion a una variable
// = function saludar() { }

// una cosa es lo que hace una funcion y otra es lo que retorna, con return le decimos lo que va a retornar.

// function saludar2() {
//     alert("hola");
//     return "que haces papa";   //sin return la funcion solo tiraria el alert y despues habria un valor indefinido, ya que la funcion no retorna valores, con return sí retorna un 
                                    //valor, en este caso una string
// }                               //si se retorna un valor finaliza la función, por eso siempre va a lo ultimo, es como un "break".

// let saludo = saludar2();
//  document.write(saludo);

// document.write("<br>");


//funciones flecha:

const saludar = (nombre)=>{                      //en las funciones flecha se crea una variable que va a ser igual a un/uno parametros (si es uno solo puede ir sin (), si son varios
                                               // tienen que estar) seguido de una flecha "=>" que seria lo que reemplaza a la palabra "function", ademas va a la derecha del parametro.
    let frase = `hola ${nombre}, ¿como estas?`;
    document.write(frase);
}

saludar("pedro");
