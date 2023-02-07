//DOM es document object model. Es la hoja donde se plasma todo el codigo html, css y js
// un nodo en el dom es cualquier elemento del cuerpo. Basicamente todo es un nodo.
//tipos de nodo: 
//el nodo document es el nodo raiz, del que derivan todos los otros nodos.
//element: se definen por etiquetas html( p, b, div, etc.), toda etiqueta crea un nodo.
//text: es el texto adentro o fuera de un nodo element (seria el texto de un <p> y el espacio vacio que separa las etiquetas tmb)
//atribute: los atributos de las etiquetas defiinen nodos (en js no los veremos como nodos sino como información asociada al nodo)
//comentarios y otros tipos de nodos (ej delcaraciones doctype en la cabeza de los documentos html)


//METODOS DE SELECCION DE ELEMENTOS
//son los metodos que permiten obtener los elementos o grupos de elementos que queremos seleccionar.
//todos los metodos se aplican a un objeto. Estos metodos se aplican al objeto document. El document es una de las interfaces del DOM, que tiene varias.


// parrafo = document.getElementById("parrafo");   //así seleciconamos el párrafo html con su id y creamos una variable con su valor
// document.write(parrafo);


// parrafo = document.getElementsByTagName("p");      //asi se selecciona por etiqueta, selecciona una lista de elementos (no un array) en caso de tener varios p. No es una forma de seleccionar recomendada.
// document.write(parrafo[1]);                     //para seleciconar un parrafo en particular se hace así. En este caso seleccionamos el primero


//querySelector: devuelven el primer elemento que coincida con el grupo especificado de selectores. Aca usamos los selectores de css.
// rancio = document.querySelector(".rancio");         //el "." es porque es una clase. las clases en css se seleccionan con "."
//                                                     //si quisieramos seleccionar por id seria (#parrafo), pero lo correcto seria usar "getElementById" y no el Query
// document.write(rancio);

//con querySelectorAll() seleccionamos todos los elementos que coincidan con el selector que le demos entre ().
// parrafo = document.querySelectorAll(".parrafo");        
// document.write(parrafo);                                //muestra que es un nodeList, salvo que seguido de parrafo especifiquemos algun parrafo de la lista con "[2]" x ej. Y asi va a decir que es un parrafo.

//METODOS para definir, obtener y eliminar valores de atributos.

// const rangoEtario = document.querySelector(".rangoEtario");
// rangoEtario.setAttribute("type","color");          //modifica el valor de un atributo. el primer parametro selecciona el atributo a cambiar, y el segundo el valor del atributo al que vamos a cambiar.

//si en el navegador vamos a elementos, seleccionamos un elemento y en la consola ponemos "$0" nos va a msotrar todas las propiedades del elemento seleccionado

//getAttribute() obtiene el valor de un atributo
// const rangoEtario = document.querySelector(".rangoEtario");
//  document.write(rangoEtario.getAttribute("type"));                  //va a devolver que es un atributo rango.


//removeAttribute() remuve el valor de un atributo.
// document.write(rangoEtario.removeAttribute("type"));                 




//atrbutos globales: son atributos que tienen TODOS los elementos html:
//class, contentEditable, dir, hidden, id, style, tabindex, title.

//contentEditable: permite modificar en la pagina el elemento seleccionado
const titulo = document.querySelector(".titulo");
// titulo.setAttribute("contentEditable", "true");  //si dieramos false no se podria.


//dir: indica la direccion del texto. tiene 3 valores: left to right (rtl). la direccion normal es ltr, pero el idioma arabe x ej se lee de iz a der.
// titulo.setAttribute("dir","rtl");


//hidden: es para hacer aparecer o desparecer elementos. si en html tenemos un elemento con el atributo hidden no va a aparecer. Pero podemos hacerlo aparecer en js
titulo.removeAttribute("hidden");                        //remueve el atributo que indiquemos en parametro.

//tabIndex: indica si el elemento puede obtener un focus o no. y el segundo parametro le da index cuando apretemoas tab.
titulo.setAttribute("tabindex", "0");       


//title: esta etiqueta cuando ponemos el mouse encima tira data. Aca la podemos cambiar
titulo.setAttribute("title", "jajjaXD");        

