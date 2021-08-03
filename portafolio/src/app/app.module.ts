import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';
import { DatosAcademicosComponent } from './components/datos-academicos/datos-academicos.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DatosPersonalesComponent,
    DatosAcademicosComponent,
    ExperienciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
