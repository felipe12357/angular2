import { RouterModule, Routes } from '@angular/router';
import { GestionComponent } from './componentes/gestion/gestion.component';
import { ListadoComponent} from './componentes/listado/listado.component';


const APP_ROUTES: Routes = [
  { path: 'listar', component:ListadoComponent },
  { path: 'heroe/:id', component:GestionComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'listar' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);