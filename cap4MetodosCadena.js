//vamos a ver metodos de cadena. concat, startWhit, endsWith, includes, indexOf, lastIndexOf, padStart, padEnd, repeat.

//Metodo es lo que la cadena puede hacer, ej. convertirse a mayúscula.
//propiedad: características q tiene la cadena, ej. longitud
//para usar un metodo:           cadena.metodo();
//para usar una propiedad:       cadena.propiedad;

//---------------------------------------------------------------------------------------

// let cadena = "cadena de prueba";    

// resultado = cadena.concat("hola");          //a la variable cadela le ponemos .concat() y se concatena lo que haya entre ()

// document.write(resultado + "<br>");
// --------------------------------------------------------------------------------------

// let cadena = "cadena de prueba";    

// resultado = cadena.endsWith("prueba");         //startWith verifica si una cadena empieza con el parametro que le indicamos entre (). Retorna true o false
//                                                 //endsWith es lo mismo pero verfica que termine como le decimos, y retorna true o false.
// document.write(resultado + "<br>");

//---------------------------------------------------------------------------------------

// let cadena = "cadena de prueba";    

// resultado = cadena.includes("prueba");                   //includes verifica si la cadena contiene o no (en caulquier parte de la cadena) el valor que le damos entre (), y devuelve T o F.
                                                            
// document.write(resultado + "<br>");
//-----------------------------------------------------------------------------------------

// let cadena = "pedro es un tarado inmaduro";    

// resultado = cadena.indexOf("tarado");                  //indexOf es similar a includes, pero en vez de devolver T o F, nos indica en que posición empieza el parametro que le pasamos entre ().
//                                                         //En este caso la "t" de tarado empieza en la posición 12. en caso de que no se encuentre lo que pasamos en parametro, devolverá -1.
                                               
// document.write(resultado + "<br>");
//-----------------------------------------------------------------------------------------

// let cadena = "pedro es un tarado tarado tarado tarado inmaduro";    

// resultado = cadena.lastIndexOf("tarado");                 //lastIndexOf muestra la posición de la última vez que aparece lo pasado en parametro. En este caso el último "tarado" empieza en
//                                                             //la posición 33.
                                               
// document.write(resultado + "<br>");

//--------------------------------------------------------------------------------------------

// let cadena = "abc";    

// resultado = cadena.padStart(20, "1234");                       //padStart rellena la cadena al principio con los caracteres deseados
//                                                             //con el primer parametro indicamos que rellene la cadena hasta que tenga x caracteres, y luego en el otro parametro le pasamos 
//                                                                // con qué queremos que la rellene.
// document.write(resultado + "<br>");
// padEnd es lo mismo pero al final de la cadena en vez de al principio.
//ambas rellenan solo en caso de que no alcanze el numero que le damos en el primer parametro.

//------------------------------------------------------------------------------------------------

// let cadena = "abc ";    

// resultado = cadena.repeat(3);                       //repeat es para que se repita x veces la misma cadena.
                                                           
// document.write(resultado + "<br>");

//-------------------------------------------------------------------------------------------------

// let cadena = "hola,como,estas";                             //si no estuviesen las "," se verian igual xq se transformo en un array

// resultado = cadena.split(",");                             //divide la cadena como le pidamos, devolviendo un array. Cambia la naturaleza de la string convirtiendola en un array.    
//                                                            //en este caso pusimos "," como divisor, pero si le pedimos que divida los elementos con un espacio (" ") los dividirá de esa forma. 
//                                                             //Si por ej usamos "como" como divisor, éste no aparecera como elemento del array
// document.write(resultado[1] + "<br>");                       //y asi llamamos elementos del arrai.

//------------------------------------------------------------------------------------------------

// let cadena = "ABCDEFG";                            
// resultado = cadena.substring(0,4);                         //toma el string y lo recorta creando uno nuevo. como parametros le damos desde donde queremos que empiece y se muestre, y en el 
//                                                            //segundo hasta donde queremos que llegue, pero el último, el que ponemos no se muestra. muestra al que arranca pero no la que 
//                                                            //termina.
                                                          
// document.write(resultado + "<br>");

//--------------------------------------------------------------------------------------------------

// let cadena = "ABCDEFG";                            
// resultado = cadena.toLowerCase ()                       //Convierte a minuscula todo el string
//                    //toUpperCase() convierte todo a mayuscula.
//                    //toString() convierte todo a un string. Sirve para numeros x ej                                            
// document.write(resultado + "<br>");

//--------------------------------------------------------------------------------------------------

// let cadena = "      pedro         ";   

// resultado = cadena.trim()                               //trim remueve los espacios en blanco. El navegador por defecto los elimina, pero para darnos cuenta de que funciona usaremos la 
                                                            //propiedad length.

// document.write(resultado.length + "<br>");                 //la propiedad length devuelve como valor el numero de caracteres que tiene la cadena de texto. Como a cadena le pusimos la 
                                                                //propiedad trim, va a contar solo 5 caracteres.

//trimEnd elimina solo los espacios del final.
//trimStart elimina los del principio.

//--------------------------------------------------------------------------------------------------

// let cadena = "hola como estas"              //busca el parametro 1 y lo reemplaza x el parametro 2 en la cadena. Pero solo cuando encuentra al primer coincidencia.
// cadena = cadena.replace("a","e");
// document.write(cadena);
//------------------------------------------------------------------------------------------------




















