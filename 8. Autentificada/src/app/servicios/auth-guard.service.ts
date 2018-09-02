import { Injectable } from '@angular/core';
import {Router,
        ActivatedRouteSnapshot,
        RouterStateSnapshot,
        CanActivate} from "@angular/router";
import {AutentificacionService} from "./autentificacion.service";

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private auth:AutentificacionService) { }

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot){
    console.log("en el activate00");
    if(this.auth.isAuthenticated()){
      console.log("entro");
      return true;
    }else{
      console.log("no entro");
      return false;
    }

  }
}
