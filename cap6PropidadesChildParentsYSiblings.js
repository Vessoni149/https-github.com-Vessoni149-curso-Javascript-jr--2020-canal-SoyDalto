//METODOS DE CHILDS:

const contenedor = document.querySelector(".contenedor");

const parrafo = document.createElement("P").innerHTML = "Parrafo";
const h2_nuevo = document.createElement("H2");

h2_nuevo.innerHTML = "Titulo";

h2_antiguo = document.querySelector(".h2");

//contenedor.replaceChild(h2_nuevo,h2_antiguo);               //reemplaza un elemento hijo por otro.



//contenedor.removeChild(h2_antiguo);                             //eliminamos un elemento hijo de un elemento contenedor.



let respuesta = contenedor.hasChildNodes();                 //hasChildNodes nos indica si un elemento tiene hijos nodos o no (el texto de una etiqueta es un nodo).

if (respuesta){                                             //equivale a decir if (respuesta == true)
    document.write("El elemento tiene hijos");
}
else {
    document.write("el elemento NO tiene hijos");
}

//PROPIEDADES DE PADRES/CONTENEDORES

//parentElement y parentNode son muy similares
//parentNode selecciona el padre nodo de un elemento. Busca un nodo padre
//paretElement selecciona el padre elmento de un elemento. Busca una etiqueta html padre.

console.log(h2_antiguo.parentElement); //va a decir que el padre es el contenedor. si se lo aplicamos al contenedor va a indicar al body.





//PROPIEDADES DE LOS SIBLINGS - ELEMENTOS HERMANOS, QUE ESTAN EN el mismo contenedor.

console.log(h2_antiguo.nextSibling);                                //va a indicar el nodo que le sigue en orden, en este caso mostrara text. Si tuviese al h4 pegado lo indicaría a éste.
                    //.nextElementSibling                           muestra el elemento siguiente html, no importa el nodo texto qeu haya en el medio
                    //previousElementSibling                         muestra el elemento previo
                    //previousSibling                               muestra el nodo previo



