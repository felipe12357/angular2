import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { GestionComponent } from './componentes/gestion/gestion.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { HeroesService }  from './servicios/heroes.service';
import { ObjPipe } from './pipes/obj.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GestionComponent,
    ListadoComponent,
    ObjPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
