import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Heroe} from '../../interfaces/heroe.inteface';
import {HeroesService} from '../../servicios/heroes.service';
import {Router,ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {

  heroe:Heroe={
    nombre:"",
    casa:"Marvel",
    nvlPoder:0
  }

  params:string;
  
  constructor(private _heroesService:HeroesService, private router:Router,
    private _ActivatedRoute:ActivatedRoute) { }

  ngOnInit() {

      //De esta forma recibo lso parametros enviados or la url
      this._ActivatedRoute.params.subscribe(params=>{
          this.params=params['id'];
          if(this.params!="nuevo"){
            this._heroesService.consultarHeroe(this.params)
            .subscribe(data=>{
              console.log(data);
              this.heroe=data;
            });
          }
          //console.log(params['id']);
      });
  }

  guardar=function(){
    if(this.paramas=="nuevo")
      this.crearHeroe();
    else
      this.actualizarHeroe(this.params);
    //console.log(this.params);
  }

  crearHeroe=function(){
    this._heroesService.nuevoHeroe(this.heroe)
    .subscribe(data=>{
      this.router.navigate(['/heroe',data.name]);
      //console.log("en el subscribe");
      //console.log(data);
    });
    //console.log(this.heroe);
  }

  actualizarHeroe=function(){
    this._heroesService.actualizarHeroe(this.heroe,this.params)
    .subscribe(data=>{
        console.log(data);
        //this.router.navigate(['/heroe',data.name]);
    });
  }

  agregarNuevo(forma:NgForm){
    this.router.navigate(['/heroe','nuevo']);
    forma.reset({
      casa:"Marvel"
    })
  }
}
