numero = Math.sqrt(25);                 //sqrt muestra la raiz cuadrada
document.write(numero + "<br>");

numero1 = Math.cbrt(27);                 //sqrt muestra la raiz cubica
document.write(numero1 + "<br>");

numero2 = Math.max(5,8,9,50,76);                 //solo trabaja con numeros. devuelve el mas grande entre todos los que esten en el parametro
document.write(numero2 + "<br>");                       //.min devuelve el mas chico.
                                                       

numero3 = Math.random()*100;                                 //random deveulve un numero aleatorio entre 0 y 1 (pero no incluye ni 0 ni 1). Si le ponemos al lado *100 va a devolver numeros 
                                                            //entre 0 y 100 (no incluidos), mostrando decimales. Para que solo muestre el entero usamos parseInt, solo le saca los decimales, no redondea
//para hacer que salga un n° entre 1 y 99:
let N = Math.random()*99;
N = Math.floor(N+1);
document.write(N + "<br>");

//si quisieramos generar un numero ramdom entre un n° minimo y un maximo: *((nMax - nMin)+ nMin)
console.log(Math.round(Math.random()*(10-5)+5));        //el minimo no va a estar incluido pero el maximo si. Entonces si queremos que salga 5 hay q poner 4 como minimo.

numero3a = parseInt(numero3);
//tambien podemos usar math.round asi: numero3 = Math.round(numero);  round redondea al numero entero mas cercano. si tenemos 9.4 reondea a 9, si tenemos 9.6 redondea a 10
document.write(numero3a + "<br>");


numero4 = Math.floor(4.9999);                       //floor redondea para abajo, sacandole los decimales.
document.write(numero4 + "<br>");
numero4a = Math.ceil(5.7);                          //devuelve el n° entero mas alto, redondea hacia arriba.
document.write(numero4a+ "<br>");

numero5= Math.fround(9.7599999876799);           //devuelve un numero con 15 decimales redondeandolos.
document.write(numero5 + "<br>");


numero6= Math.trunc(9.9);                          //es similar a "round" pero no redondea sino que saca al fracción. Le saca los decimales directamente.
document.write(numero6 + "<br>");

numero7= Math.pow(5,2);                         //pow es para trabajar con potencias, el primer parametro es la base o n° potenciado, y el segundo el exponente.
document.write(numero7);

//math.PI devuelve pi con 15 decimales
//math.SQRT_2 devuelve la raiz caudrada de 1/2, devuelve la representacion flotante simple mas cernaca a un numero (15 decimales)


















