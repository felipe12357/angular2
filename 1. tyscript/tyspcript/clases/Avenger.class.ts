class Avenger{
  nombre:string;
  nombreReal:string;
  puedePelear:boolean=false;
  //poderes=[];
  peleasGanadas:number=0;

  constructor(nombre:string,nombreReal:string){
    this.nombre=nombre;
    this.nombreReal=nombreReal;
  }

  imprimir(){
    console.log(`este es el vengador: ${this.nombre}`);
  }
}

let capitanAmerica:Avenger=new Avenger("Capitán América","Jhon");
capitanAmerica.imprimir();
console.log(capitanAmerica);
