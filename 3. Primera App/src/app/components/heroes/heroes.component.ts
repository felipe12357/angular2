import { Component, OnInit } from '@angular/core';
import {HeroesService, IHeroe} from '../../services/heroes.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {
  heroes:IHeroe[]=[];
  constructor(
    private _heroesService:HeroesService,
    private _router:Router
  ) {
      console.log("el constrctor se ejecuta primero");
  }

  ngOnInit() {
    console.log("este se ejecuta despeus cuando la pagina se renderiza");
    this.heroes=this._heroesService.getHeroes();
    //console.log(this.heroes);
  }


}
