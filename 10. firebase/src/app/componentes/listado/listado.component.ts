import { Component, OnInit } from '@angular/core';
import {HeroesService} from '../../servicios/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes=[];
  heroes2=[];
  loading1:boolean=true;
  loading2:boolean=true;

  constructor(private _heroesService:HeroesService) {
    this.consultar();
    this.consultar2();
   }

  ngOnInit() {
  }

  //Metodo1
  consultar=function(){
    this._heroesService.listarHeroes()
    .subscribe(data=>{
      for(let key in data){
        var heroe=data[key];
        heroe.id=key;
        this.heroes.push(heroe);
        
      }
      this.loading1=false;
      //console.log(this.heroes);
    });
  }

  consultar2=function(){
    this._heroesService.listarHeroes()
    .subscribe(data=>{
       this.heroes2=data;
       this.loading2=false;
    });
  }

  //Metodo1
  borrar=function(id){
    this._heroesService.borrarHeroe(id)
    .subscribe(data=>{
      for(var a=0;a<this.heroes.length;a++){
        if(id==this.heroes[a].id){
          this.heroes.splice(a,1);
        }
      }
    });
  }

  //Metodo2
  borrar2=function(id){

    this._heroesService.borrarHeroe(id)
    .subscribe(data=>{
      delete this.heroes2[id];
    });
  }

}
