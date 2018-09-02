"use strict";
console.log("Inicio");
var Vengador = /** @class */ (function () {
    function Vengador(nombre, habilidades, arma, numVictorias) {
        if (numVictorias === void 0) { numVictorias = 0; }
        this.nombre = nombre;
        this.habilidades = habilidades;
        this.numVictorias = numVictorias;
        if (arma)
            this.arma = arma;
    }
    Vengador.prototype.imprimir = function () {
        console.log("hola soy: " + this.nombre + " y mis habilidades incluyen: " + this.habilidades + " ");
    };
    Vengador.prototype.mostrarArmas = function () {
        if (this.arma != "" && this.arma != null)
            console.log("mis armas son: " + this.arma);
        else
            console.log("yo no uso armas!");
    };
    return Vengador;
}());
var falcon = new Vengador("Falcon", ['Volar', 'tirar bombas'], "M-19");
falcon.imprimir();
falcon.mostrarArmas();
