import { Component } from '@angular/core';
import { AutentificacionService} from "../../servicios/autentificacion.service"
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent   {
  //validar:boolean=false;
  constructor( public auth:AutentificacionService) {
      this.auth.handleAuthentication();

      //this.validar=auth.isAuthenticated();

  }

  ingresar(){
    this.auth.login();
  }

  salir(){
    console.log("en la salida");
    this.auth.logout();
    this.auth.isAuthenticated();
  }
  estado(){
    let estado=this.auth.isAuthenticated();
    console.log(estado);
  }

}
