import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ app_routing } from './app.routes';
//Necesario para poder hacer peticiones post, get,
import {HttpClientModule} from '@angular/common/http';

//Necesario para trabajar con los formularios
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';

//Servicios
import {SpotifyService} from './services/spotify.service';
import { SinFotoPipe } from './pipes/sin-foto.pipe';
import { ArtistComponent } from './components/artist/artist.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    SinFotoPipe,
    ArtistComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule,
    FormsModule,

  ],
  providers: [
      SpotifyService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
