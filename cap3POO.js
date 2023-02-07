// Es un paradigma de programación. Sirve para programar objetos como si lo hicieramos en la vida real.
// Es una de las formas de crear soluciones, resolver porblemas.

//Objeto: es una estructura de datos que representa propiedades, sus respectivos valores y acciones (metodos) que puede realizar el objeto.
//ej: 
const table = {
   material : "wood",
   width : 160,
   height : 100,
   colors : ["blue", "red"]
 }

//para acceder a una propiedad:
console.log(table.material);


//para recorrer: solo es posible utilizar for in, no siendo posible usar for of.
for(const i in table){
    console.log(i);         //recorre las porpiedades
    console.log(table[i]); //recorre los valores de cada una de las propiedades del objeto:
}

//Sí se puede usar for of para recorrer un arrai dentro de un objeto. For in también. in para el "indice" o posición, y of para losvalores dentro del array.

for(const colors of table.colors){
    console.log(colors);
}

//CLASES:

// Clase: es una plantilla, una fabrica de objetos. Le vamos a decir que los objetos sean de tal y cual manera. Los distintos objetos tendrán las caracteristicas comunes de la clase.
// Los objetos: son resultado de las clases, sus creaciones. Naturalmente son variables (objetos).
//atributos: son las carateristicas del objeto. Las propiedades.
//El metodo: son las cosas que puede hacer el objeto. naturalmente el metodo es una función solo que está adentro de una clase. El metodo siempre se refiere al objeto
//el constructor es una particularidad que tienen las clases, es una funcion obligatoria que debe estar dentro de la clase y es donde van los parametros entre (), y los  atributos 
//entre {} aca se va a indicar que this.xAtributo es = a un parametro dado entre los ().
//Cada clase tiene el constructor que va a construir las propiedades del objeto.
//La clase está instanciada cuando finalizamos todo.

class Animal {
    constructor(especie, edad, color){                        //aca se pasan los parametros que va a contener la clase.
    this.especie = especie;                                 //this es el atributo que voy a crear. El parametro especie no es lo mismo que el this.especie aca estamos diciendo que el 
                                                            //objeto va a tener una propiedad o atributo que en este caso es especie. Las propeidades pueden tener cualquier nombre, y
                                                            //van a ser = al parametro dado en constructor
    this.edad = edad;                                       //"this" es atributo/ ".edad" estoy creando una propiedad llamada edad. Y va a ser igual al parametro edad. Aca tienen el 
                                                            //mismo nombre el atributo y el parametro. Para asignarle los atributos al crear el objeto (linea 55 y 56) le ponemos los
                                                            // parametros del constructor. No así con this.info.
    this.color = color;
    this.info = `Soy ${this.especie}, tengo ${this.edad} años y soy de color ${this.color}`;        //al no estar esto dentro de los () del constructor, para relacionarlo con un objeto es llamado con una función.
    }                                                                                               //aca solo se declara el atributo.
    verInfo(){                                               //aca no puedo usar funciones flecha para crear este metodo. Entonces la creo como cualquier función (solo que aca se llama metodo)
        document.write(this.info);
    }
}
const gato = new Animal("gato", 2, "azul");                     //creo los objetos (variables), que se definen con "const"
const pajaro = new Animal("pajaro", 1, "violeta"); 
//----------------------------------------------------------------------------------------------

//herencia. Es crear una clase que va a tomar todas las porpiedades de otra clase y lo que puede hacer una clase ya establecida, pero ademas agregarle cosas nuevas.
class Perro extends Animal{                          //la clase Perro va a contener todo lo que tiene la clase animal (lo hereda) y ademas algo en específico
    constructor(especie,edad,color,raza){           //pongo el constructor obligatorio y le pongo los parametros que quiero que herede y creo una porpiedad mas.
        super(especie,edad,color);                 //asi se heredan las propiedades de animal
        this.raza = null;                           //a pesar de poner null, no va a pasar nada raro ya que le damos el valor luego 
    }                                               //ademas de heredar las caracteristicas, heredo el metodo verInfo()
    set modificarRaza(newName){                     //se puede hacer sin el set pero con set es la forma correcta de hacerlo. El nombre de buena práctica deberia ser "set setRaza". 
                                                    //Es una funcion que cambia la raza.
        this.raza = newName;                        //el nombre se lo vamos a dar en la linea 51.
    }
    static ladrar(){                                //static sirve para que si por ej no hubiese creado la variable (objeto) perro (linea 78), se puede ejecutar el metodo igual. si no esta el static se requiere      
                                                    //q este creado el objeto
        alert("guau");                              //le estoy dando un metodo especial a la clase Perro
    }
    get getRaza(){                                  //asi obtenemos un valor. Se suele usar para obtener datos encapsulados
        return this.raza;
    }
    }   
    
const perro = new Perro("perro", 5, "rojo","doberman");                       // aca creamos el objeto,  instanciamos un objeto. perro va a ser = a un objeto de la clase Perro. Ésta variable está en minuscula xq
                                                                            // no puedo tener un objeto con el mismo nombre que la clase.

perro.modificarRaza = "Pedro";                //esto es raro, porque  sin el "set" hubiesemos puesto "perro.modificarRaza()" (para llamar al metodo - función) y la raza ya estaria en donde dice "null". 
                                            //Pero raramente, los setter y los getters funcionan como propiedades, por eso el "=". Entonces, al mismo tiempo hace 2 cosas: llama a la función y le da un nuevo valor 
                                            //o propiedad.
document.write(perro.getRaza + "<br>");

Perro.ladrar();
perro.verInfo();                            
gato.verInfo();
pajaro.verInfo();

//caracteristicas de la POO:
//abstraccion, modularidad, encapsulamiento, poliformismo.
//abstracción: reducir el objeto a sus componentes básios, ej de un perro decimos raza, color y tamaño. Los objetos deben ser resumidos.
//modularidad: es la capacidad de resolver un problema grande separandolo en partes.
//encapsulamiento: que todos los datos esten privados, que el usuario no acceda facilmente.
//polimorfismo: ver como un objeto se comporta de maneta distinta con el mismo metodo. Los objetos se conportan distinto por sus distintas propiedades.


//metodos estaticos y accesores.
//estaticos: no necesitan que la clase se defina para poder ser creado.
//accesores: hay 2, guetters y settes. 
//getters son para obtener un valor. Y los setters para modificarlos o definirlos.






