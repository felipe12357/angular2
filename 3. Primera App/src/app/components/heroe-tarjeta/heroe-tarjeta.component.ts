import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe:any={};
  @Input() i="";
  constructor( private _router:Router) { }

  ngOnInit() {
  }

  verHeroe(idx:number){
    this._router.navigate(['/heroe',idx]);
    //  console.log("el numbero es"+idx);
  }

}
