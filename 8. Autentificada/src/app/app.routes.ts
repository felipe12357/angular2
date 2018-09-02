import { RouterModule, Routes } from '@angular/router';
import{HomeComponent} from './componentes/home/home.component';
import{PreciosComponent} from './componentes/precios/precios.component';
import{ProtegidaComponent} from './componentes/protegida/protegida.component';

import {AuthGuardService} from "./servicios/auth-guard.service"

const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'precios', component: PreciosComponent },
  { path: 'protegida',
   component: ProtegidaComponent
   canActivate:[AuthGuardService]
 },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
