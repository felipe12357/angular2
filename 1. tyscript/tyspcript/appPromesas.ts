let prom1=new Promise( function( resolve,reject){
  //Forma de ejecucion con una funcion tipo flecha
  setTimeout(()=>{
    console.log("termino la promesa");
    resolve();

  },3000);

  setTimeout(function(){
      console.log("promesa con erro sin tipo felcha");
      reject();
  },1500);


});
console.log("Paso 1");
prom1.then(
  function(){ console.log("temino Ok");  },
  function(){console.error("termino mal");}
)
console.log("Paso 2");
