interface Xmen{
  nombre:string,
  poder:string
}

function enviarMision(xmen:Xmen){
  console.log("enviando a la mision al heroe: "+xmen.nombre);
}

let ciclope:Xmen={
  nombre:"scouth",
  poder:"rayos por los ojos"
}

enviarMision(ciclope);
