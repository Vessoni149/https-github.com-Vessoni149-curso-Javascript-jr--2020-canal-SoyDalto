//los parametros son variables que se crean junto con una funcion
function suma(num1, num2){              //así creamos una función y le agregamos parametros para que estos puedan ser definidos luego al momento de llamar la función.
    let resul = num1 + num2;            
    document.write(resul);
    document.write("<br>");
}

suma(12,30);
suma(5, 5);


function saludar (nombre){
    let frase = `hola ${nombre}, ¿como estas?`;    //usar crtl alt llave para crear esas comillas para que funcione el ${}.
    document.write(frase);
}

saludar("agustin");

//otras formas de crear funciones:
//const saludar = function(nombre){
//    let frase = `hola ${nombre}, ¿como estas?`;   
//     document.write(frase);
//  }
    
//const saludar = nombre=> {            //si es un solo parametro se puede poner directamente el nombre del parametro, si hay varios van entre () y si no hay ninguno van los () solos.
//  document.write(frase);
//  }
//saludar("pedro")











