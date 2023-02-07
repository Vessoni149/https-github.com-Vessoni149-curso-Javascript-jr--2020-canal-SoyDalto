//problema 1:
const materias = {                              //así creamos un objeto.
    fisica: [90,6,3,"fisica"],
    matematica: [84,8,2,"matematica"],
    logica: [92,8,4,"logica"],
    quimica: [96,8,4,"quimica"],
    calculo: [91,6,3,"calculo"],
    programacion: [79,7,4,"programacion"],
    biologia: [75,9,2,"biologia"],
    bbdd: [98,9,1,"bbdd"],
    algebra: [100,10,4,"algebra"]
}
//para llamar un elemento del array (que va a ser llamado "materia" en este caso) del objeto "materias" se selecciona primero el objeto, luego el elemento (array) y luego la posición del array:
//materias[materia][2]

const aprobo = ()=>{                        //creamos funcion flecha
    for (materia in materias) {                 //aca hacemos que recorra cada elemento (materia) del objeto materias
       let asistencias = materias[materia][0];  //asi podemos llamar elementos internos del array. La variable asistencias va a ser = a el elemento 0 del array de cada elemento (llamado materia) del objeto materias. 
       let notas = materias[materia][1];
       let trabajosP = materias[materia][2];
       if (asistencias >= 90 && notas >= 7 && trabajosP >= 3) {                 //si la posición 0 (% de asistencia) de cada array es menor o = a 90 aprueba.
           console.log(materias[materia][3]);       //. En este caso el nombre de la materia. Se va a mostrar primero el nombre de la materia y abajo:
           console.log("%c  aprobado","color:green"); //se va a mostrar si aprobo o no.
       }
        else {                                          //si las asistencias son menores que 90 desaprueba.
               console.log(materias[materia][3]);
               console.log("    %cDesaprobado", "color:red");
           }
           
       
    }
}

aprobo();

 //--------------------------------------------------------------------------------

//problema 2:

//organizar actividades por dia.
//usar la consola para organizar todo
//el tiempo por tarea no debe superar las 4 horas.

//tiempos en minutos por dia:
//cosas de la casa: 30
//trabajos: 100
//descanso: 10
//estudiar: 100
//trabajo: 240
let trabajo = "240 minutos de trabajo";
let tp = "100 miutos hacer trabajos practicos";
let estudio = "100 minutos de estudio";
let homework = "30 minutos para cosas de la casa"
let descanso = "10 minutos de descanso";

console.log("TAREAS");
for (var i = 0; i < 14; i++) {              //i son los dias, se va a ejecutar mientras dias sea menos que 14.
   if (i == 0) {
console.group("semana 1");
   }
   
    console.group("dia " + (i +1));         //creamos un grupo por dia en la consola i + 1 seria el primer dia, se le suma 1 xq i = 0
console.log(trabajo);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework);
console.groupEnd;
   if (i == 6) {
       console.groupEnd();
       console.groupCollapsed("semana 2");
   }
}
console.groupEnd();









