
class celulares{
    constructor(nombre,color, peso, resolPantalla, resolCamara, ram){
       this.nombre = nombre;
        this.color = color;
        this.peso = peso;
        this.resolPantalla = resolPantalla;
        this.resolCamara = resolCamara;
        this.ram = ram;
        this.info = `celular: ${nombre}, color: ${color}, peso: ${peso}, resolución de pantalla: ${resolPantalla}, resolución de cámara: ${resolCamara}, memoria ram: ${ram}. `
    }
    prender(){
        alert("encendido");
    }

    reiniciar(){
        alert("reiniciando");
    }

    apagar(){
        alert("apagado");
    }

    foto(){
        alert(`camara lista de: ${this.nombre}`);
    }

    grabar(){
        alert("grabar");
    }
    verInfo(){
        document.write(this.info);
    }
}

const huaweiP20 = new celulares("Huawei P20", "negro", "180gr", "480 x 180", "4k", "8GB");
const samsungXT = new celulares("SamsungXT","azul","200gr","490 x 180" ,"1024px" ,"8GB");
const xiaomi = new celulares("XiaomiLK","blanco","175gr","470 x 170" ,"1024px" ,"7GB");

huaweiP20.verInfo();
document.write("<br>");

samsungXT.verInfo();
document.write("<br>");

xiaomi.verInfo();
document.write("<br>");

xiaomi.foto();






























