import { Injectable } from '@angular/core';
import { Http, Headers} from "@angular/http";
import {Heroe} from "../interfaces/heroe.inteface";
import 'rxjs/Rx';

@Injectable()
export class HeroesService {

  heroesURL:string="https://heroes-app-d37ee.firebaseio.com/Heroes.json";
  heroeURL:string="https://heroes-app-d37ee.firebaseio.com/Heroes/";
  constructor(private http:Http) { 

  }

  nuevoHeroe(heroe:Heroe){
    let body=JSON.stringify(heroe);
    let headers=new Headers({
      'Content-type':'application/json'
    });
   
    return this.http.post( this.heroesURL,body,{headers})
    //De esta forma se envia la respuesta mapeada y no el objeto completo
    //para utilizarla se debe importar el rxjs/rx
    .map(res=>{
        //console.log(res.json());
        return res.json();
    });
  }

  consultarHeroe(id:string){
    //console.log("en la consulta");
    let headers=new Headers({
      'Content-type':'application/json'
    });
    const url=this.heroeURL+id+".json";
   
    return this.http.get( url,{headers})
    //De esta forma se envia la respuesta mapeada y no el objeto completo
    //para utilizarla se debe importar el rxjs/rx
    .map(res=>{
      //  console.log(res.json());
        return res.json();
    });
  }

  listarHeroes(){
    let headers=new Headers({
      'Content-type':'application/json'
    });
    const url=this.heroesURL;
   
    return this.http.get( url,{headers})
    //De esta forma se envia la respuesta mapeada y no el objeto completo
    //para utilizarla se debe importar el rxjs/rx
    .map(res=>{
      //  console.log(res.json());
        return res.json();
    });
  }

  actualizarHeroe(heroe:Heroe,id){
    let body=JSON.stringify(heroe);
    let headers=new Headers({
      'Content-type':'application/json'
    });

    const url=this.heroeURL+id+".json";
   
    return this.http.put( url,body,{headers})
    .map(res=>{
        //console.log(res.json());
        return res.json();
    });
  }

  borrarHeroe(id){
     //console.log("en la consulta");
     let headers=new Headers({
      'Content-type':'application/json'
    });
    const url=this.heroeURL+id+".json";
   
    return this.http.delete( url,{headers})
    //De esta forma se envia la respuesta mapeada y no el objeto completo
    //para utilizarla se debe importar el rxjs/rx
    .map(res=>{
      //  console.log(res.json());
        return res.json();
    });
  }

}
