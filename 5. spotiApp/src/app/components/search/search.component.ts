import { Component, OnInit } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  termino:string="";
  constructor(public _spotify:SpotifyService) {
      //De esta forma ejecuta el subscribe en el servicio.
      //La peticion solo se dispara con el subscribe
      //this._spotify.getArtistas();
  }

  ngOnInit() {
  }


  asociarVariableTermino=function(valor){
    this.termino=valor;
    this.buscarArtista();
  }

  buscarArtista(){

    if(this.termino.length>2){
      this._spotify.getArtistas(this.termino)

      .subscribe(respuesta=>{
        //console.log(respuesta);
      });
    }
  }

}
