import { Component, OnInit } from '@angular/core';
import {AutentificacionService} from '../../servicios/autentificacion.service';
@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styleUrls: ['./protegida.component.css']
})
export class ProtegidaComponent implements OnInit {
  profile:any
  constructor(private auth:AutentificacionService) { }

  ngOnInit() {
      if (this.auth.userProfile) {
        this.profile = this.auth.userProfile;
      } else {
        this.auth.getProfile((err, profile) => {
          this.profile = profile;
        });
      }
  }

}
