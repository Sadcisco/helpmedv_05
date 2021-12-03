import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/servicio/persona.service';
import { IPersona } from '../interfaz/IPersona';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {
  public  persona: IPersona ={
    nombre: '',
    apellido: '',
    nombre_usuario: '',
    contrasena: '',
    edad: '0'
  }
  private servicio: PersonaService

  constructor(personaServicio:PersonaService) {
    this.servicio = personaServicio; 
   }

  public agregarPersona(){
    console.log(this.persona);
    this.servicio.agregarPersona(this.persona)
    .subscribe(respuesta =>{
      console.log(respuesta);
    }) 
    
  }

  ngOnInit() {}

}
