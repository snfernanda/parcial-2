import { Injectable } from '@nestjs/common';
import { Estudiante } from './estudiante.model';

@Injectable()
export class EstudiantesService {
  private estudiantes: Estudiante[] = [];

  findAll() { return this.estudiantes; }
  findOne(carnet: string) { return this.estudiantes.find(e => e.carnet === carnet); }
  create(est: Estudiante) { this.estudiantes.push(est); return est; }
  update(carnet: string, datos: Partial<Estudiante>) {
    const est = this.findOne(carnet);
    if (est) Object.assign(est, datos);
    return est;
  }
  patch(carnet: string, datos: Partial<Estudiante>) { return this.update(carnet, datos); }
  remove(carnet: string) {
    const idx = this.estudiantes.findIndex(e => e.carnet === carnet);
    if (idx === -1) return false;
    this.estudiantes.splice(idx, 1);
    return true;
  }
}
