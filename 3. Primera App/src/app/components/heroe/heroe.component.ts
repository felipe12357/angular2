import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService, IHeroe} from '../../services/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {
  heroe:IHeroe;

  constructor(private _ActivatedRoute:ActivatedRoute,
      private _HeroesService:HeroesService
  ) {
    //De esta forma recibo lso parametros enviados or la url
    this._ActivatedRoute.params.subscribe(params=>{
    //  console.log(params['id']);

      this.heroe=_HeroesService.getHeroe(params['id']);
      //this.heroe.imagenLogo="assets/img/"+this.heroe.casa+".png";
    //  console.log(this.heroe);
    });

  }

  ngOnInit() {
  }

}
