import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_ROUTING} from './app.routes';

import { AppComponent } from './app.component';

import { NgClassComponent } from './ng-class/ng-class.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HomeComponent } from './home/home.component';

import { UsuarioNuevoComponent } from './usuario/usuario-nuevo.component';
import { UsuarioEditaComponent } from './usuario/usuario-edita.component';
import { UsuarioDetalleComponent } from './usuario/usuario-detalle.component';
import { TemplateComponent } from './componentes/template/template.component';


@NgModule({
  declarations: [
    AppComponent,
    NgClassComponent,
    NavbarComponent,
    UsuarioComponent,
    HomeComponent,
    UsuarioNuevoComponent,
    UsuarioEditaComponent,
    UsuarioDetalleComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
