const contenedor = document.querySelector(".flex-container");
let contador = 0;
function crearLlave(nombre,modelo,precio){
    contador++;
    img = "<img src='llave.png'>";
    nombre = `<h2>${nombre}</h2>`;
    modelo = `<h3>${modelo}</h3>`;
    precio = `<p>Precio: <b>$${precio}</b></p>`;
    return [img,nombre,modelo,precio,img];
}

const changeHidden = (numbre)=> {
    document.querySelector(".key-data").value = number;     //es para que cuando lo señalemos el hidden sea = al n° de modelo, entonces caundo se envie al servidor es el modelo.
}
let documentFragment = document.createDocumentFragment();

for (var i = 0; i <= 20; i++) {
    
    let modeloRandom = Math.round(Math.random()*10000);
    let precioRandom = Math.round(Math.random()*10+30);
    const llave = crearLlave(`llave ${i}`,`modelo ${modeloRandom}`,precioRandom);
    let div = document.createElement("DIV");                    //creo un div
    div.addEventListener("click",()=>{changeHidden(modeloRandom)});
    div.tabIndex = i;
    div.classList.add(`item-${i}`, `flex-item`);                //caundo hagamos click en el elemento, el valor de hidden va a cambiar por el numero de modelo                            //le asigno clase al div
    div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
    documentFragment.appendChild(div);                                              
}

contenedor.appendChild(documentFragment);





























