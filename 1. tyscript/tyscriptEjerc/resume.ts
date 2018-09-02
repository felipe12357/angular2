console.log("Inicio");

class Vengador implements Iavenger {
  nombre:string;
  habilidades:[string];
  numVictorias:number;
  arma:string;

  constructor(nombre:string,habilidades:[string],arma?:string,numVictorias:number=0){
    this.nombre=nombre;
    this.habilidades=habilidades;
    this.numVictorias=numVictorias;

    if(arma)
      this.arma=arma;
  }

  imprimir(){
    console.log(`hola soy: ${this.nombre} y mis habilidades incluyen: ${this.habilidades} `);
  }
  mostrarArmas(){
    if(this.arma!="" && this.arma!=null)
      console.log("mis armas son: "+this.arma);
    else
      console.log("yo no uso armas!");
  }
}

let falcon:Vengador=new Vengador("Falcon",['Volar','tirar bombas'],"M-19");
falcon.imprimir();
falcon.mostrarArmas();
