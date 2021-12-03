import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { asistenciaTelefonicaComponent } from 'src/pages/asistenciaTelefonica/asistenciaTelefonica.component';
import { helpComponent } from 'src/pages/help/help.component';
import { LoginComponent } from 'src/pages/login/login.component';
import { MainComponent } from 'src/pages/main/main.component';
import { nivelesEmergenciaComponent } from 'src/pages/nivelesEmergencia/nivelesEmergencia.component';
import { NoteComponent } from 'src/pages/note/note.component';
import { reclamosSugerenciasComponent } from 'src/pages/reclamosSugerencias/reclamosSugerencias.component';
import { RegisterComponent } from 'src/pages/registro/registro.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path:'persona',
    loadChildren: () => import('./persona/persona.module').then(m => m.PersonaModule)
  },
  {
    path: 'registro',
    component: RegisterComponent
  },
  {
    path: 'menu-principal',
    component: MainComponent
  },
  {
    path: 'notas',
    component: NoteComponent
  },
  {
    path:'help',
    component: helpComponent
  },
  {
    path: 'asistenciaTelefonica',
    component: asistenciaTelefonicaComponent
  },
  {
    path: 'nivelesEmergencia',
    component: nivelesEmergenciaComponent
   
  },
   {
      path: 'reclamosSugerencias',
      component: reclamosSugerenciasComponent
    },
    
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
