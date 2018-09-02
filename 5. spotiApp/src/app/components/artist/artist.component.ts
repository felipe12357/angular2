import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from '../../services/spotify.service';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  artista:any={};
  topCanciones:any[]=[];
  constructor(private _ActivatedRoute:ActivatedRoute,
              public _spotify:SpotifyService) { }

  ngOnInit() {
    //De esta forma recibo lso parametros enviados or la url
    this._ActivatedRoute.params.subscribe(params=>{
      //console.log("el parametro"+params['id']);
      this._spotify.getArtista(params['id']).subscribe(respuesta=>{
            this.artista=respuesta;
            console.log(this.artista);
      });

      this._spotify.getTopsCanciones(params['id'])
      .map((respuesta:any)=>respuesta.tracks)
      .subscribe(pistas=>{
            this.topCanciones=pistas;
            console.log(this.topCanciones);
      });

    });
    //De esta forma mapeo lo eenvai la url y trabajo solo con el atributo que usa
    /*
    this._ActivatedRoute.params
    .map(params=>params['id'])
    .subscribe(id=>{
      console.log(id);
    });
    */
 }

}
