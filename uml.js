//se crea la clase persona
class persona{
    constructor(nombre,  edad ){
    this.nombre = nombre;
    this.edad = edad;
    
    }
    mostrar(){
        console.log(`nombre: ${this.nombre} edad: ${this.edad} años`);
    }
}

class empleado{
    constructor(sueldobruto){
    this.sueldobruto = sueldobruto;
    }
    mostrar(){
        console.log(`su sueldo es de ${this.sueldobruto} y su sueldo neto es ${this.sueldobruto-(this.sueldobruto*0.20)}`);
    }
    
}
class cliente{
    constructor(telefonodecon){
        this.telefonodecon=telefonodecon;
    }
    mostrar(){
        console.log(`su telefono es ${this.telefonodecon}`);
    }
}
class directivo{
    constructor(categoria){
        this.categoria=categoria;
    }
    mostrar(){
    console.log(`su categoria es ${this.categoria}`);
    }
}











const per1 = new persona('alfredo', 20);
const sueldob = new empleado(20000);
const telefono = new cliente(1344);
const direc = new directivo('jefe de plata');

per1.mostrar();
sueldob.mostrar();
telefono.mostrar();
direc.mostrar();