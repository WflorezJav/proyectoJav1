import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Componente1Component } from './components/componente1/componente1.component';
import { Componente2Component } from './components/componente2/componente2.component';
import { FormsModule } from '@angular/forms';
import { PadreComponent } from './components/padre/padre.component';
import { HijoComponent } from './components/hijo/hijo.component';
import { AdminAnimalesComponent } from './components/admin-animales/admin-animales.component';
import { AdminAnimalesAddComponent } from './components/admin-animales-add/admin-animales-add.component';
import { CargarfotosComponent } from './components/cargarfotos/cargarfotos.component';
import { HttpClientModule } from '@angular/common/http';
import { InicialComponent } from './rutascomponents/inicial/inicial.component';
import { AppRoutingModule } from './app.routes';
import { Inicial2Component } from './rutascomponents/inicial2/inicial2.component';
import { NoExisteComponent } from './rutascomponents/no-existe/no-existe.component';
import { InicialPersonaComponent } from './rutascomponents/inicial-persona/inicial-persona.component';
import { SegundoPersonaComponent } from './rutascomponents/segundo-persona/segundo-persona.component';
import { TerceroPersonaComponent } from './rutascomponents/tercero-persona/tercero-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    Componente1Component,
    Componente2Component,
    PadreComponent,
    HijoComponent,
    AdminAnimalesComponent,
    AdminAnimalesAddComponent,
    CargarfotosComponent,
    InicialComponent,
    Inicial2Component,
    NoExisteComponent,
    InicialPersonaComponent,
    SegundoPersonaComponent,
    TerceroPersonaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
