import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HomeComponent } from './componentes/home/home.component';
import { PreciosComponent } from './componentes/precios/precios.component';
import { ProtegidaComponent } from './componentes/protegida/protegida.component';
import {APP_ROUTING} from './app.routes';
import {AutentificacionService} from './servicios/autentificacion.service'
import {AuthGuardService} from './servicios/auth-guard.service'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreciosComponent,
    ProtegidaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    AutentificacionService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
