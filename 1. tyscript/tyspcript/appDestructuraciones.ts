let avenger={
  nombre:"Steve",
  clave:"Capitan América",
  poder:"Droga"
}
//Forma normal
let nombre1=avenger.nombre;
//Forma Fácil de obtener cada una de las propiedades
let{nombre,clave,poder}=avenger
//de esta forma se asigno la propieda nombre del objeto vengador a la variable nombre
console.log(`el nombre del vengador ${nombre}`);


// Destructuraicon de arreglo
let ligaJusticia:string[]= ['batman','superman','flash'];
//de esta forma se asigno a la variable super3 el 3rd contenido del array de ligaJusticia
let [super1,,super3]=ligaJusticia;
console.log(super3);
