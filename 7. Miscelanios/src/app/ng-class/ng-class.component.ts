import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {
  peligro:boolean=true;
  cargando:boolean=false;
  constructor() { }
  guardarData(){
    this.cargando=true;
    setTimeout(()=>this.cargando=false,5000)
    console.log(this.cargando);
  }
  ngOnInit() {
  }

}
