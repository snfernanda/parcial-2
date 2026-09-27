import { Component } from '@angular/core';
import { EstudianteComponent } from './estudiante/estudiante';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EstudianteComponent],
  template: '<app-estudiante></app-estudiante>',
})
export class AppComponent {}
