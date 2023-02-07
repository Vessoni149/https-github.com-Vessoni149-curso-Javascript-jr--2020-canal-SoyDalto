//12 materias con alumnos anotados
//crear funcion que al pasarle como parametro la materia devuelva el profe asignado y el nombre de los alumnos anotados
//crear funcion q diga en cuantas calses esta cofla
//nombrar las clases en las que esta y los profes de cada una

const algebra = ["algebra", "Dr. howk", "pedro", "ramon", "messi", "lenon", "juana", "juan"];
const algebra2 = ["algebra 2", "Dr. Oga", "tito", "pedro", "jose", "cofla", "ramon", "fermin", "alvaro"];
const programacion = ["programación", "Prof. Dalto", "esteban", "paz", "moria", "morena", "liz", "gonzalo", "alvaro", "matambre"];
const geografia =  ["geografia","Dr. Romualdo", "micho", "tito", "gordo", "cabezon", "cofla", "rita", "griselda"];
const derechoCivil1 = ["Derecho Civil I", "Dr. Abiati", "carlos", "marcos", "griselda", "franco", "simon", "jose", "fiorela"];
const trigonometria = ["trigonometria", "Lic. Cáceres", "roberto", "maria", "luja", "julian", "sofia", "clara", "rita", "felicitas"];
const hidrología = ["Hidrología", "Dr. Khaneman", "simon", "julian", "ezequiel", "fermin", "maria", "marta", "florencia", "romina"];
const condimentación = ["condimentación", "Prof. Santiago", "agustin", "cofla", "marcos", "antonio", "ruben", "estefania", "morena"];
const historia = ["historia", "Prof. María Jose", "susana", "pedro", "pablo", "franco", "jose", "maria", "laura", "jazmin", "pia"];
const macroeconomia = ["Macroeconomia", "Dr. Cassio", "tomas", "valeria", "andres", "martin", "susana", "cofla", "antonio", "tito"];
const fisica = ["física", "Dr. Espelucci", "conrado", "delfina", "aldina", "julian", "facundo", "maximo", "francisco", "mariana", "ruperta"];
const astrologia = ["astrología", "Lic. Natalia", "lujan", "mercedes", "liz", "paz", "pia", "marcos", "rita", "roman", "messi"];

function m(materia){
for(profe of materia ){
    materia.shift()
     document.write(materia + "<br>");
     break;
}
}

m(programacion);
//-------------------------------------------------------------------------------

let materias = [algebra,algebra2,programacion,geografia,derechoCivil1,trigonometria,hidrología,condimentación,historia,macroeconomia,fisica,astrologia];

function clases(alumno) {
    
    for (materia of materias){
       
        mate = materia.includes(alumno);

        document.write(mate + "<br>");
        
    }
}
clasesCofla();

