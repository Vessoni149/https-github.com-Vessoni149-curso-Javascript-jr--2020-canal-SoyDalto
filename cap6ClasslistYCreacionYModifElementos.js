//CLASSLIST
// const titulo = document.querySelector(".titulo");

// titulo.classList.add("grande");                 //agrega algo a la clase creada en html. Esto permite en css seleccionar a "grande" y darle estilo a todo el titulo. Es como agregarle un nombre
                                                    //classList se pone para poder usar sus metodos.
// titulo.classList.remove("grande");              //remueve la clase

// x = titulo.classList.item(1);                       //devuelve un valor, correspondiente al numero de clase que le demos.
// document.write(x + "<br>");                                  //el segundo elemento (1) es rojo ya que grande fue eliminado


// y = titulo.classList.contains("circular");          //si contiene la clase pasada en parametro devuelve true, sino false.

// document.write(y + "<br>");

// //titulo.classList.toggle("grande");                  //si tiene la clase la saca, y si no la tiene la agrega. Creo que si le damos dc.wr devuelve t o f

// t = titulo.classList.replace("grande", "chico")         //reemplazamos la primer clase x la segunda. Si la primer clase existe, devuelve true y se reemplaza, sino devuelve false.
// document.write(t);                        //devuelve falso xq la clase grande se saco.






//Obtencion, Creacion y modificacion de elementos en html. (NO MEZCLAR EN LA WEB ESTE APARTADO CON EL ANTERIOR, TIENEN MISMOS NOMBRES DE CLASE)
//obtencion:
// const titulo = document.querySelector(".titulo");

// let resultado = titulo.textContent;                               //textContent muestra el contenido de la etiqueta que es texto
// let resultado1 = titulo.innerHTML;                                //se usa alert xq el document.write traduce el html ya que el navegador traduce el codigo, y el alert no. inner devuelve la sintaxis html describiendo los descendientes del elemento
// let resultado2 = titulo.outerHTML;                                //outerHTML devuelve todo el elemento html completo.
                                                    
// alert(resultado);                                  
// alert(resultado1);                                                
// alert(resultado2);  


//Creacion de elementos: con esto creamos objetos, que son elementos unicos, con propiedades particulares.
const contenedor = document.querySelector(".contenedor");

const item = document.createElement("LI");                      //creamos un nodo elemento, una etiqueta html. Si o si tiene que ir en mayuscula

document.write("<br>");

document.write(item);
//con createTextNode creamos un elemento/objeto nodo texto.
document.write("<br>");
const textoDelItem = document.createTextNode("Este es un item de la lista")     //asi solo creamos un nodo texto suelto.
document.write(textoDelItem);


//para agregar ese elemento texto  a otro elemento (en este caso (li)) hay 2 formas: innerHTML y appendChild:

item.innerHTML = textoDelItem;
console.log(item);


// //para crear un elemento hijo se usa appendChild, se aplica sobre el elemento padre y toma como parametro al hijo
// item.appendChild(textoDelItem);
// contenedor.appendChild(item);


//para crear muuuchos elementos a la vez se usa createDocumentFragment. Antes se hacia con bucles pero consumia muchos recursos.

//const contenedor = document.querySelector(".contenedor");
// const fragmento = document.createDocumentFragment();

// for (i = 0; i < 20; i++){                                    //en vez de agregarle al contenedor directo cada uno de los elementos, lo agregamos a un fragmento de documento
//     const item = document.createElement("LI");               //creo un elemento li en c/ iteración
//     item.innerHTML = "Este es un item de la lista";          // a li le agrego un nodo texto en c/ iteración
//     fragmento.appendChild(item);                             //a fragmento le agregamos item (li con nodo texto adentro) en cada iteración. Entonces vamos a tener un solo fragmento con muchos li.
// }
//contenedor.appendChild(fragmento);

//obtencion (seleccion) y modificacion de childs.

// const contenedor = document.querySelector(".contenedor");
// const primerHijo = contenedor.firstChild; 
// const primerHijo = contenedor.lastChild;                            //notese que en el html la etiqueta h2 esta pegada al div y la etiqueta p esta al lado del </div>. esto porque el first y lastChild 
                                                                        //tienen en cuenta los espacios entre etiquetas y los considera  nodo texto.
// console.log(primerHijo);


//para no tener que agrupar todo y poder dejar espacios en el html usamos first/lastElementChild. 
// const primerHijo = contenedor.firstElementChild;             //muestra primer/ultimo elemento hijo
// console.log(primerHijo);


//chillNodes devuelve TODOS los nodos hijos en un nodelist (no es un array), por lo que no funciona .push para recorrerlo (que solo funciona en arrays), para recorrerlo se usa forEach (porque es un objeto).

// const hijos = contenedor.childNodes;          //devulve todos los nodos hijos, incluyendo texto, porque son nodos.
//hijos.forEach(hijo => console.log(hijo));




// const hijos = contenedor.children;          //solo devuelve hijos del contenedor, no los nodos, solo las etiquetas html. La coleccion html no se puede recorrer con forEach. Si se puede con for in y for of.: 
//                                             //for(hijo of hijos){console.log(hijo)}
// console.log(hijos);


