import { Routes } from '@angular/router';


import {UsuarioDetalleComponent} from './usuario-detalle.component';
import {UsuarioEditaComponent} from './usuario-edita.component';
import {UsuarioNuevoComponent} from './usuario-nuevo.component';

 export const USUARIO_ROUTES: Routes = [
  {path: 'nuevo',component:UsuarioNuevoComponent},
  {path: 'edita',component:UsuarioEditaComponent},
  {path: 'detalle',component:UsuarioDetalleComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'detalle' }
];
