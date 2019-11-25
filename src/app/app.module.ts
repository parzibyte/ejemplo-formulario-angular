import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';// <---- Importar FormsModule

import { AppComponent } from './app.component';
import { FormularioMascotaComponent } from './formulario-mascota/formulario-mascota.component';

@NgModule({
  imports:      [ BrowserModule, /*Importante importar FormsModule -->*/FormsModule ],
  declarations: [ AppComponent, FormularioMascotaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
