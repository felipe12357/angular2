import { RouterModule, Routes } from '@angular/router';
//import { NgClassComponent } from './ng-class/ng-class.component';
import { UsuarioComponent } from './usuario/usuario.component';
import {HomeComponent} from './home/home.component';
import { USUARIO_ROUTES } from './usuario/usuario.routes';

const APP_ROUTES: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'usuario/:id',
    component:UsuarioComponent,
    children:USUARIO_ROUTES
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
