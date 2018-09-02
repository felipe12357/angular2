"use strict";
var Avenger = /** @class */ (function () {
    function Avenger(nombre, nombreReal) {
        this.puedePelear = false;
        //poderes=[];
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
    Avenger.prototype.imprimir = function () {
        console.log("este es el vengador: " + this.nombre);
    };
    return Avenger;
}());
var capitanAmerica = new Avenger("Capitán América", "Jhon");
capitanAmerica.imprimir();
console.log(capitanAmerica);
