import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AptitudesHabilidadesComponent } from './components/aptitudes-habilidades/aptitudes-habilidades.component';
import { DatosAcademicosComponent } from './components/datos-academicos/datos-academicos.component';
import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';

const routes: Routes = [

  {
    path: '', component: DatosPersonalesComponent
  },
  {
    path: 'datos-personales', component: DatosPersonalesComponent
  },
  {
    path: 'datos-academicos', component: DatosAcademicosComponent
  },
  {
    path: 'experiencia-profesional', component: ExperienciaComponent
  },
  {
    path: 'aptitudes-habilidades', component: AptitudesHabilidadesComponent
  },
  {
    path: '**', component: DatosPersonalesComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
