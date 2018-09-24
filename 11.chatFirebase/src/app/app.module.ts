import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { ChatComponent } from './componentes/chat/chat.component';

import {ChatService} from './servicios/chat.service';
/**
 Para que esta app funcione se necesita trabjar bajo las sigueintes versiones
 ya que almomento de implmentarlo las versiones actuales presentaban errores

     npm uninstall angularfire2
    npm install angularfire2@5.0.0-rc.4
    npm uninstall firebase
    npm install firebase@4.8.0

    por tal motivo tambien se omitio la inclusion de AngularFireStorageModule
 */

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
