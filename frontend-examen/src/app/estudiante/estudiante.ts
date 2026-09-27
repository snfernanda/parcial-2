import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudiantesService } from '../services/estudiantes.service';
import { Estudiante } from '../models/estudiante.model';

@Component({
  selector: 'app-estudiante',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './estudiante.html',
})
export class EstudianteComponent implements OnInit {
  lista: Estudiante[] = [];
  constructor(private service: EstudiantesService) {}
  ngOnInit() { this.cargar(); }
  cargar() { this.service.getAll().subscribe(d => this.lista = d); }
  crear() {
    const n: Estudiante = {
      carnet: '0901-23-' + Math.floor(Math.random() * 9999),
      nombres: 'Katherine', apellidos: 'Sandoval',
      fechaNacimiento: '2003-05-10', sexo: 'F',
    };
    this.service.create(n).subscribe(() => this.cargar());
  }
  eliminar(c: string) { this.service.delete(c).subscribe(() => this.cargar()); }
}
