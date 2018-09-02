import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  PI=Math.PI;
  nombre="Andres";
  nombreRaro="andRes FElipe TAmayo";
  video="-2VPKWwl5Rw";
  persona={
    nombre:"Andres",
    apelidos:"Tamayo",
    telefono:"2165964",
    edad:30,
    salario:2800000,
    aumento:0.06,
    fechaNacimiento:new Date('1987-11-11')
  }

  mostrar=true;
  textoMostrar="Mostrar";
 valorDePromesa=new Promise((resolve,reject)=>{
   setTimeout(()=>resolve('Llego la data!'),3500);
 });

 arr=[0,1,2,3,4,5,6,7]

 cambiar=function(){
   this.mostrar=!this.mostrar;
   if(this.mostrar==true)
     this.textoMostrar="Mostrar";
   else
    this.textoMostrar="Ocultar";

   console.log(this.textoMostrar);
 }
}
