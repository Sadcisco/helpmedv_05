import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonaRoutingModule } from './persona-routing.module';
import { FormsModule } from '@angular/forms';
import { PersonaService } from '../servicio/persona.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PersonaRoutingModule,
    FormsModule
  ],
  providers:[
    PersonaService
  ]
})
export class PersonaModule { }
