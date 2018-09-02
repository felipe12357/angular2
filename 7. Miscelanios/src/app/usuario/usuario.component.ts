import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  /*constructor() {
    console.log("iniciass");
  }*/

  constructor(private router:ActivatedRoute) {
    this.router.params.subscribe(parametros=>{
      console.log("en el papa");
      console.log(parametros);
    });
  }

  ngOnInit() {
  }

}
