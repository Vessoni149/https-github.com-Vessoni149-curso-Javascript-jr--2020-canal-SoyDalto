//no hace falta trabajar con getAtribute o setAttribute. Le podemos dar o modificar el atributo directamente al objeto
const input = document.querySelector(".input-normal");

document.write(input.className + "<br>");            //asi accedemos directamente a la propiedad. nos dice el nombre de la clase

document.write(input.value+ "<br>");                //nos dice 123, el value.

input.type = "text";                               //cambiamos el tipo de input

//input.accept = "image/png"                          //Se usa en un input type file para que solo acepte imagenes png

//form: ver doc html.

//minlength: si no tiene el minimo de caracteres especificados no envia el formulario
input.minLength = "4";   
//esto tmb se puede hacer asi: input.setAttribute("minLength", "4")

input.placeholder = "asdasd"            //es el texto predeterminado q va dentro del input. aca no se va a ver xq ya hay un "value" pero si lo sacamos funciona.

//input.required = " "    sirve para hacer validaciones,  si o si se necesitaras completar el campo, las comillas deben ir vacias para especificar que tiene que haber algo
//algunos sitios debiles pueden hakearse con esto. click derecho en el elemento, inspeccionar y le borras el required del input
//esta bueno hacer validaciones en el front end para no consumir recursos del servidor. Es mejor que la haga el cliente (Js se ejecuta en el navegador del cliente)


//STYLE
//permite modificar algo de css del atributo


const titulo = document.querySelector(".titulo");

titulo.style.backgroundColor = "red"        //en css pongriamos background-color. Pero en js no esta permitido, aca se usa camelCase.
















