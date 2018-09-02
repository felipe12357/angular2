"use strict";
var avenger = {
    nombre: "Steve",
    clave: "Capitan América",
    poder: "Droga"
};
//Forma normal
var nombre1 = avenger.nombre;
//Forma Fácil de obtener cada una de las propiedades
var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
//de esta forma se asigno la propieda nombre del objeto vengador a la variable nombre
console.log("el nombre del vengador " + nombre);
// Destructuraicon de arreglo
var ligaJusticia = ['batman', 'superman', 'flash'];
//de esta forma se asigno a la variable super3 el 3rd contenido del array de ligaJusticia
var super1 = ligaJusticia[0], super3 = ligaJusticia[2];
console.log(super3);
