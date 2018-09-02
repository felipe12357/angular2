import { Injectable } from '@angular/core';
//Necesario par apoder hacer peticiones get, post
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map'
@Injectable()
export class SpotifyService {

  artistas:any[]=[];

  token:string="BQCI4SzKWa0EwQvB1IOiWq2PYmzZhIkHgzm5pMWZ9wpy477VWISaKgF__xia1P9wuKRDsAavh8H3UhsaSqs";
  url:string="https://api.spotify.com/v1/";
  constructor(public http:HttpClient) {
    console.log('servicio inicializado');
  }

  private getCabecerasPeticion(){
    let cabeceras=new HttpHeaders({
      //esta autorizacon se debe modificar cada hora
      'Authorization':`Bearer ${this.token}`,
    });
    return cabeceras;
  }

  getArtista(id:string){
  //  console.log("en el servicio");
    let url=`${this.url}artists/${id}`;
    let cabeceras=this.getCabecerasPeticion();

    return this.http.get(url,{headers:cabeceras})

  }

  getTopsCanciones(id:string){
    let url=`${this.url}artists/${id}/top-tracks?country=us`;
    let cabeceras=this.getCabecerasPeticion();

    return this.http.get(url,{headers:cabeceras});
  }


  getArtistas(termino:string){
    let url=`${this.url}search?query=${termino}&type=artist&limit=10`;
    let cabeceras=this.getCabecerasPeticion();

    //Retorna el objeto mapeado... enviando solo el atributo que necesita
    return this.http.get(url,{headers:cabeceras}).map((resp:any)=>{
      //console.log(resp);
      this.artistas=resp.artists.items;

    });
    //Esta es la forma de hacer una peticion, sin enviar parametroes  de autentificacion
    //Esto es un observable y para recibir la respuesta se debe suscribir
    /*
    this.http.get(url)
    .subscribe(response=>{
      console.log(response);
    })
    */


    //De esa forma se envia la respuesta completa, aun que lo recomentable es q la suscribcion se haga en otra parte
    /*
        this.http.get(url,{headers:cabeceras})
        .subscribe(response=>{
          console.log(response);
        })
    */

  }

}
