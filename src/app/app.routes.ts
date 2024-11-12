import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InmueblesComponent } from './inmuebles/inmuebles.component';
import { InmueblesFormComponent } from './inmuebles-form/inmuebles-form.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PersonasComponent } from './personas/personas.component';
import { PersonasFormComponent } from './personas-form/personas-form.component';
import { TransaccionesComponent } from './transacciones/transacciones.component';
import { PersonasViewComponent } from './personas-view/personas-view.component';
import { InmueblesViewComponent } from './inmuebles-view/inmuebles-view.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home',
    },
    {
        path: 'personas',
        component: PersonasComponent,
        title: 'Personas',
    },
    {
        path: 'personas/:id',
        component: PersonasViewComponent,
        title: 'Personas',
    },
    {
        path: 'formulariopersonas/:id',
        component: PersonasFormComponent,
        title: 'Personas',
    },
    {
        path: 'inmuebles',
        component: InmueblesComponent,
        title: 'Inmuebles',
    },
    {
        path: 'inmuebles/:id',
        component: InmueblesViewComponent,
        title: 'Inmuebles',
    },
    {
        path: 'formularioinmuebles/:id',
        component: InmueblesFormComponent,
        title: 'Inmuebles',
    },
    {
        path: 'transacciones',
        component: TransaccionesComponent,
        title: 'Propiedades',
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full',
    }
];
