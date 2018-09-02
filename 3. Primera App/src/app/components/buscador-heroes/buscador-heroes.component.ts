import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService, IHeroe} from '../../services/heroes.service';
@Component({
  selector: 'app-buscador-heroes',
    templateUrl: '../heroes/heroes.component.html',
//  templateUrl: './buscador-heroes.component.html',
//  styleUrls: ['./buscador-heroes.component.css']
})
export class BuscadorHeroesComponent implements OnInit {
  heroes:IHeroe[]=[];
    termino:string;
  constructor(
      private _activatedRoute:ActivatedRoute,
      private _heroesService:HeroesService
  ) {  }

  ngOnInit() {

    this._activatedRoute.params.subscribe(params=>{
    //  console.log(params);
      this.termino= params['texto'];
      this.heroes=this._heroesService.buscarHeroe(params['texto']);
      console.log(this.heroes.length);
    });
  }

}
