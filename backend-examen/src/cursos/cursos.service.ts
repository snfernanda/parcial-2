import { Injectable } from '@nestjs/common';
import { Curso } from './curso.model';

@Injectable()
export class CursosService {
  private cursos: Curso[] = [];

  findAll() { return this.cursos; }
  findOne(id: number) { return this.cursos.find(c => c.id === id); }
  create(curso: Curso) { this.cursos.push(curso); return curso; }
  update(id: number, datos: Partial<Curso>) {
    const c = this.findOne(id);
    if (c) Object.assign(c, datos);
    return c;
  }
  patch(id: number, datos: Partial<Curso>) { return this.update(id, datos); }
  remove(id: number) {
    const idx = this.cursos.findIndex(c => c.id === id);
    if (idx === -1) return false;
    this.cursos.splice(idx, 1);
    return true;
  }
}
